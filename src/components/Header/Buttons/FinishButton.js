import {  useContext } from 'react';
import { Context } from '../../../App';
import style from '../Header.module.css'

function FinishButton() {
  const { setIsFinished, setIsWriting } = useContext(Context);
  function finishTest() {
    setIsWriting(false);
    setIsFinished(true);
  }
  return (
    <button className={`${style.button} ${style.finish}`} onClick={() => finishTest()}>
      Finish test
    </button>
  );
}

export default FinishButton;
