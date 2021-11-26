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


function Task2() {
  const {
    userInput2,
    setUserInput2,
    ExamModule,
    ExamModuleTaskNumber
  } = useContext(Context);
  return (
    <div className={s.container}>
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
  );
}

export default Task2;
