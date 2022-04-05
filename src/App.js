import React from "react";
import './App.css';
import Header from './components/Header';
import Main from "./components/Main";
import Footer from "./components/Footer";
import PopupWithForm from "./components/PopupWithForm";
import ImagePopup from "./components/ImagePopup";

function App() {
    const [isEditProfilePopupOpen, toggleEditProfile] = React.useState(false);
    const [isAddPlacePopupOpen, toggleAddPlace] = React.useState(false);
    const [isEditAvatarPopupOpen, toggleEditAvatar] = React.useState(false);
    const [selectedCard, setCard] = React.useState({});

    function openProfilePopup() {
        toggleEditProfile(true)
    }

    function openPlacePopup() {
        toggleAddPlace(true)
    }

    function openAvatarPopup() {
        toggleEditAvatar(true)
    }

    function handleCardClick (card) {
        setCard(card)
    }

    function closeAllPopups() {
        toggleEditProfile(false)
        toggleAddPlace(false)
        toggleEditAvatar(false)
        setCard({})
    }

  return (
      <div className="page">
      < Header/>
      < Main onEditProfile={openProfilePopup} onEditAvatar={openAvatarPopup} onAddPlace={openPlacePopup} onCardClick={handleCardClick}/>
      < Footer />
      <PopupWithForm name="profile" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
            <input name="name" type="text" className="popup__input" placeholder="Имя"  id="name-field"
                   minLength="2" maxLength="40" required />
              <span className="popup__input-error name-field-error"></span>
              <input name="caption" type="text" className="popup__input" placeholder="О себе"  id="job-field"
                     minLength="2" maxLength="200" required/>
                <span className="popup__input-error job-field-error"></span>
                <button type="submit" className="popup__button">Сохранить</button>
                <button className="popup__close-button close-button" type="button" onClick={closeAllPopups}></button>
      </PopupWithForm>
      <PopupWithForm name="card" title="Новое место" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
            <input name="name" type="text" className="popup__input" placeholder="Название"  id="title-field"
                   minLength="2" maxLength="30" required/>
              <span className="popup__input-error title-field-error"></span>
              <input name="link" type="url" className="popup__input" placeholder="Ссылка на картинку"
                     id="link-field" required/>
                <span className="popup__input-error link-field-error"></span>
                <button type="submit" className="popup__button" id="card-button">Создать</button>
                <button className="popup__card-close-button close-button" type="button" onClick={closeAllPopups}></button>
      </PopupWithForm>
      <PopupWithForm name="delete" title="Вы уверены?" onClose={closeAllPopups}>
            <button type="submit" className="popup__button popup__delete-button">Да</button>
            <button className="popup__delete-close-button close-button" type="button" onClick={closeAllPopups}></button>
      </PopupWithForm>
      <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
      <PopupWithForm name="avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
            <input name="avatar" type="url" className="popup__input" placeholder="Ссылка на картинку"
                   id="avatar-field" required/>
              <span className="popup__input-error avatar-field-error"></span>
              <button type="submit" className="popup__button">Сохранить</button>
              <button className="popup__avatar-close-button close-button" type="button" onClick={closeAllPopups}></button>
      </PopupWithForm>
      </div>
  );
}

export default App;
