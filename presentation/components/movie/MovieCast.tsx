import { Cast } from "@/infrastructure/interfaces/movie.interface";
import { FlatList, Text, View } from "react-native";
import { ActorCard } from "./ActorCard";

interface Props {
  cast: Cast[];
}

const MovieCast = ({ cast }: Props) => {
  return (
    <>
      <Text className="font-bold text-2xl px-5 my-4">Cast</Text>
      <View className="pr-5">
        <FlatList
          horizontal
          data={cast}
          renderItem={({ item }) => <ActorCard actor={item} />}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </>
  );
};

export default MovieCast;
