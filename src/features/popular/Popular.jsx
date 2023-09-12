import { styled } from "styled-components";

import { usePopular } from "./usePopular";
import Heading from "../../ui/Heading";
import Pagination from "../../ui/Pagination";
import Spinner from "../../ui/Spinner";
import MovieList from "../../ui/MovieList";

const StyledPopular = styled.div`
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

const Popular = () => {
  const { isLoading, popular } = usePopular();

  if (isLoading) return <Spinner />;

  return (
    <StyledPopular>
      <Heading>Popular</Heading>

      <MovieContainer>
        {popular.results.map((movie) => (
          <MovieList key={movie.id} movie={movie} />
        ))}
      </MovieContainer>

      <Pagination movie={popular.total_pages} />
    </StyledPopular>
  );
};

export default Popular;
