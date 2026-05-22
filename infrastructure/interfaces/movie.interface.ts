export interface Movie {
  id: number;
  title: string;
  description: string;
  releaseDate: Date;
  poster: string;
  backdrop: string;
  rating: number;
}

export interface DetailMovie extends Movie {
  genres: string[];
  duration: number;
  budget: number;
  originalTitle: string;
  productionCompanies: string[];
}

export interface Cast {
  id: number;
  name: string;
  character: string;
  avatar: string;
}
