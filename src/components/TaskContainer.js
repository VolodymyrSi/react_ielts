import { useState, useContext } from 'react';
import TaskHeader from './TaskHeader';
import TaskFile from './TaskFile';
import TaskForm from './TaskForm';
import Nav from './Nav';
import { Context } from '../App';
import { task1AcademicBank } from '../files/Test_bank_academic.js';
import { task2AcademicBank } from '../files/Test_bank_academic.js';

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
      <div className="taskContainer">
        <TaskHeader />
      </div>
      <div className="taskFileAndForm">
        {taskNumber === 1 && (
          <TaskFile
            number="1"
            //     task="The table below shows how the UK unemployed spent their time last year. &#13;
            // Summarise the information by selecting and reporting the main features,
            // and make comparisons where relevant."
            task={task1AcademicBank[ExamModuleTaskNumber - 1]['task']}
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
            task={task2AcademicBank[ExamModuleTaskNumber - 1]['task']}
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
