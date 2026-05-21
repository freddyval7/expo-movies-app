import MainSlideshow from "@/presentation/components/movies/MainSlideshow";
import MovieHorizontalList from "@/presentation/components/movies/MovieHorizontalList";
import { useMovies } from "@/presentation/hooks/useMovies";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HomeScreen = () => {
  const safeArea = useSafeAreaInsets();
  const { nowPlayingQuery, popularQuery, topRatedQuery, upcomingQuery } =
    useMovies();

  if (nowPlayingQuery.isLoading) {
    return (
      <View>
        <ActivityIndicator color={"purple"} size={50} />
      </View>
    );
  }

  return (
    <ScrollView>
      <View className="mt-2 pb-10" style={{ paddingTop: safeArea.top }}>
        <Text className="text-4xl font-bold px-3">MoviesApp</Text>
        <Text className="text-2xl font-bold p-3">Now Playing</Text>
        <MainSlideshow movies={nowPlayingQuery.data || []} />

        <MovieHorizontalList title="Popular" movies={popularQuery.data || []} />
        <MovieHorizontalList
          title="Upcoming"
          movies={upcomingQuery.data || []}
        />
        <MovieHorizontalList
          title="Top Rated"
          movies={topRatedQuery.data || []}
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
