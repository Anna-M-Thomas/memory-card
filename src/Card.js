import React from 'react'

function Card(props){
    return(<div onClick={props.handleClick} data-id={props.id}>
        <h1>{props.data.name}</h1>
        <img src={props.data.image} alt={props.data.name}/>
    </div>);
}

export default Card
