import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import TitleBar from "~/components/core/title-bar";

import ProductList from "~/components/product-list";

function Page() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const { top } = useSafeAreaInsets();
  const { slug } = useLocalSearchParams();

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch(
        `https://fakestoreapi.com/products/category/${slug}`,
      );
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    }

    fetchProducts();
  }, [slug]);

  return (
    <View className="flex-1 justify-center items-center flex flex-col w-full h-full bg-light">
      <View
        className="flex flex-col w-full justify-start items-start pb-4"
        style={{
          paddingTop: top + 16,
        }}
      >
        <TitleBar
          title={slug as string}
          variant="dark"
          showBackButton
        />
      </View>
      <View className="flex-1 w-full flex-col flex h-full justify-center px-2">
        <ProductList
          products={products}
          loading={loading}
        />
      </View>
    </View>
  );
}

export default Page;
