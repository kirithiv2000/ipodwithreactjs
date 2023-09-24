import logo from './logo.svg';
import React, { useEffect, useRef } from 'react';
import ZingTouch from 'zingtouch';
import './App.css';
const onClickfunction=(e)=>{
  console.log(e)
}
function App() {
  // const myElementRef = useRef(document.getElementsByClassName("box"));

  // useEffect(() => {
  //   // Code to set up ZingTouch on myElementRef.current
  //   const myElement = myElementRef.current;

  //   // Create a new ZingTouch Region
  //   const myRegion = new ZingTouch.Region(myElement);
  
  //   // Define a tap gesture with a callback function
  //   const tapGesture = new ZingTouch.Tap({
  //     numInputs: 1,
  //     tolerance: 10,
  //   });
  
  //   tapGesture.start = function (e) {
  //     // Handle the tap event here
  //     console.log('Tap event detected');
  //   };
  
  //   // Bind the tap gesture to the element
  //   myRegion.bind(myElement, tapGesture);
  
  //   // Cleanup the event listeners when the component unmounts
  //   return () => {
  //     myRegion.unbind(myElement, tapGesture);
  //   };
  // }, []);
  return (
    <div className="App">
      <div className='display'>

      </div>
      <div className='Menu' style={{position:"relative",height:"100%"}}>

        <div className='box'>
          <div className='screen'>

          </div>
          <div className='innerBox'>
            <div className='outerCircle'>

            </div>
            <div className='innerCircle'>
              
            </div>
            <div className='top-menu' onClick={()=>onClickfunction("top")} ><h3>MENU</h3></div>
            <div className='left-menu' onClick={()=>onClickfunction("left")}>
                <div style={{display:"flex"}}>
                  <div className='line'></div>
                  <div className='leftArrow'></div>
                  <div className='leftArrow'></div>
              </div>
            </div>
            <div className='right-menu' onClick={()=>onClickfunction("right")}>
              <div style={{display:"flex"}}>
                <div className='rightArrow'></div>
                <div className='rightArrow'></div>
                <div className='line'></div>
              </div>
            </div>
            <div className='bottom-menu' onClick={()=>onClickfunction("bottom")}>
              <div style={{display:"flex"}}>
                <div className='rightArrow'></div>
                <div className='line' style={{marginRight:"5px",marginLeft:"5px"}}></div>
                <div className='line'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
