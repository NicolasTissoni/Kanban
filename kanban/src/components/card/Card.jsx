import React from 'react'
import './card.scss';
const Card = (props) => {
    return (
        <div className='card-container'>
            {props.children}
        </div>
    )
}

export default Card