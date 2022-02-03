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
  background-color: white;
  margin-top: 2em;
  box-shadow: 0 0.0714em 0.214em rgb(0 0 0 / 25%);
`;

export const TaskContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2em;
  background-image: linear-gradient(to top, #fff, #dde3ee);
  margin-left: 2em;
  margin-right: 2em;
  box-shadow: 0 0.07em 0.2em rgb(0 0 0 / 25%);
  border-radius: 8px;
`;

export const NavWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
