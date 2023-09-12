import { styled } from "styled-components";
import { AiFillPlayCircle } from "react-icons/ai";
import Lists from "../../ui/Lists";

const StyledMovieOverview = styled.div`
  background-image: url(${(props) => props.$url});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;

  height: 40vh;
`;

const StyledMovieImage = styled.div`
  background: #000000bc;
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 15px 0;
`;

const StyledImage = styled.img`
  height: 100%;
  border-radius: 6px;
`;

const StyledMovieContent = styled.div`
  background: #000000d8;
  flex: 2;

  padding: 15px;
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
`;

const MovieOverview = ({ movie }) => {
  const {
    backdrop_path,
    budget,
    genres,
    original_language,
    original_title,
    overview,
    popularity,
    poster_path,
    production_companies,
    production_countries,
    release_date,
    revenue,
    runtime,
    spoken_languages,
    status,
    tagline,
    vote_average,
    vote_count,
  } = movie;

  const durationHr = `${Math.floor(runtime / 60)}hr`;
  const durationmin = `${runtime % 60}min`;

  const back_image = `https://image.tmdb.org/t/p/w500${backdrop_path}`;
  return (
    <StyledMovieOverview $url={back_image}>
      <StyledMovieImage>
        <StyledImage
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={original_title}
        />
      </StyledMovieImage>

      <StyledMovieContent>
        <div>Title: {original_title}</div>
        <div>Date: {release_date}</div>
        <div>
          Durations: {durationHr} : {durationmin}
        </div>
        <div>
          Genres: {genres[0]?.name} {genres[1]?.name}
        </div>
        <div>
          Country: {production_countries[0]?.name}{" "}
          {production_countries[1]?.name}
        </div>
        <div>Year: {release_date.split("-")[0]}</div>
        {/* <div>
          <div>
            <h3>Adebayo Tijani</h3>
            <p>Director, Writer</p>
          </div>
          <div>
            <h3>Tope Adebayo</h3>
            <p>Director</p>
          </div>
          <div>
            <h3>Femi Adebayo</h3>
            <p>Writer</p>
          </div>
        </div>
        <span>
          <button
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              fontSize: "15px",
              padding: "10px",
              borderRadius: "7px",
              border: "none",
              cursor: "pointer",
            }}
          >
            <AiFillPlayCircle /> Play Trailer
          </button>
        </span> */}
      </StyledMovieContent>
    </StyledMovieOverview>
  );
};

export default MovieOverview;
