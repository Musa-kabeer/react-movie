import { useQuery } from "@tanstack/react-query";
import { getMovieById } from "../../services/apiMovies";
import { useParams } from "react-router-dom";

export const useMovie = () => {
  const { movieId } = useParams();

  const { isLoading: isLoadingMovie, data: movie } = useQuery({
    queryKey: ["now_playing", movieId],
    queryFn: () => getMovieById(movieId),
  });

  return { isLoadingMovie, movie };
};
