import React, { Component, useEffect, useRef, useState } from 'react' 
import './SwipeableButton.css'
import { DraggableCore } from 'react-draggable';

const slider = React.createRef();
const container = React.createRef();
const isTouchDevice = 'ontouchstart' in document.documentElement
interface mycomponentProps{
    success : any,
    label : string
}
const SwipeableButton: React.FC<mycomponentProps> =(props)=>{
   
    const [unlock, setUnlock] = useState(false);
    const pRef = useRef(null);
    useEffect(() => {
        (pRef.current as any).addEventListener('dragstart', ()=>{
          console.log('react caught custom event directly on component');
        });
      });

      const hellofunction=(e:any)=>{
          if(e.targetTouches[0].screenX > 250){
              setUnlock(true);
             
                props.success();

                setTimeout(() => {
                    setUnlock(false);
                }, 200);
              
          }
      }
 
    return (
        <DraggableCore onDrag={hellofunction}>
      <div className='ReactSwipeButton'>
        <div ref={pRef} draggable="true"  className={unlock === false?"rsbContainer":"rsbContainerUnlocked"}>
          <div className='rsbcSlider'>
            <span className='rsbcSliderText'>Go</span>
            <span className='rsbcSliderArrow'></span>
            <span className='rsbcSliderCircle' style={{backgroundColor:"green"}}></span>
          </div>
    <div className='rsbcText'>Slide me to {props.label}</div>
        </div>
      </div>
      </DraggableCore>
    )
  
}

export default SwipeableButton