import React from 'react';
import './App.css';
import {Todos} from './components/todo';
import mirageServer from './mirage';

mirageServer()

function App() {
  return (
    <div >
      <Todos />
    </div>
  );
}

export default App;
