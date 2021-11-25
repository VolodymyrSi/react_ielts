import {  useContext } from 'react';
import { Context } from '../../../App';
import s from '../Header.module.css'

function FinishButton() {
  const { setIsFinished, setIsWriting } = useContext(Context);
  function finishTest() {
    setIsWriting(false);
    setIsFinished(true);
  }
  return (
    <button className={`${s.button} ${s.finish}`} onClick={() => finishTest()}>
      Finish test
    </button>
  );
}

export default FinishButton;
