import React, { useState } from 'react';

import SelectTaskButton from './components/SelectTaskButton';

import Header from './components/Header';
import TaskContainer from './components/TaskContainer';
import PDFView from './components/PdfView';

export const Context = React.createContext();

function App() {
  const [hasTask, setHasTask] = useState(false);
  const [isWriting, setIsWriting] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const [ExamModule, setExamModule] = useState('Academic');
  const [ExamModuleTaskNumber, setExamModuleTaskNumber] = useState(1);

  const [userInput1, setUserInput1] = useState('');
  const [userInput2, setUserInput2] = useState('');
  return (
    <Context.Provider
      value={{
        userInput1,
        setUserInput1,
        userInput2,
        setUserInput2,
        ExamModule,
        setExamModule,
        ExamModuleTaskNumber,
        setExamModuleTaskNumber,
        setHasTask,
        setIsFinished,
        setIsWriting
      }}
    >
      {!hasTask && <SelectTaskButton />}
      {isWriting && (
        <div className="body">
          <Header />
          <TaskContainer />
        </div>
      )}
      {isFinished && <PDFView className="PdfContainer" />}
    </Context.Provider>
  );
}

export default App;
