import { useContext } from "react";
import Swal from "sweetalert2";
import { Context } from "../App";
import { Container } from "./styled";

function TaskSelector() {
  const { setExamModule, setExamModuleTaskNumber, setHasTask, setIsWriting } =
    useContext(Context);

  async function chooseExamModuleTaskNumber() {
    const inputOptions = new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          1: "1",
          2: "2",
          3: "3",
          4: "4",
        });
      }, 1000);
    });

    const { value: ExamModuleTaskNumber } = await Swal.fire({
      title: "Select task number",
      input: "radio",
      inputOptions: inputOptions,
      inputValidator: (value) => {
        if (!value) {
          return "You need to choose something!";
        }
      },
    });

    if (ExamModuleTaskNumber) {
      setExamModuleTaskNumber(ExamModuleTaskNumber);
      setHasTask(true);
      setIsWriting(true);
    }
  }

  async function chooseModule() {
    const inputOptions = new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          General: "General",
          Academic: "Academic",
        });
      }, 1000);
    });

    const { value: module } = await Swal.fire({
      title: "Select module",
      input: "radio",
      inputOptions: inputOptions,
      inputValidator: (value) => {
        if (!value) {
          return "You need to choose something!";
        }
      },
    });

    if (module) {
      setExamModule(module);
      setTimeout(() => chooseExamModuleTaskNumber(), 5);
    }
  }
  return (
    <Container>
      <button className="item" onClick={() => chooseModule()}>
        Take a test
      </button>
    </Container>
  );
}

export default TaskSelector;
