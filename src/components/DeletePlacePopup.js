import PopupWithForm from "./PopupWithForm";
import React from "react";

function DeletePlacePopup(props) {

  function handleSubmit() {
    props.onCardDelete()
  }
  return (
    <PopupWithForm
      name="delete"
      title="Вы уверены?"
      buttonTitle="Да"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    ></PopupWithForm>
  );
}

export default DeletePlacePopup