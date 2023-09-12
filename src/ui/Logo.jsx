import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { BiLogoGithub } from "react-icons/bi";
import { RiTwitterXFill } from "react-icons/ri";

const StyledLogo = styled.div`
  height: 150px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const LogoSpan = styled.span`
  font-size: 30px;
`;

const LogoText = styled.h2`
  font-size: 30px;
  font-weight: 700;
  letter-spacing: 2px;
`;

const Links = styled.div`
  display: flex;
  gap: 10px;

  a {
    color: #f0f0f0f2;
    font-size: 19px;
  }
`;

const Logo = () => {
  return (
    <StyledLogo>
      <LogoSpan>🎬</LogoSpan>
      <LogoText>Movies</LogoText>
      <Links>
        <Link to={"https://github.com/Musa-kabeer"}>
          <BiLogoGithub />
        </Link>

        <Link to={"https://twitter.com/bakodev"}>
          <RiTwitterXFill />
        </Link>
      </Links>
    </StyledLogo>
  );
};

export default Logo;
