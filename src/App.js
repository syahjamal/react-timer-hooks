import { Button } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import './App.css';

function App() {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false)

  function toggle() {
    setIsActive(!isActive)
  }

  function reset() {
    setSeconds(0);
    setIsActive(false)
  }

  useEffect(()=>{
    let interval = null;
    if(isActive){
      interval = setInterval(()=>{
        setSeconds(seconds=>seconds + 1);
      }, 1000);
    } else if(!isActive && seconds !== 0){
      clearInterval(interval);
    }
  })

  return (
    <div className="app">
      <div className="time">
        {seconds}s
      </div>
      <div className="row">
        <Button 
        className={`button button-primary`} 
        variant='contained'
        color='primary'
        onClick={toggle}
        >
          {isActive ? 'Pause' : 'Start'}
        </Button>
        <Button 
          className="button" 
          variant="outlined" 
          color="secondary" 
          onClick={reset}
          > 
          Reset
        </Button>
      </div>
    </div>
  );
}

export default App;
