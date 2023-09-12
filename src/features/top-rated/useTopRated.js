import { useQuery } from "@tanstack/react-query";
import { getTopRatedMovies } from "../../services/apiMovies";
import { useUrlParams } from "../../Hooks/useSearchParams";

export const useTopRated = () => {
  const { params } = useUrlParams();

  const { isLoading, data: topRated } = useQuery({
    queryKey: ["top_rated", params],
    queryFn: () => getTopRatedMovies(params),
  });

  return { isLoading, topRated };
};
