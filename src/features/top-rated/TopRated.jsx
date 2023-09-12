import { styled } from "styled-components";

import { useTopRated } from "./useTopRated";
import Heading from "../../ui/Heading";
import Pagination from "../../ui/Pagination";
import Spinner from "../../ui/Spinner";
import MovieList from "../../ui/MovieList";

const StyledTopRated = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;

  display: grid;
  grid-template-columns: repeat(1fr, minmax(0, 1fr));
  grid-template-rows: 70px auto 90px;
`;

const MovieContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 15px;
  padding: 20px;
`;

const TopRated = () => {
  const { isLoading, topRated } = useTopRated();

  if (isLoading) return <Spinner />;

  return (
    <StyledTopRated>
      <Heading>Top Rated</Heading>

      <MovieContainer>
        {topRated.results.map((movie) => (
          <MovieList key={movie.id} movie={movie} />
        ))}
      </MovieContainer>

      <Pagination movie={topRated.total_pages} />
    </StyledTopRated>
  );
};

export default TopRated;
