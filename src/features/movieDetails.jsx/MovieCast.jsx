import { styled } from "styled-components";

const StyledMovieCast = styled.div`
  padding: 10px 15px;
`;

const StyledCast = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 4px;
  padding: 4px;
`;

const StyledCrew = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 15px;
`;

const StyledImageContent = styled.div`
  height: 150px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 7px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const MovieCast = ({ movieCast }) => {
  const cast = movieCast.cast.splice(0, 5);
  const crew = movieCast.crew.splice(0, 5);

  return (
    <StyledMovieCast>
      <div style={{ padding: "10px 15px" }}>
        <h4 style={{ paddingBottom: "20px" }}>Top Billed Cast</h4>

        <StyledCast>
          {cast.map((cast, i) => (
            <StyledImageContent key={i + 1}>
              <img
                src={
                  cast.profile_path
                    ? `https://image.tmdb.org/t/p/w500${cast.profile_path}`
                    : "/blank.jpeg"
                }
                alt=""
              />
              <div>
                <h4>{cast.name}</h4>
                <p>{cast.character}</p>
              </div>
            </StyledImageContent>
          ))}
        </StyledCast>
      </div>

      <div style={{ padding: "10px 15px" }}>
        <h4 style={{ padding: "20px 0" }}>Top Billed Crew</h4>

        <StyledCrew>
          {crew.map((crew, i) => (
            <StyledImageContent key={i + 1}>
              <img
                src={
                  crew.profile_path
                    ? `https://image.tmdb.org/t/p/w500${crew.profile_path}`
                    : "/blank.jpeg"
                }
                alt=""
              />
              <div>
                <h4>{crew.name}</h4>
                <p>{crew.character}</p>
              </div>
            </StyledImageContent>
          ))}
        </StyledCrew>
      </div>
    </StyledMovieCast>
  );
};

export default MovieCast;
