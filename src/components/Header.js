import userIcon from '../files/user-icon.svg';
import Timer from './Timer.js';
import FinishButton from './FinishButton.js';
import SelectTaskButton from './SelectTaskButton';

function Header() {
  return (
    <div className="header">
      <div className="headerUserInfoContainer">
        <img src={userIcon} alt="userpic" className="userIcon" />
        <p>XXXX-XXXX 123456</p>
      </div>
      <Timer />
      <div>
        <SelectTaskButton />
        <FinishButton />
        <button className="headerButton">Help</button>
        <button className="headerButton">Hide</button>
      </div>
    </div>
  );
}

export default Header;
