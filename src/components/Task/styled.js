import styled from "styled-components";

export const StyledTaskFile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  border-radius: 13px;
  background-image: linear-gradient(to top, #fff, #dde3ee);
  margin: 0 2em;
  min-width: 40%;
  max-width: 40%;
  img {
    max-width: 35em;
  }
`;

export const StyledTaskForm = styled.div`
  margin: 0 2em;
  min-width: 45%;
`;

export const TextArea = styled.textarea`
  display: block;
  min-width: 100%;
  min-height: 600px;
  margin: 1em 0;
`;