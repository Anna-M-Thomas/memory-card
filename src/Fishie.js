import React from 'react';
import Figure from 'react-bootstrap/Figure';

function FishieCard (props){
    return(<Figure onClick={props.handleClick} data-index={props.index} className="text-center">
            <Figure.Image
            width={171}
            height={180}
            alt={props.data.name}
            src={props.data.image}/>
            <Figure.Caption className="text-dark">{props.data.name}</Figure.Caption>
        </Figure>);
}

export default FishieCard
