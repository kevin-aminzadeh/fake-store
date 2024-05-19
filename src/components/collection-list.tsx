import { Link } from "expo-router";
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
} from "react-native";

import colors from "~/constants/theme/colors";

function CollectionCard({
  collection,
}: {
  collection: string;
}) {
  return (
    <Link
      className="flex flex-col flex-1 gap-2 w-full aspect-square bg-[#EAE4D8] overflow-hidden rounded-2xl py-10 px-8"
      href={{
        pathname: "/collections/[slug]",
        params: { slug: collection },
      }}
    >
      <Text className="text-dark text-6xl font-extrabold tracking-wide capitalize">
        {collection}
      </Text>
    </Link>
  );
}

function CollectionList({
  collections = [],
  loading = true,
}: {
  collections: string[];
  loading?: boolean;
}) {
  return collections?.length > 0 ? (
    <FlatList
      data={collections}
      keyExtractor={(item, idx) => `${idx}`}
      showsVerticalScrollIndicator={false}
      numColumns={1}
      renderItem={({ item }) => (
        <View className="w-full">
          <CollectionCard collection={item} />
        </View>
      )}
      contentContainerClassName="gap-6 px-4 w-full pb-20 flex flex-col py-10"
    />
  ) : (
    <View>
      {loading ? (
        <ActivityIndicator color={colors.dark} />
      ) : (
        <Text className="text-dark text-center">
          No collections found
        </Text>
      )}
    </View>
  );
}

export default CollectionList;
