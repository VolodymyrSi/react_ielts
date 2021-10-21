import clockIcon from '../files/clock-icon.svg';

function Timer() {
  return (
    <div className="timerContainer">
        <img src={clockIcon} alt="clockpic" className="clockIcon" />
        <p>50 minutes left</p>
    </div>
  );
}

export default Timer;
