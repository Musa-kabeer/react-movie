import { styled } from "styled-components";
import Heading from "../../ui/Heading";
import Pagination from "../../ui/Pagination";
import Spinner from "../../ui/Spinner";
import MovieList from "../../ui/MovieList";
import { useNowPlaying } from "./useNowPlaying";

const StyledNowPlaying = styled.div`
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

const NowPlaying = () => {
  const { isLoading, nowPlaying } = useNowPlaying();

  if (isLoading) return <Spinner />;

  return (
    <StyledNowPlaying>
      <Heading>Now Playing</Heading>

      <MovieContainer>
        {nowPlaying.results.map((movie) => (
          <MovieList key={movie.id} movie={movie} />
        ))}
      </MovieContainer>

      <Pagination movie={nowPlaying.total_pages} />
    </StyledNowPlaying>
  );
};

export default NowPlaying;
