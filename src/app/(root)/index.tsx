import { useEffect, useState } from "react";
import { View } from "react-native";

import CollectionList from "~/components/collection-list";

function Page() {
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
    <View className="flex-1 justify-center items-center flex flex-col  w-full h-full">
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
