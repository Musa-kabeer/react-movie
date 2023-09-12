import { styled } from "styled-components";
import Sidebar from "./Sidebar";
import Main from "./Main";
import { Outlet } from "react-router-dom";
import useSearchContext from "../context/searchContext";
import Overlay from "./Overlay";

const StyledApp = styled.div`
  position: relative;
  height: 100vh;

  display: grid;
  grid-template-columns: 250px 1fr;
`;

const AppLayout = () => {
  const { active } = useSearchContext();

  return (
    <StyledApp>
      <Sidebar />

      <Main>
        <Outlet />
      </Main>

      {active && <Overlay />}
    </StyledApp>
  );
};

export default AppLayout;
