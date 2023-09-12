import { styled } from "styled-components";
import List from "./List";
import useSearchContext from "../context/searchContext";

const StyledPageNav = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 5px 17px;
`;

const StyledSearch = styled.button`
  text-align: center;
  border: 1px solid grey;
  padding: 10px 0;
  border-radius: 4px;
  cursor: pointer;
  background: none;
  color: #fff;
  font-weight: 700;
  font-size: 18px;
  font-family: "Montserrat", sans-serif;
`;

const PageNav = () => {
  const { open } = useSearchContext();

  return (
    <StyledPageNav>
      <StyledSearch onClick={open}>Search</StyledSearch>

      <List to="popular" text="Popular" />
      <List to="top-rated" text="Top Rated" />
      <List to="upcoming" text="Upcoming" />
      <List to="now-playing" text="Now Playing" />
    </StyledPageNav>
  );
};

export default PageNav;
