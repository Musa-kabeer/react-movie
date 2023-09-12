import { styled } from "styled-components";

const StyledButton = styled.button`
  width: 100px;
  font-size: 15px;
  background: #4e1010cf;
  border: none;
  outline: none;
  padding: 10px;
  border-radius: 5px;
  color: #ffff;
  cursor: pointer;
`;

const Button = ({ children, onClick, disabled }) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

export default Button;
