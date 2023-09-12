import { useState } from "react";
import { styled } from "styled-components";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const MoviesContainer = styled.div`
  position: relative;
  box-shadow: 5px 4px 12px #201f1fcb;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  transition: all 1s ease-in-out;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Overlay = styled.div`
  position: absolute;
  background: #5857578b;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  flex-direction: column;
  transition: all 1s ease-in-out;

  p {
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    transition: all 1s ease-in-out;
  }
`;

const MovieList = ({ movie }) => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const { original_title, poster_path, title, id } = movie;

  function handleMouseEnter() {
    setShow(true);
  }

  function handleMouseLeave() {
    setShow(false);
  }
  function handleNavigate() {
    return navigate(`/movie/${id}`);
  }

  return (
    <MoviesContainer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ImageContainer>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
        />
      </ImageContainer>
      {show ? (
        <Overlay>
          <p>{original_title}</p>

          <Button onClick={handleNavigate}>Learn more</Button>
        </Overlay>
      ) : null}
    </MoviesContainer>
  );
};

export default MovieList;
