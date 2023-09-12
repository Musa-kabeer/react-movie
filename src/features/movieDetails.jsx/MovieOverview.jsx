import { styled } from "styled-components";
import { AiFillPlayCircle } from "react-icons/ai";
import { calculateMoney } from "../../utils/formatMoney";

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
    original_title,
    poster_path,
    production_countries,
    release_date,
    revenue,
    runtime,
    spoken_languages,
    status,
  } = movie;

  const durationHr = `${Math.floor(runtime / 60)}hr`;
  const durationmin = `${runtime % 60}min`;
  const date = release_date.split("-")[0];
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
        <h2>
          {original_title} ({date}){" "}
          <span style={{ fontSize: "12px", color: "orange" }}>
            {durationHr} : {durationmin}
          </span>
        </h2>
        <div>
          Genres:
          {genres.map((genre, i) => (
            <span key={i + 1}> {genre.name} </span>
          ))}
        </div>
        <div>
          Country:
          {production_countries.map((country, i) => (
            <span key={i + 1}> {country.name} </span>
          ))}
        </div>
        <div>Budget: {calculateMoney(budget)}</div>
        <div>Revenue: {calculateMoney(revenue)}</div>
        <div>Status: {status}👍</div>
        <div>
          Language:
          {spoken_languages.map((lang, i) => (
            <span key={i + 1}> {lang.english_name} </span>
          ))}
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
        </span>
      </StyledMovieContent>
    </StyledMovieOverview>
  );
};

export default MovieOverview;
