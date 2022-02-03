import styled from "styled-components";

export const Button = styled.button`
  color: #000;
  background-color: #faf6f6;
  border-color: #faf6f6;
  margin-top: 2px;
  margin-bottom: 2px;
  padding: 10px;
  border-radius: 8px;
  margin: 10px 5px;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export const NavButton = styled(Button)`
  color: white;
  height: 35px;
  width: 35px;
  border: none;
  padding: 0;
  background-color: #565656;
  border-radius: 0.25rem;
  margin-left: 0.5em;
  margin-right: 1em;
  font-weight: bolder;
`;

export const FinishTaskButton = styled(Button)`
  width: 10em;
`;
