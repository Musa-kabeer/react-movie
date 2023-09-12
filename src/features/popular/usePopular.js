import { useQuery } from "@tanstack/react-query";
import { getPopularMovies } from "../../services/apiMovies";
import { useUrlParams } from "../../Hooks/useSearchParams";

export const usePopular = () => {
  const { params } = useUrlParams();

  const { isLoading: isLoading, data: popular } = useQuery({
    queryKey: ["popular", params],
    queryFn: () => getPopularMovies(params),
  });

  return { isLoading, popular };
};
