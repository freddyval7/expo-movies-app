import { MovieDBCast } from "../interfaces/castdb-response";
import { Cast, DetailMovie, Movie } from "../interfaces/movie.interface";
import { Result } from "../interfaces/moviedb-response";
import { MovieDBResult } from "../interfaces/moviedb-result";

export class MovieMapper {
  static fromTheMovieDBToMovie = (movie: Result): Movie => {
    return {
      id: movie.id,
      title: movie.title,
      description: movie.overview,
      releaseDate: new Date(movie.release_date),
      poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
      rating: movie.vote_average,
    };
  };

  static fromTheMovieDBToDetailMovie = (movie: MovieDBResult): DetailMovie => {
    return {
      id: movie.id,
      title: movie.title,
      description: movie.overview,
      releaseDate: new Date(movie.release_date),
      poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
      rating: movie.vote_average,
      budget: movie.budget,
      duration: movie.runtime,
      genres: movie.genres.map((g) => g.name),
      originalTitle: movie.original_title,
      productionCompanies: movie.production_companies.map((c) => c.name),
    };
  };
}

export class CastMapper {
  static fromMovieDBCastToEntity(actor: MovieDBCast): Cast {
    return {
      id: actor.id,
      name: actor.name,
      character: actor.character ?? "No character",
      avatar: actor.profile_path
        ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
        : "https://i.stack.imgur.com/l60Hf.png", // If actor does not have
      // image
    };
  }
}
