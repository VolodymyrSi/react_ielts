import TaskFile from "../components/Task/TaskFile";
import TaskForm from "../components/Task/TaskForm";
import { Context } from "../App";
import { useContext } from "react";
import { task1AcademicBank } from "../assets/test-materials/Test_bank_academic";
import { task2AcademicBank } from "../assets/test-materials/Test_bank_academic";

import { task1GeneralBank } from "../assets/test-materials/Test_bank_general";
import { task2GeneralBank } from "../assets/test-materials/Test_bank_general";

import { TaskWrapper, TaskHeader, TaskContainer } from "./styled";

function moduleSelector(ExamModule) {
  let taskBank = null;
  ExamModule === "Academic"
    ? (taskBank = [task1AcademicBank, task2AcademicBank])
    : (taskBank = [task1GeneralBank, task2GeneralBank]);
  return taskBank;
}

function Task2() {
  const { userInput2, setUserInput2, ExamModule, ExamModuleTaskNumber } =
    useContext(Context);
  return (
    <>
      <TaskWrapper>
        <TaskHeader>
          <h1>Part 2</h1>
          <p>
            You should spend about 40 minutes on this task. Write at least 250
            words.
          </p>
        </TaskHeader>
      </TaskWrapper>

      <TaskContainer>
        <TaskFile
          number="2"
          task={moduleSelector(ExamModule)[1][ExamModuleTaskNumber - 1]["task"]}
          module={ExamModule}
        />
        <TaskForm
          input={userInput2}
          setInput={setUserInput2}
          value={userInput2}
        />
      </TaskContainer>
    </>
  );
}

export default Task2;
