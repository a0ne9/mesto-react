import PopupWithForm from "./PopupWithForm";
import React from "react";

function AddPlacePopup(props) {
  const nameRef = React.useRef();
  const linkRef = React.useRef();

  function handleSubmit() {
    props.onAddPlace({
      name: nameRef.current.value,
      link: linkRef.current.value,
    });
  }

  return (
    <PopupWithForm
      name="card"
      title="Новое место"
      isOpen={props.isOpen}
      onClose={props.onClose}
      buttonTitle="Создать"
      onSubmit={handleSubmit}
    >
      <input
        name="name"
        type="text"
        className="popup__input"
        placeholder="Название"
        id="title-field"
        minLength="2"
        maxLength="30"
        ref={nameRef}
        required
      />
      <span className="popup__input-error title-field-error"></span>
      <input
        name="link"
        type="url"
        className="popup__input"
        placeholder="Ссылка на картинку"
        id="link-field"
        ref={linkRef}
        required
      />
      <span className="popup__input-error link-field-error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
