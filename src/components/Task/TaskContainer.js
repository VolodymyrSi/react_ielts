import { useState } from 'react';
import TaskHeader from './TaskHeader';
import Task1 from '../Tasks/Task1';
import Task2 from '../Tasks/Task2';
import Nav from '../Nav/Nav';
import s from './TaskContainer.module.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function TaskContainer() {
  const [taskNumber, setTaskNumber] = useState(1);

  return (
    <div>
      <div className={s.taskWrapper}>
        <TaskHeader taskNumber={taskNumber} />
      </div>
      <Router>
        <Routes>
          <Route path="/task1" element={<Task1 />} />
          <Route path="/task2" element={<Task2 />} />
        </Routes>
     
      <div className={s.navWrapper}>
        <Nav onClick={setTaskNumber} />
      </div>
      </Router>
    </div>
  );
}

export default TaskContainer;
