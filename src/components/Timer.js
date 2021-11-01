import clockIcon from '../files/clock-icon.svg';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

function Timer() {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setTimer((timer) => timer + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  let maxTime = 60 * 60;
  let seconds = 60 - (timer % 60);
  let minutes = Math.floor(maxTime / 60 - timer / 60);

  function tenMintesLeft() {
    Swal.fire('10 minutes left');
  }

  function fiveMinutesLeft() {
    Swal.fire('5 minutes left');
  }

  return (
    <div className="timerContainer">
      <img src={clockIcon} alt="clockpic" className="clockIcon" />
      <p>
        {minutes} : {seconds} minutes left
      </p>
      {timer === 60 * 50 && tenMintesLeft()}
      {timer === 60 * 55 && fiveMinutesLeft()}
    </div>
  );
}

export default Timer;
