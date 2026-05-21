import { Movie } from '@/infrastructure/interfaces/movie.interface'
import { FlatList, Text, View } from 'react-native'
import MoviePoster from './MoviePoster'

interface Props {
    title: string
    movies: Movie[]
}

const MovieHorizontalList = ({ movies, title }: Props) => {
    return (
        <View className='mt-6'>
            <Text className='text-2xl font-bold px-3'>{title}</Text>

            <FlatList
                horizontal
                data={movies}
                keyExtractor={(item) => item.id.toString()}
                showsHorizontalScrollIndicator={false}
                className='py-4'
                renderItem={({ item }) => <MoviePoster id={item.id} poster={item.poster} smallPoster />}
            />
        </View>
    )
}

export default MovieHorizontalList