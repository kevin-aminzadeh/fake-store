import { Ionicons } from "@expo/vector-icons";
import classNames from "classnames";
import { Image } from "expo-image";
import { Link, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  Text,
  View,
} from "react-native";
import baseColors from "tailwindcss/colors";

import colors from "~/constants/theme/colors";

function ProductCard({
  product,
  className,
}: {
  product: Product;
  className?: string;
}) {
  const { slug: collectionSlug } = useLocalSearchParams<{
    slug: string;
  }>();
  const [wishlisted, setWishlisted] =
    useState<boolean>(false);

  const handleAddToWishlist = () => {
    setWishlisted(!wishlisted);
  };

  return (
    <Link
      href={{
        pathname:
          "/collections/[collectionSlug]/products/[id]",
        params: { collectionSlug, id: product.id },
      }}
      asChild
    >
      <Pressable
        className={classNames(
          "flex flex-col flex-1 w-full bg-white overflow-hidden h-full",
          className,
        )}
      >
        <View className="flex  justify-center items-center w-full shrink overflow-hidden bg-white">
          <View className="flex w-full px-6">
            <Image
              source={product?.image}
              contentFit="contain"
              contentPosition="center"
              transition={250}
              style={{
                flex: 1,
                width: "100%",
                height: 300,
              }}
            />
          </View>
          <View className="absolute z-50 w-full flex flex-row justify-end items-center left-0 top-0 pt-4 px-4">
            <Pressable
              className={classNames(
                "flex flex-row items-center justify-center",
              )}
              onPress={() => handleAddToWishlist()}
            >
              <View
                className={classNames(
                  "p-2 rounded-full flex justify-center items-center h-10 w-10 transition-colors ease-in-out du",
                  wishlisted
                    ? "bg-[#EBE9EA]"
                    : "bg-[#EBE9EA]",
                )}
              >
                <Ionicons
                  name={
                    wishlisted ? "heart" : "heart-outline"
                  }
                  size={20}
                  color={
                    wishlisted
                      ? baseColors.red[500]
                      : colors["neutral-content"]
                  }
                />
              </View>
            </Pressable>
          </View>
        </View>
        <View className="px-4 bg-white pt-6 w-full flex flex-col flex-1 h-full grow justify-between gap-4 pb-4">
          <View className="flex w-full gap-1">
            <View className="flex w-full justify-between flex-row items-center">
              <View className="flex flex-row w-full gap-1 justify-center items-center">
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
            <Text className="text-dark text-lg text-center leading-snug">
              {product.title}
            </Text>
          </View>
          <View className="flex flex-row w-full justify-center items-center">
            <Text className="text-dark text-lg font-black">
              ${product.price.toFixed(2)}
            </Text>
          </View>
        </View>
      </Pressable>
    </Link>
  );
}

function ProductList({
  products = [],
  loading = true,
}: {
  products: Product[];
  loading: boolean;
}) {
  return products?.length > 0 ? (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id.toString()}
      showsVerticalScrollIndicator={false}
      numColumns={2}
      renderItem={({ item, index }) => (
        <View
          className={classNames(
            "w-full border-light border-b",
            index % 2 === 0 ? "border-r " : "",
            index === 0 || index === 1 ? "border-t" : "",
          )}
        >
          <ProductCard
            product={item}
            className={classNames(
              index === products.length - 1 ||
                index === products.length - 2
                ? "pb-4"
                : "",
            )}
          />
        </View>
      )}
      contentContainerClassName="flex flex-col w-full justify-center items-center"
      columnWrapperClassName="w-1/2"
    />
  ) : (
    <View>
      {loading ? (
        <ActivityIndicator color={colors.dark} />
      ) : (
        <Text className="text-dark">No products found</Text>
      )}
    </View>
  );
}

export default ProductList;
