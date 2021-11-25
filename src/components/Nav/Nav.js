import s from './Nav.module.css'

function Nav(props) {
  return (
    <div className={s.container}>
      <div className={s.buttonWrapper}>
        <p>Part 1:</p>
        <button className={s.button} onClick={() => props.onClick(1)}>1</button>
      </div>
      <div className={s.buttonWrapper}>
        <p>Part 2:</p>
        <button className={s.button} onClick={() => props.onClick(2)}>2</button>
      </div>
    </div>
  );
}

export default Nav;
