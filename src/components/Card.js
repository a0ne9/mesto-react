import React from "react";


function Card(props) {

    function handleClick() {
        props.onCardClick(props.card);
        console.log(props.card)
    }

    return(
        <div className="cards__list-item">
            <button className="cards__delete-button" type="button"></button>
            <img className="cards__image" alt=" " src={props.card.link} onClick={handleClick}/>
            <div className="cards__caption">
                <h2 className="cards__title">{props.card.name}</h2>
                <div className="cards__like-container">
                    <button className="cards__like-button" type="button"></button>
                    <span className="cards__like-counter">{props.card.likes.length}</span>
                </div>
            </div>
        </div>
    )
}

export default Card