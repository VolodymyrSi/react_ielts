import styled from "styled-components";

export const Container = styled.div`
  width: 60%;
  display: flex;
  box-shadow: 0 1px 3px rgb(0 0 0 / 50%);
  border-radius: 8px;
  padding: 0px 10px;
  margin: 10px 0;
  font-weight: 700;
  border: ${(props) =>
    props.theme.style === "Light"
      ? "1px solid transparent"
      : "1px solid #faf6f6"};
  .buttonWrapper {
    display: flex;
    align-items: center;
    flex-flow: row;
  }
`;
