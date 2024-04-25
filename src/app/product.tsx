import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import TitleBar from "~/components/core/title-bar";

function Page() {
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <View
      className="flex-1 justify-center items-center flex flex-col bg-base-200 w-full h-full"
      style={{
        paddingTop: safeAreaInsets.top,
      }}
    >
      <TitleBar title="Fake Store" />
      <View className="flex-1 w-full flex-col flex overflow-visible h-full justify-center px-8 gap-10">
        <View className="flex flex-row w-full justify-start items-start">
          <Text className="text-white text-5xl font-black text-center tracking-widest w-full">
            Product Details Page
          </Text>
        </View>
      </View>
    </View>
  );
}

export default Page;
