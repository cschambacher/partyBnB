import React from 'react';
import './card.scss';
const Card = (props) => (
    <div className="card">
        <img className="card-image" src={props.imageUrl}/>
        <p className="card-title">{props.title}</p>
    </div>
)

export default Card;