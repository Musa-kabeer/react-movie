import { styled } from "styled-components";
import { SpinnerInfinity } from "spinners-react";

const StyledSpinner = styled.div`
  height: 400px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Spinner = ({ size, thickness }) => {
  return (
    <StyledSpinner>
      <SpinnerInfinity
        size={size}
        thickness={thickness}
        speed={65}
        color="rgba(172, 131, 57, 1)"
        secondaryColor="rgba(172, 108, 57, 0.24)"
      />
    </StyledSpinner>
  );
};

export default Spinner;
