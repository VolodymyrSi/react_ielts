import userIcon from '../../files/user-icon.svg';
import Timer from '../Timer/Timer.js';
import FinishButton from './Buttons/FinishButton.js';
import style from './Header.module.css'

function Header() {
  return (
    <div className={style.header}>
      <div className={style.userInfoContainer}>
        <img src={userIcon} alt="userpic" className={style.userIcon} />
        <p>XXXX-XXXX 123456</p>
      </div>
      <Timer />
      <div>
        <FinishButton />
        <button className={style.button}>Help</button>
        <button className={style.button}>Hide</button>
      </div>
    </div>
  );
}

export default Header;
