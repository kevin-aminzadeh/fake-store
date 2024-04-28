import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { View } from "react-native";

import ProductList from "~/components/product-list";

function Page() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
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
    <View className="flex-1 justify-center items-center flex flex-col w-full h-full">
      <ProductList products={products} loading={loading} />
    </View>
  );
}

export default Page;
