import { styled } from "styled-components";

import { useUpComing } from "./useUpcoming";
import Heading from "../../ui/Heading";
import Pagination from "../../ui/Pagination";
import Spinner from "../../ui/Spinner";
import MovieList from "../../ui/MovieList";

const StyledUpComing = styled.div`
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

const UpComing = () => {
  const { isLoading, upComing } = useUpComing();

  if (isLoading) return <Spinner />;

  return (
    <StyledUpComing>
      <Heading>Upcoming</Heading>

      <MovieContainer>
        {upComing.results.map((movie) => (
          <MovieList key={movie.id} movie={movie} />
        ))}
      </MovieContainer>

      <Pagination movie={upComing.total_pages} />
    </StyledUpComing>
  );
};

export default UpComing;
