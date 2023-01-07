import logo from './logo.svg';
import './App.css';
import {TestOpenAI} from './api/openaiTest';
import React, {button, useEffect} from 'react';

function App() {
  TestOpenAI()
  return (
    <button onClick={() => this.testOpenAI}>Click Me</button>
  );
}

export default App;
