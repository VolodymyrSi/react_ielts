import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Task1 from "./Task1";
import Task2 from "./Task2";
import Nav from "../components/Nav/Nav";

import { NavWrapper } from "./styled";

function TaskContainer() {
  const [taskNumber, setTaskNumber] = useState(1);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/task1" element={<Task1 />} />
          <Route path="/task2" element={<Task2 />} />
        </Routes>
        <NavWrapper>
          <Nav onClick={() => setTaskNumber} />
        </NavWrapper>
      </BrowserRouter>
    </div>
  );
}

export default TaskContainer;
