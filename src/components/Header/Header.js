import userIcon from "../../assets/icons/user-icon.svg";
import Timer from "../../features/timer/Timer.js";
import FinishButton from "../Buttons/FinishButton";
import { Button } from "../Buttons/styled";
import { StyledHeader, UserInfoContainer } from "./styled";

function Header() {
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
        <Button>Hide</Button>
      </div>
    </StyledHeader>
  );
}

export default Header;
