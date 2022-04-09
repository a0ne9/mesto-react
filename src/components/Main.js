import React from "react";
import { Api } from "../utils/Api";
import Card from "./Card";

function Main(props) {
  const [userName, setUserName] = React.useState(" ");
  const [userDescription, setUserDescription] = React.useState(" ");
  const [userAvatar, setUserAvatar] = React.useState(" ");
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Api.getProfile()
      .then((res) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  React.useEffect(() => {
    Api.getInitialCards()
      .then((res) => {
        setCards(res);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__image-container">
          <img
            className="profile__image"
            src={userAvatar}
            alt="Аватарка"
            onClick={props.onEditAvatar}
          />
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button
            className="profile__edit-button"
            type="button"
            onClick={props.onEditProfile}
          ></button>
          <p className="prsofile__caption">{userDescription}</p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          onClick={props.onAddPlace}
        ></button>
      </section>
      <section className="cards">
        <div className="cards__list">
          {cards.map((card) => (
            <Card
              name={card.name}
              link={card.link}
              likes={card.likes}
              onCardClick={props.onCardClick}
              card={card}
              key={card._id}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
