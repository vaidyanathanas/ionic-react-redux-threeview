import React, { Component, useEffect, useRef, useState } from 'react'
import './SwipeableButton.css'
import { DraggableCore } from 'react-draggable';

const slider = React.createRef();
const container = React.createRef();
const isTouchDevice = 'ontouchstart' in document.documentElement
interface mycomponentProps {
  success: any,
  label: string
}
const SwipeableButton: React.FC<mycomponentProps> = (props) => {

  const [unlock, setUnlock] = useState(false);

  const hellofunction = (e: any) => {
    let xValue = e.screenX || 0;
    if (e && e.targetTouches && e.targetTouches[0]) {
      xValue = e.targetTouches[0].screenX;
    }
    if (xValue > 250) {
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
        <div draggable="true" className={unlock === false ? "rsbContainer" : "rsbContainerUnlocked"}>
          <div className='rsbcSlider'>
            <span className='rsbcSliderText'>Go</span>
            <span className='rsbcSliderArrow'></span>
            <span className='rsbcSliderCircle' style={{ backgroundColor: "green" }}></span>
          </div>
          <div className='rsbcText'>{props.label}</div>
        </div>
      </div>
    </DraggableCore>
  )

}

export default SwipeableButton