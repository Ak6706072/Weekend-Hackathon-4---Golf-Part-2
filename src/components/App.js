import React, { Component, useState, useEffect } from "react";
import "../styles/App.css";


const App = () => {
  const [renderBall, setRenderBall] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [ballPosition,setBallPosition] = useState({ left: "0px", top: "0px",});
  
 
 useEffect(()=>{
        setBallPosition((ballPosition)=>{
            return {...ballPosition,left:x+"px",top:y+"px"}
           });
 },[x,y])
 
 let handleClick = (event) => {
      switch (event.keyCode) {
        case 39:
          // right arrow key
          setX(x => x+5)
          // setBallPosition((ballPosition)=>{
          //   return {...ballPosition,left:x+"px"}
          // })
          break;
        case 40:
          // down arrow key
          setY(y => y+5)
          // setBallPosition((ballPosition)=>{
          //   return {...ballPosition,top:ballPosition.top+5};
          // })
          break
        case 37:
          //left arrow key
          setX(x=>x-5)
          // setBallPosition((ballPosition)=>{
          //   return {...ballPosition,left:ballPosition.left-5}
          // })
          break
        case 38:
          //top key
          setY(y => y-5)
          // setBallPosition((ballPosition)=>{
          //   return {...ballPosition,top:ballPosition.top-5}
          // })
          break;
        default:
          break;
      }
 }
 useEffect(()=>{
    document.addEventListener("keydown",handleClick);
//     return ()=> {
//       document.removeEventListener("keydown",handleClick);
//     }

 },[])

  
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
