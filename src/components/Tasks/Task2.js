import React from 'react';
import TaskFile from '../Task/TaskFile';
import TaskForm from '../Task/TaskForm';
import { Context } from '../../App';
import { useContext } from 'react';
import { task1AcademicBank } from '../../files/Test_bank_academic.js';
import { task2AcademicBank } from '../../files/Test_bank_academic.js';

import { task1GeneralBank } from '../../files/Test_bank_general.js';
import { task2GeneralBank } from '../../files/Test_bank_general.js';

import style from '../Task/TaskContainer.module.css';

function moduleSelector(ExamModule) {
  let taskBank = null;
  ExamModule === 'Academic'
    ? (taskBank = [task1AcademicBank, task2AcademicBank])
    : (taskBank = [task1GeneralBank, task2GeneralBank]);
  return taskBank;
}

function Task2() {
  const { userInput2, setUserInput2, ExamModule, ExamModuleTaskNumber } =
    useContext(Context);
  return (
    <>
      <div className="taskWrapper">
        <div className="taskHeader">
          <h1>Part 2</h1>
          <p>
            You should spend about 40 minutes on this task. Write at least 250
            words.
          </p>
        </div>
      </div>

      <div className={style.container}>
        <TaskFile
          number="2"
          task={moduleSelector(ExamModule)[1][ExamModuleTaskNumber - 1]['task']}
          module={ExamModule}
        />
        <TaskForm
          input={userInput2}
          setInput={setUserInput2}
          value={userInput2}
        />
      </div>
    </>
  );
}

export default Task2;
