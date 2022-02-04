import { useContext } from "react";
import { Context } from "../../App";
import Timer from "../../features/timer/Timer.js";
import FinishButton from "../Buttons/FinishButton";
import { Button } from "../Buttons/styled";
import { themeLight, themeDark } from "../../assets/styles/themes";
import { StyledHeader, UserInfoContainer } from "./styled";

import userIcon from "../../assets/icons/user-icon.svg";

function Header() {
  const { theme, setTheme } = useContext(Context);

  const toggleTheme = () => {
    setTheme(theme.style === "Light" ? themeDark : themeLight);
  };

  return (
    <StyledHeader>
      <UserInfoContainer>
        <img src={userIcon} alt="userpic" className="userIcon" />
        <p>XXXX-XXXX 123456</p>
      </UserInfoContainer>
      <Timer />
      <div>
        <FinishButton />
        <Button>Help</Button>
        <Button onClick={() => toggleTheme()}>{theme.style}</Button>
      </div>
    </StyledHeader>
  );
}

export default Header;
