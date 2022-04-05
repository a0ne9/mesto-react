function PopupWithForm(props) {
    return(
        <div className={`popup popup_type_${props.name} ${props.isOpen && props.onClose && "popup_opened"}`} >
            <div className="popup__container">
                <h2 className="popup__title">{props.title}</h2>
                <form className={`popup__form popup__form_type_${props.name}`} name={`${props.name}-changer`} noValidate>
                    {props.children}
                </form>
            </div>
        </div>
    )
}

export default PopupWithForm;