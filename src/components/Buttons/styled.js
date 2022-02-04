import styled from "styled-components";

export const Button = styled.button`
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.primary};
  border: ${(props) =>
    props.theme.style === "Light"
      ? props.theme.borderInvisible
      : props.theme.borderVisible};
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
  border: ${(props) =>
    props.theme.style === "Light"
      ? "1px solid transparent"
      : "1px solid #faf6f6"};
  padding: 0;
  background-color: ${(props) =>
    props.theme.style === "Light" ? "#565656" : props.theme.primary};
  border-radius: 0.25rem;
  margin-left: 0.5em;
  margin-right: 1em;
  font-weight: bolder;
`;

export const FinishTaskButton = styled(Button)`
  width: 10em;
`;
