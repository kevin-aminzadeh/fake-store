import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import CollectionList from "~/components/collection-list";
import TitleBar from "~/components/core/title-bar";

function Page() {
  const { top } = useSafeAreaInsets();
  const [loading, setLoading] = useState<boolean>(true);
  const [collections, setCollections] = useState<string[]>(
    [],
  );

  useEffect(() => {
    async function fetchCollections() {
      const response = await fetch(
        "https://fakestoreapi.com/products/categories",
      );

      if (response.ok) {
        const data = await response.json();
        setCollections(data);
        setLoading(false);
      }
    }

    fetchCollections();
  }, []);

  return (
    <View className="flex-1 justify-center items-center flex flex-col  w-full h-full bg-light">
      <View
        className="flex flex-col w-full justify-start items-start pb-4"
        style={{
          paddingTop: top + 16,
        }}
      >
        <TitleBar title="collections" variant="dark" />
      </View>
      <View className="flex-1 w-full flex-col flex h-full justify-center px-2 ">
        <CollectionList
          collections={collections}
          loading={loading}
        />
      </View>
    </View>
  );
}

export default Page;
