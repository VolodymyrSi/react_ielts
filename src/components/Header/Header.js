import userIcon from '../../files/user-icon.svg';
import Timer from '../Timer/Timer.js';
import FinishButton from './Buttons/FinishButton.js';
import s from './Header.module.css'

function Header() {
  return (
    <div className={s.header}>
      <div className={s.userInfoContainer}>
        <img src={userIcon} alt="userpic" className={s.userIcon} />
        <p>XXXX-XXXX 123456</p>
      </div>
      <Timer />
      <div>
        <FinishButton />
        <button className={s.button}>Help</button>
        <button className={s.button}>Hide</button>
      </div>
    </div>
  );
}

export default Header;
