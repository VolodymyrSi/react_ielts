import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import TaskSelector from "./features/task-selector/TaskSelector";
import Header from "./components/Header/Header";
import TaskContainer from "./pages/TaskContainer";
import PDFView from "./assets/pdf-view/PdfView";

import { GlobalStyleNormalizeCSS } from "./assets/styles/global-style";
import {themeLight, themeDark} from './assets/styles/themes'

export const Context = React.createContext();

function App() {
  const [hasTask, setHasTask] = useState(false);
  const [isWriting, setIsWriting] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const [ExamModule, setExamModule] = useState("Academic");
  const [ExamModuleTaskNumber, setExamModuleTaskNumber] = useState(1);

  const [userInput1, setUserInput1] = useState("");
  const [userInput2, setUserInput2] = useState("");
  const [theme, setTheme] = useState(themeLight)


  return (
    <ThemeProvider theme={theme}>
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
          setIsWriting,
          theme,
          setTheme
        }}
      >
        <GlobalStyleNormalizeCSS />
        {!hasTask && <TaskSelector />}
        {isWriting && (
          <div className="body">
            <Header />
            <TaskContainer />
          </div>
        )}
        {isFinished && <PDFView className="PdfContainer" />}
      </Context.Provider>
    </ThemeProvider>
  );
}

export default App;
