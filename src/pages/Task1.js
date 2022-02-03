import TaskFile from "../components/Task/TaskFile";
import TaskForm from "../components/Task/TaskForm";
import { Context } from "../App";
import { useContext } from "react";
import { TaskWrapper, TaskHeader, TaskContainer } from "./styled";

import { moduleSelector } from "../components/utils/helper";

function Task1() {
  const { userInput1, setUserInput1, ExamModule, ExamModuleTaskNumber } =
    useContext(Context);
  return (
    <>
      <TaskWrapper>
        <TaskHeader>
          <h1>Part 1</h1>
          <p>
            You should spend about 20 minutes on this task. Write at least 150
            words.
          </p>
        </TaskHeader>
      </TaskWrapper>

      <TaskContainer>
        <TaskFile
          number="1"
          task={moduleSelector(ExamModule)[0][ExamModuleTaskNumber - 1]["task"]}
          taskNumber={ExamModuleTaskNumber}
          module={ExamModule}
        />
        <TaskForm
          input={userInput1}
          setInput={setUserInput1}
          value={userInput1}
        />
      </TaskContainer>
    </>
  );
}

export default Task1;
