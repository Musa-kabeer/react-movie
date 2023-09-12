import { styled } from "styled-components";

import Logo from "./Logo";
import PageNav from "./PageNav";

const StyledSidebar = styled.div`
  background: #1a120b;
  color: #f0f0f0f2;
  height: 100vh;
  position: static;
  top: 0;
  bottom: 0;
  left: 0;
`;

const Sidebar = () => {
  return (
    <StyledSidebar>
      <Logo />

      <PageNav />
    </StyledSidebar>
  );
};

export default Sidebar;
