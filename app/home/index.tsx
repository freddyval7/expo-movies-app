import MainSlideshow from "@/presentation/components/movies/MainSlideshow";
import MovieHorizontalList from "@/presentation/components/movies/MovieHorizontalList";
import { useMovies } from "@/presentation/hooks/useMovies";
import { ActivityIndicator, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HomeScreen = () => {
  const safeArea = useSafeAreaInsets()
  const { nowPlayingQuery, popularQuery } = useMovies();

  if (nowPlayingQuery.isLoading) {
    return (
      <View>
        <ActivityIndicator color={'purple'} size={50} />
      </View>
    )
  }

  return (
    <View className="mt-2" style={{ paddingTop: safeArea.top }}>
      <Text className="text-3xl font-bold px-3">MoviesApp</Text>
      <MainSlideshow movies={nowPlayingQuery.data || []} />

      <MovieHorizontalList title="Popular" movies={popularQuery.data || []} />
    </View>

  );
};

export default HomeScreen;
