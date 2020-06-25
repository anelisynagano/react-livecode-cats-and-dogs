import React from 'react';

const AnimalCard = (props) => {
    return(
        <div className="animalCard">
            <div className='animalImage'>
                <img src={props.imgUrl} alt="animal-img"/>
            </div>
            <p>{props.name}</p>
        </div>
    )
}

export default AnimalCard;