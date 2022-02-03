import styled from "styled-components";

export const StyledHeader = styled.div`
  background-image: linear-gradient(to top, #152531, #434c51, #152531);
  display: flex;
  justify-content: space-between;
  align-items: center;

  .userIcon {
    height: 30px;
  }
`;

export const UserInfoContainer = styled.div`
  .userInfoContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #d1f0ce;
    margin-left: 2em;

    p {
      margin-left: 1em;
    }
  }
`;
