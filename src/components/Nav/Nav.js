import s from './Nav.module.css'
import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <div className={s.container}>
      <div className={s.buttonWrapper}>
        <p>Part 1:</p>
        <Link to='/task1'><button className={s.button} onClick={() => props.onClick(1)}>1</button></Link>
      </div>
      <div className={s.buttonWrapper}>
        <p>Part 2:</p>
        <Link to='/task2'><button className={s.button} onClick={() => props.onClick(2)}>2</button></Link>
      </div>
    </div>
  );
}

export default Nav;
