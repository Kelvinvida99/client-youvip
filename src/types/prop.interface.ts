export interface ChildrenProp {
  children: React.ReactNode;
}

interface Movie {
  id: string;
  title: string;
  description: string;
  movieUrl: string;
  genre: string[];
  releaseDate: string;
  rating: number;
  runtime: number;
  posterUrl: string;
  cast: string[];
  directors: string[];
  writers: string[];
  user: null;
}

export interface MovieCardProps {
  movie: Movie;
}
