import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import HookCounter1 from './components/HookCounter1';
import Hooktounter2 from './components/HookCounter2';

function App() {

  useEffect(() => {
    console.log("USE EFFECT CALLED ap");
    
    
  })
  return (
  <div>
  
  <Hooktounter2></Hooktounter2>
  </div>
  );
}

export default App;
