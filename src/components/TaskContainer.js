import { useState, useContext } from 'react';
import TaskHeader from './Task_header';
import TaskFile from './Task_file';
import TaskForm from './Task_form';
import Nav from './Nav';
import { Context } from '../App';

function TaskContainer() {
  const [taskNumber, setTaskNumber] = useState(1);
  const {userInput1, setUserInput1, userInput2, setUserInput2} = useContext(Context)
  // const [userInput1, setUserInput1] = useState('');
  // const [userInput2, setUserInput2] = useState('');

  return (
    <div>
      <div className="taskContainer">
        <TaskHeader />
      </div>
      <div className="taskFileAndForm">
        {taskNumber === 1 && (
          <TaskFile
            number="1"
            task="The table below shows how the UK unemployed spent their time last year. 
        Summarise the information by selecting and reporting the main features,
        and make comparisons where relevant."
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
            task="Write about the following topic: 
Some people argue that all experimentation on animals is bad and should be outlawed.
However, others believe that important scientific discoveries can be made from animal experiments.
Can experimentation on animals be justified? Are there any alternatives?
Give reasons for your answer and include any relevant examples from your own knowledge and experience."
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
