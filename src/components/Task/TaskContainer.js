import { useState, useContext } from 'react';
import TaskHeader from './TaskHeader';
import TaskFile from './TaskFile';
import TaskForm from './TaskForm';
import Nav from '../Nav/Nav';
import { Context } from '../../App';

import { task1AcademicBank } from '../../files/Test_bank_academic.js';
import { task2AcademicBank } from '../../files/Test_bank_academic.js';

import { task1GeneralBank } from '../../files/Test_bank_general.js';
import { task2GeneralBank } from '../../files/Test_bank_general.js';

function TaskContainer() {
  const [taskNumber, setTaskNumber] = useState(1);
  const {
    userInput1,
    setUserInput1,
    userInput2,
    setUserInput2,
    ExamModule,
    ExamModuleTaskNumber
  } = useContext(Context);

  function moduleSelector(ExamModule) {
    let taskBank = null;
    ExamModule === 'Academic'
      ? (taskBank = [task1AcademicBank, task2AcademicBank])
      : (taskBank = [task1GeneralBank, task2GeneralBank]);
    return taskBank;
  }

  return (
    <div>
      <div className="taskContainer">
        <TaskHeader taskNumber={taskNumber} />
      </div>
      <div className="taskFileAndForm">
        {taskNumber === 1 && (
          <TaskFile
            number="1"
            task={
              moduleSelector(ExamModule)[0][ExamModuleTaskNumber - 1]['task']
            }
            taskNumber={ExamModuleTaskNumber}
            module={ExamModule}
          />
        )}
        {taskNumber === 1 && (
          <TaskForm
            input={userInput1}
            setInput={setUserInput1}
            value={userInput1}
          />
        )}
      </div>
      <div className="taskFileAndForm">
        {taskNumber === 2 && (
          <TaskFile
            number="2"
            task={
              moduleSelector(ExamModule)[1][ExamModuleTaskNumber - 1]['task']
            }
            module={ExamModule}
          />
        )}
        {taskNumber === 2 && (
          <TaskForm
            input={userInput2}
            setInput={setUserInput2}
            value={userInput2}
          />
        )}
      </div>
      <div className="navFlexContainer">
        <Nav onClick={setTaskNumber} />
      </div>
    </div>
  );
}

export default TaskContainer;
