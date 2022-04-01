function Main() {
    return(
        <main className="content">
            <section className="profile">
                <div className="profile__image-container">
                    <img className="profile__image" src="" alt="Аватарка"/>
                </div>
                <div className="profile__info">
                    <h1 className="profile__name"></h1>
                    <button className="profile__edit-button" type="button"></button>
                    <p className="profile__caption"></p>
                </div>
                <button className="profile__add-button" type="button"></button>
            </section>
            <section className="cards">
                <div className="cards__list">
                </div>
            </section>
        </main>
    )
};

export default Main;