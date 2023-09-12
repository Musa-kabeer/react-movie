import { styled } from "styled-components";
import { useMovie } from "./useMovie";
import MovieOverview from "./MovieOverview";
import { useMovieCast } from "./useMovieCast";

import MovieCast from "./MovieCast";
import Spinner from "../../ui/Spinner";

const StyledDetailed = styled.div`
  background: black;
  height: 100vh;
  color: #fff;

  display: grid;
  grid-template-columns: repeat(1fr, minmax(0, 1fr));
  grid-template-rows: repeat(2fr, minmax(0, 1fr));
`;

const MovieDetailed = () => {
  const { isLoadingMovie, movie } = useMovie();
  const { isLoadingCast, movieCast } = useMovieCast();

  if (isLoadingMovie || isLoadingCast) {
    return <Spinner size={120} thickness={120} />;
  }

  return (
    <StyledDetailed>
      <MovieOverview movie={movie} />
      <MovieCast movieCast={movieCast} />
    </StyledDetailed>
  );
};

export default MovieDetailed;
