import { movieApi } from "@/core/api/movie-api";
import { DetailMovie } from "@/infrastructure/interfaces/movie.interface";
import { MovieDBResult } from "@/infrastructure/interfaces/moviedb-result";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";

export const getMovieByIdAction = async (id: number): Promise<DetailMovie> => {
  try {
    const { data } = await movieApi.get<MovieDBResult>(`/${id}`);

    const movie = MovieMapper.fromTheMovieDBToDetailMovie(data);

    return movie;
  } catch (error) {
    console.log(error);
    throw "Cannot fetch now playing movie";
  }
};
