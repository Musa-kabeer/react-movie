import { useSearchParams } from "react-router-dom";
import { styled } from "styled-components";

const StyledPagination = styled.div`
  margin: 8px 35px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: grey;
  border-radius: 6px;
`;

const Button = styled.button`
  font-size: 16px;
  padding: 8px 25px;
  background: #1f1e1e;
  border-radius: 6px;
  color: #fff;
  border: none;
  outline: none;
  transition: all 0.3s ease-in-out;
`;

const Pagination = ({ movie }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const params = Number(searchParams.get("page")) || 1;

  function handlePrevious() {
    setSearchParams({ page: params - 1 });
  }

  function handleNext() {
    setSearchParams({ page: params + 1 });
  }

  return (
    <StyledPagination>
      <Button
        $params={params}
        style={{ cursor: params === 1 ? "not-allowed" : "pointer" }}
        onClick={handlePrevious}
        disabled={params === 1}
      >
        Prev
      </Button>
      <Button
        $params={params}
        style={{ cursor: params === movie ? "not-allowed" : "pointer" }}
        $movie={movie}
        onClick={handleNext}
        disabled={movie === params}
      >
        Next
      </Button>
    </StyledPagination>
  );
};

export default Pagination;
