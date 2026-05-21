import MainSlideshow from "@/presentation/components/MainSlideshow";
import { useMovies } from "@/presentation/hooks/useMovies";
import { ActivityIndicator, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HomeScreen = () => {
  const safeArea = useSafeAreaInsets()
  const { nowPlayingQuery } = useMovies();

  if (nowPlayingQuery.isLoading) {
    return (
      <View>
        <ActivityIndicator color={'purple'} size={50} />
      </View>
    )
  }

  return (
    <View className="mt-2" style={{ paddingTop: safeArea.top }}>
      <Text className="text-3xl font-bold px-3">HomeScreen</Text>
      <MainSlideshow movies={nowPlayingQuery.data || []} />
    </View>

  );
};

export default HomeScreen;
