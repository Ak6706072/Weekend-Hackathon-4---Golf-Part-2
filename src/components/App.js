import React, { Component, useState, useEffect } from "react";
import "../styles/App.css";


const App = () => {
  const [renderBall, setRenderBall] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [ballPosition,setBallPosition] = useState({
    left: "0px",
    top: "0px",
  });
  const fun = (event)=>{
      //console.log(event.keyCode);
      switch(event.keyCode){
        case 39:{
          //right arrow key
          setX(x+5);
          setBallPosition({
            left:x + "px",
            top:y + "px",
            position : "absolute"
          })
          // console.log(ballPosition,x,y)
          break;
        }
        case 40:{
            //down arrow key
            setY(y+5);
            // console.log("down arrow key",x,y)
            setBallPosition({
              left:x + "px",
              top:y + "px",
              position : "absolute"
            })
            // console.log(ballPosition,x,y)
            break;
        }
        case 38:{
          //up arrow key
          
            setY(y-5);
            // console.log("down arrow key",x,y)
            setBallPosition({
              left:x + "px",
              top:y + "px",
              position : "absolute"
            })
            // console.log(ballPosition,x,y)
          break;
        }
        case 37:{
          // left arrow key
         
            setX(x-5);
          setBallPosition({
            left:x + "px",
            top:y + "px",
            position : "absolute"
          })
          // console.log(ballPosition,x,y)
          break;
        }
        default :{
          break;
        }
      }
    }
  
  useEffect(()=>{
    //console.log("useEffect body");
      document.addEventListener("keydown",fun)
      //cleanUp function
      return () =>{
        document.removeEventListener("keydown",fun);
        // console.log("cleanup function")
      }
  },[ballPosition])
  // every x,y changes then again executed the useeffect body and 
  // every useeffect attact the event an the document the page is very heavy 
  //in every x,y change  so we need to write the clean up documet event listener when 
  // we change the x,y
  const reset = () => {
      setRenderBall(false);
      setX(0);
      setY(0);
      setBallPosition({
        left: "0px",
        top:"0px"
      })
  };
  const clickHandler = ()=>{
    setRenderBall(true);
  }
  const renderChoice = () => {
    if(!renderBall){
      return <button onClick={clickHandler} className="start">Start</button>
    }else{
      return <div className="ball" style={{...ballPosition,position:"absolute"}}></div>
    }

  };
  // console.log(renderChoice())
  return (
    <div className="playground">
      <button onClick={reset} className="reset">
        Reset
      </button>
      {renderChoice()}
    </div>
  );
};

export default App;
