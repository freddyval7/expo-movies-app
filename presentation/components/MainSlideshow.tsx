import { Movie } from '@/infrastructure/interfaces/movie.interface'
import { useRef } from 'react'
import { Text, useWindowDimensions, View } from 'react-native'
import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel'

interface Props {
    movies: Movie[]
}

const MainSlideshow = ({ movies }: Props) => {
    const width = useWindowDimensions().width
    const ref = useRef<ICarouselInstance>(null)

    return (
        <View className='h-[250px] w-full'>
            <Carousel
                data={movies}
                ref={ref}
                renderItem={({ item }) => <Text>{item.title}</Text>}
                width={250}
                height={350}
                style={{
                    width,
                    height: 350,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                mode='parallax'
                modeConfig={{
                    parallaxScrollingScale: 0.9,
                    parallaxScrollingOffset: 50
                }}
                defaultIndex={1}
            />
        </View>
    )
}

export default MainSlideshow