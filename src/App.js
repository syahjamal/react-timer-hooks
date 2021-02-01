import { Button } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import './App.css';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function App() {
  const classes = useStyles();

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
    return () => clearInterval(interval)
  }, [isActive, seconds]);

  return (
    <div className="app">
      <div className="time">
        {seconds}s
      </div>
      <div className={classes.root}>
        <Button 
        className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`} 
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
