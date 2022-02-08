import { useContext } from "react";
import { Context } from "../../App";
import { FinishTaskButton } from "./styled";

function FinishButton() {
  const { setIsFinished, setIsWriting } = useContext(Context);
  function finishTest() {
    setIsWriting(false);
    setIsFinished(true);
  }
  return (
    <FinishTaskButton onClick={() => finishTest()}>
      Finish test
    </FinishTaskButton>
  );
}

export default FinishButton;
