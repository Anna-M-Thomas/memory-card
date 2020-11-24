import React from 'react';
import Navbar from 'react-bootstrap/Navbar'

function Scoreboard(props){
return(<div className="scoreboard"><p>Score: {props.score}</p><p>Best score: {props.bestScore}</p></div>);
}

export default Scoreboard;