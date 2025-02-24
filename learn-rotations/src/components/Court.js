import React from 'react';
import Player from './Player';
import { useState } from 'react';

const Court = () => {

    const [players, setPlayers] = useState([{title: "Foo", id: 0}, {title: "Bar", id: 1}, {title: "Foobar", id: 3}]);

    const positionElement = (elementRef, targetRef) => {
        const targetRect = targetRef.current.getBoundingClientRect();
        const elementRect = elementRef.current.getBoundingClientRect();
      
        // Position elementRef directly below targetRef
        elementRef.current.style.position = 'absolute';
        elementRef.current.style.top = `${targetRect.bottom}px`;
        elementRef.current.style.left = `${targetRect.left}px`;
    };


    return (
        <div className="list">
        {players.map((player) => <Player title={player.title} key={player.id} />)}
        </div>
    )
}

export default Court