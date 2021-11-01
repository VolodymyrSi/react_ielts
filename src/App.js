import Header from './components/Header';
import TaskContainer from './components/TaskContainer';
import React, { useState } from 'react';
import PDFView from './components/PdfView';

export const Context = React.createContext();

function App() {
  const [ExamModule, setExamModule] = useState("Academic");
  const [ExamModuleTaskNumber, setExamModuleTaskNumber] = useState(1);

  const [userInput1, setUserInput1] = useState('');
  const [userInput2, setUserInput2] = useState('');
  return (
    <Context.Provider
      value={{ userInput1, setUserInput1, userInput2, setUserInput2, ExamModule, setExamModule, ExamModuleTaskNumber, setExamModuleTaskNumber }}
    >
      <div className="body">
        <Header />
        <TaskContainer />
        <PDFView className="PdfContainer" />
      </div>
    </Context.Provider>
  );
}

export default App;
