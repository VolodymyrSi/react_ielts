import {  useContext } from 'react';
import { Context } from '../../../App';

function FinishButton() {
  const { setIsFinished, setIsWriting } = useContext(Context);
  function finishTest() {
    setIsWriting(false);
    setIsFinished(true);
  }
  return (
    <button className="headerButton finishTest" onClick={() => finishTest()}>
      Finish test
    </button>
  );
}

export default FinishButton;
