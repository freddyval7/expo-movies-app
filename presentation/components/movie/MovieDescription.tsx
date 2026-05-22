import { Formatter } from "@/config/helpers/formatter";
import { DetailMovie } from "@/infrastructure/interfaces/movie.interface";
import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

interface Props {
  movie: DetailMovie;
}

const MovieDescription = ({ movie }: Props) => {
  return (
    <View className="mx-5">
      <View className="flex flex-row mt-1">
        <View className="flex flex-row gap-1 items-center">
          <Ionicons name="star-outline" />
          <Text>{movie.rating.toFixed(1)}</Text>
        </View>
        <Text> - {movie.genres.join(", ")}</Text>
      </View>

      <Text className="font-bold mt-5 text-2xl">Synopsis</Text>
      <Text className="font-normal mt-2">{movie.description}</Text>

      <Text className="font-bold mt-5 text-2xl">Badget</Text>
      <Text className="font-bold mt-2 text-xl">
        {Formatter.currency(movie.budget) !== "$0.00"
          ? Formatter.currency(movie.budget)
          : "Unknown"}
      </Text>
    </View>
  );
};

export default MovieDescription;
