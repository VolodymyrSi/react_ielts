import React from 'react';
import TaskFile from '../Task/TaskFile';
import TaskForm from '../Task/TaskForm';
import { Context } from '../../App';
import { useContext } from 'react';

import style from '../Task/TaskContainer.module.css';

import { moduleSelector } from '../utils/helper';

function Task1() {
  const { userInput1, setUserInput1, ExamModule, ExamModuleTaskNumber } =
    useContext(Context);
  return (
    <>
      <div className="taskWrapper">
        <div className="taskHeader">
          <h1>Part 1</h1>
          <p>
            You should spend about 20 minutes on this task. Write at least 150
            words.
          </p>
        </div>
      </div>

      <div className={style.container}>
        <TaskFile
          number="1"
          task={moduleSelector(ExamModule)[0][ExamModuleTaskNumber - 1]['task']}
          taskNumber={ExamModuleTaskNumber}
          module={ExamModule}
        />
        <TaskForm
          input={userInput1}
          setInput={setUserInput1}
          value={userInput1}
        />
      </div>
    </>
  );
}

export default Task1;
