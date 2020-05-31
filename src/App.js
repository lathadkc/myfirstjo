import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import HookCounter1 from './components/HookCounter1';

function App() {

  useEffect(() => {
    console.log("USE EFFECT CALLED ap");
    
    
  })
  return (
  <div>
  <HookCounter1></HookCounter1>
  </div>
  );
}

export default App;
