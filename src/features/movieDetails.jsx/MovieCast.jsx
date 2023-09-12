import { styled } from "styled-components";

const StyledMovieCast = styled.div`
  padding: 10px 15px;
`;

const MovieCast = () => {
  return (
    <StyledMovieCast>
      <h2>Top Billed Cast</h2>

      <div>
        <div>
          <img src="" alt="" />
          <h4>Real Name</h4>
          <p>Movie Name</p>
        </div>
      </div>
    </StyledMovieCast>
  );
};

export default MovieCast;
