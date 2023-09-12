import { useQuery } from "@tanstack/react-query";
import { getNowPlayingMovies } from "../../services/apiMovies";
import { useUrlParams } from "../../Hooks/useSearchParams";

export const useNowPlaying = () => {
  const { params } = useUrlParams();

  const { isLoading, data: nowPlaying } = useQuery({
    queryKey: ["now_playing", params],
    queryFn: () => getNowPlayingMovies(params),
  });

  return { isLoading, nowPlaying };
};
