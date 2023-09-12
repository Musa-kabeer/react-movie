import { styled } from "styled-components";

const Heading = styled.h1`
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 40px;
  font-size: 30px;
  letter-spacing: 4px;
  font-weight: 700;
  text-align: center;

  &::after {
    content: "";

    display: block;
    text-align: center;
    width: 100px;
    height: 3px;
    background-color: #393535cd;
  }
`;

export default Heading;
