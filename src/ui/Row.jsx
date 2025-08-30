import styled from "styled-components";

const Row = styled.div`
  display: flex;
  ${(props) =>
    props.type === "horizontal"
      ? "flex-direction: row; align-items: center; justify-content: space-between;"
      : "flex-direction: column; gap: 0.8rem;"}
`;
Row.defaultProps = {
  type: "vertical",
};

export default Row;
