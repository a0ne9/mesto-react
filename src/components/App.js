import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, toggleEditProfile] = React.useState(false);
  const [isAddPlacePopupOpen, toggleAddPlace] = React.useState(false);
  const [isEditAvatarPopupOpen, toggleEditAvatar] = React.useState(false);
  const [selectedCard, setCard] = React.useState({});

  function openProfilePopup() {
    toggleEditProfile(true);
  }

  function openPlacePopup() {
    toggleAddPlace(true);
  }

  function openAvatarPopup() {
    toggleEditAvatar(true);
  }

  function handleCardClick(card) {
    setCard(card);
  }

  function closeAllPopups() {
    toggleEditProfile(false);
    toggleAddPlace(false);
    toggleEditAvatar(false);
    setCard({});
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={openProfilePopup}
        onEditAvatar={openAvatarPopup}
        onAddPlace={openPlacePopup}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        name="profile"
        title="Редактировать профиль"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        buttonTitle="Сохранить"
      >

        <input
          name="name"
          type="text"
          className="popup__input"
          placeholder="Имя"
          id="name-field"
          minLength="2"
          maxLength="40"
          required
        />
        <span className="popup__input-error name-field-error"></span>
        <input
          name="caption"
          type="text"
          className="popup__input"
          placeholder="О себе"
          id="job-field"
          minLength="2"
          maxLength="200"
          required
        />
        <span className="popup__input-error job-field-error"></span>
      </PopupWithForm>
      <PopupWithForm
        name="card"
        title="Новое место"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        buttonTitle="Создать"
      >
        <input
          name="name"
          type="text"
          className="popup__input"
          placeholder="Название"
          id="title-field"
          minLength="2"
          maxLength="30"
          required
        />
        <span className="popup__input-error title-field-error"></span>
        <input
          name="link"
          type="url"
          className="popup__input"
          placeholder="Ссылка на картинку"
          id="link-field"
          required
        />
        <span className="popup__input-error link-field-error"></span>
      </PopupWithForm>
      <PopupWithForm
        name="delete"
        title="Вы уверены?"
        onClose={closeAllPopups}
        buttonTitle="Да"
      >
      </PopupWithForm>
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      <PopupWithForm
        name="avatar"
        title="Обновить аватар"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        buttonTitle="Сохранить"
      >
        <input
          name="avatar"
          type="url"
          className="popup__input"
          placeholder="Ссылка на картинку"
          id="avatar-field"
          required
        />
        <span className="popup__input-error avatar-field-error"></span>
      </PopupWithForm>
    </div>
  );
}

export default App;
