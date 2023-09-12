import { useQuery } from "@tanstack/react-query";
import { getUpcomingMovies } from "../../services/apiMovies";
import { useUrlParams } from "../../Hooks/useSearchParams";

export const useUpComing = () => {
  const { params } = useUrlParams();

  const { isLoading, data: upComing } = useQuery({
    queryKey: ["upcoming", params],
    queryFn: () => getUpcomingMovies(params),
  });

  return { isLoading, upComing };
};
