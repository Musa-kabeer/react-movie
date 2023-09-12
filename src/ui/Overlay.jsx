import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { keyframes, styled } from "styled-components";

import useSearchContext from "../context/searchContext";
import { options } from "../utils/apiCredentials";

const StyledOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  backdrop-filter: blur(3px);
  background: #fafafa29;
  transition: all 0.4s ease-in-out;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const SlideIn = keyframes`
 0% {
      transform: scale(0.9);
      opacity: 0.9;
    }
  100% {
      transform: scale(1);
      opacity: 1;
    }
`;

const Modal = styled.div`
  width: 60%;
  height: 80%;
  background-color: #291d19e3;
  color: #fff;
  padding: 16px 30px;
  cursor: pointer;
  border-radius: 9px;
  box-shadow: 3px 2px 1.2rem black;

  animation-name: ${SlideIn};
  animation-duration: 0.7s;
`;

const StyledCancelBtn = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 40px;
  font-weight: 600;
`;

const StyledInput = styled.input`
  width: 80%;
  padding: 10px;
  border: none;
  outline: none;
  border-radius: 4px;
  font-family: "Montserrat", sans-serif;
  margin: 0 auto;
`;

const ListsContainer = styled.ul`
  margin: 0 auto;
  margin-top: 2rem;
  width: 85%;
  height: 80%;
  overflow-y: scroll;
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const List = styled.li`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  align-items: center;
  padding: 3px 10px;
  color: #fff;
  background: #4e4441e1;
  border-radius: 6px;
  transition: all 0.7s ease-in-out;

  &:hover {
    background: #605552df;
  }

  span {
    justify-self: center;
  }

  img {
    width: 70px;
    height: 70px;
    object-fit: cover;
    border-radius: 50%;
    justify-self: center;
  }
`;

const Overlay = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const { close } = useSearchContext();

  useEffect(() => {
    const fetchSearch = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=true&language=en-US&page=1`,
        options
      );

      const data = await res.json();

      setData(data);
    };

    fetchSearch();
  }, [search]);

  return (
    <StyledOverlay>
      <Modal>
        <StyledCancelBtn onClick={close}>&times;</StyledCancelBtn>
        <div
          style={{
            height: "80%",
            display: "flex",
            flexDirection: "column",
            padding: "15px 20px",
          }}
        >
          <StyledInput
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for any movie you want....."
          />

          <ListsContainer>
            {data?.results?.map((movie) => (
              <Link key={movie.id} to={`/movie/${movie.id}`}>
                <List>
                  <div>{movie.original_title}</div>

                  <span>{movie.release_date}</span>

                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                  />
                </List>
              </Link>
            ))}
          </ListsContainer>
        </div>
      </Modal>
    </StyledOverlay>
  );
};

export default Overlay;
