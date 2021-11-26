import React from 'react';
import TaskFile from '../Task/TaskFile';
import TaskForm from '../Task/TaskForm';
import { Context } from '../../App';
import { useState, useContext } from 'react';
import { task1AcademicBank } from '../../files/Test_bank_academic.js';
import { task2AcademicBank } from '../../files/Test_bank_academic.js';

import { task1GeneralBank } from '../../files/Test_bank_general.js';
import { task2GeneralBank } from '../../files/Test_bank_general.js';

import s from '../Task/TaskContainer.module.css';



function moduleSelector(ExamModule) {
    let taskBank = null;
    ExamModule === 'Academic'
      ? (taskBank = [task1AcademicBank, task2AcademicBank])
      : (taskBank = [task1GeneralBank, task2GeneralBank]);
    return taskBank;
  }

function Task1() {
  const {
    userInput1,
    setUserInput1,
    ExamModule,
    ExamModuleTaskNumber
  } = useContext(Context);
  return (
    <div className={s.container}>
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
  );
}

export default Task1;
