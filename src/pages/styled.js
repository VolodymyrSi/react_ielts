import styled from "styled-components";

export const TaskWrapper = styled.div`
  display: flex;
  justify-content: center;
  p,
  h1 {
    margin-left: 2rem;
  }
`;

export const TaskHeader = styled.div`
  width: 90%;
  border-radius: 13px;
  background-color: ${(props) => props.primary};
  margin-top: 2em;
  box-shadow: 0 0.0714em 0.214em rgb(0 0 0 / 25%);
  border: ${(props) =>
    props.theme.style === "Light"
      ? "1px solid transparent"
      : "1px solid #faf6f6"};
`;

export const TaskContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2em;
  background-image: ${(props) =>
    props.theme.style === "Light"
      ? "linear-gradient(to top, #fff, #dde3ee)"
      : "none"};
  background-color: ${(props) =>
    props.theme.style === "Light" ? "none" : "hsl(210, 30%, 8%)"};
  border: ${(props) =>
    props.theme.style === "Light"
      ? "1px solid transparent"
      : "1px solid #faf6f6"};
  margin-left: 2em;
  margin-right: 2em;
  box-shadow: 0 0.07em 0.2em rgb(0 0 0 / 25%);
  border-radius: 8px;
`;

export const NavWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
