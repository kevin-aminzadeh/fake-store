import { Ionicons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import { Image } from "expo-image";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Platform,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import Animated, {
  FadeIn,
  SlideInDown,
  SlideOutDown,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import Heading from "~/components/core/heading";
import colors from "~/constants/theme/colors";

function Page() {
  const OS = Platform.OS;
  const { top, left, right, bottom } = useSafeAreaInsets();
  const [loading, setLoading] = useState(true);
  const { id } = useLocalSearchParams();
  const [product, setProduct] = useState<Product | null>(
    null,
  );

  useEffect(() => {
    async function fetchProduct() {
      const response = await fetch(
        `https://fakestoreapi.com/products/${id}`,
      );
      if (response.ok) {
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      }
    }
    fetchProduct();
  }, [id]);

  return (
    <View className="flex flex-col flex-1 w-full h-full bg-white">
      {product?.id ? (
        <>
          <Animated.View
            className="w-full h-2/5"
            entering={FadeIn}
          >
            <View
              className="flex flex-1 justify-center items-center w-full bg-white"
              style={{
                paddingTop: top + 16,
                paddingRight: right + 12,
                paddingBottom: bottom,
                paddingLeft: left + 12,
              }}
            >
              <Image
                source={product?.image}
                contentFit="contain"
                contentPosition="center"
                transition={250}
                style={{
                  flex: 1,
                  width: "100%",
                }}
              />
            </View>
          </Animated.View>
          <Animated.View
            className="flex flex-col pt-8 bg-white rounded-t-[2rem] absolute bottom-0 left-0 w-full h-3/5  border border-light flex-1"
            entering={SlideInDown}
            exiting={SlideOutDown}
          >
            <View className="flex flex-col w-full overflow-hidden gap-1 px-6 pb-2">
              <View className="flex w-full justify-between flex-row items-center">
                <Text className="uppercase text-neutral tracking-widest text-xs">
                  {product?.category}
                </Text>
                <View className="flex flex-row gap-1 justify-center items-center">
                  <Ionicons
                    name="star"
                    size={14}
                    color="#FFD700"
                  />
                  <View className="flex flex-row gap-1 items-center">
                    <Text className="font-medium text-sm">
                      {product?.rating.rate}
                    </Text>
                    <Text className="text-xs text-neutral-content">
                      ({product?.rating.count})
                    </Text>
                  </View>
                </View>
              </View>
              <View className="flex flex-row w-full grow">
                <Heading
                  size="2xl"
                  className="font-extrabold"
                  color="black"
                  text={product?.title}
                />
              </View>
            </View>
            <ScrollView
              showsVerticalScrollIndicator={false}
              className="px-6 pt-6 flex-0"
            >
              <View className="flex flex-col gap-4 w-full h-full pb-16">
                <View className="flex flex-col gap-2">
                  <Text className="text-lg font-bold tracking-wider">
                    Description
                  </Text>
                  <Text className="text-neutral-content leading-7 font-normal">
                    {product?.description}
                  </Text>
                </View>
              </View>
            </ScrollView>
            <View
              className="pt-5 w-full border-t border-t-light px-6 flex flex-col justify-between gap-5 items-start"
              style={{
                paddingBottom:
                  OS === "ios" ? bottom + 1 : bottom + 16,
              }}
            >
              <View className="flex flex-row w-full justify-between items-center">
                <View className="rounded-full border border-light py-2 h-12 px-4 flex flex-row gap-8 justify-between items-center">
                  <Pressable className="flex flex-row justify-center items-center">
                    <Text className="font-normal text-xl">
                      -
                    </Text>
                  </Pressable>
                  <Text className="font-bold text-xl">
                    1
                  </Text>
                  <Pressable className="flex flex-row justify-center items-center">
                    <Text className="font-normal text-xl">
                      +
                    </Text>
                  </Pressable>
                </View>
                <Text className="font-black text-3xl text-dark">
                  ${product.price.toFixed(2)}
                </Text>
              </View>
              <View className="flex flex-row w-full justify-between items-center gap-4">
                <Pressable
                  onPress={() => {
                    Haptics.impactAsync(
                      Haptics.ImpactFeedbackStyle.Light,
                    );
                  }}
                  className="flex flex-row justify-center items-center py-4 w-full bg-[#5B8078] rounded-full shrink"
                >
                  <Text className="text-white font-bold text-lg">
                    Add to Cart
                  </Text>
                </Pressable>
              </View>
            </View>
          </Animated.View>
        </>
      ) : (
        <View className="w-full h-full flex flex-1 justify-center items-center">
          {loading ? (
            <ActivityIndicator color={colors.dark} />
          ) : (
            <Text className="text-dark text-center">
              Product not found
            </Text>
          )}
        </View>
      )}
    </View>
  );
}

export default Page;
