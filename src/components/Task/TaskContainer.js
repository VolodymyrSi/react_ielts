import { useState, useContext } from 'react';
import TaskHeader from './TaskHeader';
import Task1 from '../Tasks/Task1';
import Task2 from '../Tasks/Task2';
import TaskFile from './TaskFile';
import TaskForm from './TaskForm';
import Nav from '../Nav/Nav';
import { Context } from '../../App';
import s from './TaskContainer.module.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import { task1AcademicBank } from '../../files/Test_bank_academic.js';
import { task2AcademicBank } from '../../files/Test_bank_academic.js';

import { task1GeneralBank } from '../../files/Test_bank_general.js';
import { task2GeneralBank } from '../../files/Test_bank_general.js';

function moduleSelector(ExamModule) {
  let taskBank = null;
  ExamModule === 'Academic'
    ? (taskBank = [task1AcademicBank, task2AcademicBank])
    : (taskBank = [task1GeneralBank, task2GeneralBank]);
  return taskBank;
}

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

  return (
    <div>
      <div className={s.taskWrapper}>
        <TaskHeader taskNumber={taskNumber} />
      </div>
      <Routes>
        <Route path="/task1" element={<Task1/>}>
          {/* <div className={s.container}>
            <TaskFile
              number="1"
              task={
                moduleSelector(ExamModule)[0][ExamModuleTaskNumber - 1]['task']
              }
              taskNumber={ExamModuleTaskNumber}
              module={ExamModule}
            />
            <TaskForm
              input={userInput1}
              setInput={setUserInput1}
              value={userInput1}
            />
          </div> */}
        </Route>
        <Route path="/task2" element={<Task2/>}>
          {/* <div className={s.container}>
            <TaskFile
              number="2"
              task={
                moduleSelector(ExamModule)[1][ExamModuleTaskNumber - 1]['task']
              }
              module={ExamModule}
            />
            <TaskForm
              input={userInput2}
              setInput={setUserInput2}
              value={userInput2}
            />
          </div> */}
        </Route>
      </Routes>
      <div className={s.navWrapper}>
        <Nav onClick={setTaskNumber} />
      </div>
    </div>
  );
}

export default TaskContainer;
