import MovieHeader from "@/presentation/components/movie/MovieHeader";
import { useMovie } from "@/presentation/hooks/useMovie";
import { useLocalSearchParams } from "expo-router";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";

const MovieScreen = () => {
  const { id } = useLocalSearchParams();
  const { movieQuery } = useMovie(+id);

  if (movieQuery.isLoading || !movieQuery.data) {
    return (
      <View className="flex flex-1 justify-center items-center">
        <Text className="mb-4">Loading...</Text>
        <ActivityIndicator color={"purple"} size={50} />
      </View>
    );
  }

  return (
    <ScrollView>
      <MovieHeader {...movieQuery.data} />
    </ScrollView>
  );
};

export default MovieScreen;
