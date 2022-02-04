import styled from "styled-components";

export const StyledHeader = styled.div`
  background-image: ${(props) =>
    props.theme.style === "Light"
      ? "linear-gradient(to top, #152531, #434c51, #152531)"
      : "none"};
  background-color: ${(props) =>
    props.theme.style === "Light" ? "none" : "hsl(210, 30%, 8%)"};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  border: ${(props) =>
    props.theme.style === "Light"
      ? "1px solid transparent"
      : "1px solid #faf6f6"};

  .userIcon {
    height: 30px;
  }
`;

export const UserInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #d1f0ce;
  margin-left: 2em;
  p {
    margin-left: 1em;
  }
`;
