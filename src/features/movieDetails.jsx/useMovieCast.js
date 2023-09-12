import { useQuery } from "@tanstack/react-query";
import { getMovieCast } from "../../services/apiMovies";
import { useParams } from "react-router-dom";

export const useMovieCast = () => {
  const { movieId } = useParams();

  const { isLoading: isLoadingCast, data: movieCast } = useQuery({
    queryKey: ["movieCast", movieId],
    queryFn: () => getMovieCast(movieId),
  });

  return { isLoadingCast, movieCast };
};
