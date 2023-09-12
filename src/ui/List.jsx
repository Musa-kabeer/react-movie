import { Link } from "react-router-dom";
import { styled } from "styled-components";

const StyledList = styled.li`
  padding: 13px 17px;
  cursor: pointer;
  transition: all 0.6s ease-in-out;
  border-radius: 4px;
  text-align: center;
  font-size: 15px;
  background: #3c2a21;
  border: 0.8px solid #f0f0f051;

  &:hover {
    border: 0.8px solid #f0f0f01c;
    background: #3c2a2191;
  }
`;

const NavLink = styled(Link)`
  color: #fff;
`;

const List = ({ to, text }) => {
  return (
    <NavLink to={to}>
      <StyledList>{text}</StyledList>
    </NavLink>
  );
};

export default List;
