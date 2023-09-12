import { styled } from "styled-components";

const StyledMain = styled.main`
  background: #f3f1f1;
`;

const Main = ({ children }) => {
  return <StyledMain>{children}</StyledMain>;
};

export default Main;
