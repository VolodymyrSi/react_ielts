import Header from './components/Header';
import TaskContainer from './components/TaskContainer';
import React, { useState } from 'react';

export const Context = React.createContext();

function App() {
  const [userInput1, setUserInput1] = useState('');
  const [userInput2, setUserInput2] = useState('');
  return (
    <Context.Provider
      value={{ userInput1, setUserInput1, userInput2, setUserInput2 }}
    >
      <div className="body">
        <Header />
        <TaskContainer />
      </div>
    </Context.Provider>
  );
}

export default App;
