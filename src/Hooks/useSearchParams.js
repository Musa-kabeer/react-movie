import { useSearchParams } from "react-router-dom";

export const useUrlParams = () => {
  const [searchParams] = useSearchParams();

  const params = searchParams.get("page") || 1;

  return { params };
};
