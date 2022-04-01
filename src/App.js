
import './App.css';
import Header from './components/Header';
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
      <body className="page">
      < Header/>
      < Main />
      < Footer />
      <template id="tmpl">
        <div className="cards__list-item">
          <button className="cards__delete-button" type="button"></button>
          <img className="cards__image" alt=" " src=" "/>
            <div className="cards__caption">
              <h2 className="cards__title"></h2>
              <div className="cards__like-container">
                <button className="cards__like-button" type="button"></button>
                <span className="cards__like-counter"></span>
              </div>
            </div>
        </div>
      </template>
      <div className="popup popup_type_profile">
        <div className="popup__container">
          <h2 className="popup__title">Редактировать профиль</h2>
          <form className="popup__form popup__form_type_profile" name="profile-changer" noValidate>
            <input name="name" type="text" className="popup__input" placeholder="Имя" value=" " id="name-field"
                   minLength="2" maxLength="40" required/>
              <span className="popup__input-error name-field-error"></span>
              <input name="caption" type="text" className="popup__input" placeholder="О себе" value=" " id="job-field"
                     minLength="2" maxLength="200" required/>
                <span className="popup__input-error job-field-error"></span>
                <button type="submit" className="popup__button">Сохранить</button>
                <button className="popup__close-button close-button" type="button"></button>
          </form>
        </div>
      </div>
      <div className="popup popup_type_card">
        <div className="popup__container">
          <h2 className="popup__title">Новое место</h2>
          <form className="popup__form popup__form_type_card" name="card-adder" noValidate>
            <input name="name" type="text" className="popup__input" placeholder="Название" value="" id="title-field"
                   minLength="2" maxLength="30" required/>
              <span className="popup__input-error title-field-error"></span>
              <input name="link" type="url" className="popup__input" placeholder="Ссылка на картинку" value=""
                     id="link-field" required/>
                <span className="popup__input-error link-field-error"></span>
                <button type="submit" className="popup__button" id="card-button">Создать</button>
                <button className="popup__card-close-button close-button" type="button"></button>
          </form>
        </div>
      </div>
      <div className="popup popup_type_delete">
        <div className="popup__container">
          <h2 className="popup__title">Вы уверены?</h2>
          <form className="popup__form popup__form_type_card" name="card-deleter" noValidate>
            <button type="submit" className="popup__button popup__delete-button">Да</button>
            <button className="popup__delete-close-button close-button" type="button"></button>
          </form>
        </div>
      </div>
      <div className="popup popup_type_image">
        <div className="popup__image-container">
          <img className="popup__img" alt=" " src=" "/>
            <h2 className="popup__caption"></h2>
            <button type="button" className="popup__image-close-button close-button"></button>
        </div>
      </div>
      <div className="popup popup_type_avatar">
        <div className="popup__container">
          <h2 className="popup__title">Обновить аватар</h2>
          <form className="popup__form popup__form_type_avatar" name="avatar-adder" noValidate>
            <input name="avatar" type="url" className="popup__input" placeholder="Ссылка на картинку" value=""
                   id="avatar-field" required/>
              <span className="popup__input-error avatar-field-error"></span>
              <button type="submit" className="popup__button">Сохранить</button>
              <button className="popup__avatar-close-button close-button" type="button"></button>
          </form>
        </div>
      </div>
      </body>
  );
}

export default App;
