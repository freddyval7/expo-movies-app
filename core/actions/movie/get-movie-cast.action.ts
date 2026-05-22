import { CreditsResponse } from "@/infrastructure/interfaces/castdb-response";
import { Cast } from "@/infrastructure/interfaces/movie.interface";
import { CastMapper } from "@/infrastructure/mappers/movie.mapper";
import { movieApi } from "../../api/movie-api";

export const getMovieCastAction = async (movieId: number): Promise<Cast[]> => {
  try {
    const { data } = await movieApi.get<CreditsResponse>(`/${movieId}/credits`);

    const cast = data.cast.map((actor) =>
      CastMapper.fromMovieDBCastToEntity(actor),
    );

    return cast;
  } catch (error) {
    console.log(error);
    throw "Cannot fetch cast";
  }
};
