import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import TaskHeader from './TaskHeader';
import Task1 from '../Tasks/Task1';
import Task2 from '../Tasks/Task2';
import Nav from '../Nav/Nav';
import style from './TaskContainer.module.css';

function TaskContainer() {
  const [taskNumber, setTaskNumber] = useState(1);

  return (
    <div>
      <div className={style.taskWrapper}>
        <TaskHeader taskNumber={taskNumber} />
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/task1" element={<Task1 />} />
          <Route path="/task2" element={<Task2 />} />
        </Routes>
        <div className={style.navWrapper}>
          <Nav onClick={setTaskNumber} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default TaskContainer;
