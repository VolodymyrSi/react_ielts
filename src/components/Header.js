import userIcon from '../files/user-icon.svg';
import Timer from "./Timer.js";


function Header() {
  return (
    <div className="header">
    <div className="headerUserInfoContainer"><img src={userIcon} alt="userpic" className="userIcon" />
    <p>XXXX-XXXX 123456</p></div>
      <Timer/>
      <div className="HeaderButtonContainer">
        <button className="headerButton">Finish test</button>
        <button className="headerButton">Help</button>
        <button className="headerButton">Hide</button>
      </div>
    </div>
  );
}

export default Header;
