import Draggable from 'react-draggable';
import React from 'react';
import { useRef, useEffect } from 'react';
import ReactDOM from "react-dom";

const Player = (props) => {

    const nodeRef = useRef(null);

    const componentRef = useRef(null);

    useEffect(() => {
        const rect = componentRef.current.getBoundingClientRect();
        console.log('Component position:', rect);
    // Access individual properties like rect.top, rect.left, rect.width, rect.height
    }, []);

    return (
        <div ref={componentRef}>
            <Draggable nodeRef={nodeRef}>
                <div ref={nodeRef} className="player">
                    <div className="header">{props.title}</div>
                    <div className="content">Content</div>
                </div>
            </Draggable>
        </div>
    )
  }
  
  export default Player;