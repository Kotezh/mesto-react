import React from "react";
import { useState, useEffect } from "react";
import api from "../utils/api";
import Card from "./Card";
import avatar from "../blocks/profile/__avatar/edit-avatar.svg";

function Main(props) {
  const [userName, setUserName] = useState("Жак-Ив Кусто");
  const [userDescription, setUserDescription] = useState(
    "Исследователь океана"
  );
  const [userAvatar, setUserAvatar] = useState(avatar);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([data, initialCards]) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
        /*_id: data._id*/
        setCards(initialCards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__info">
          <div className="profile__avatar" onClick={props.onEditAvatar}>
            <img src={userAvatar} className="avatar" alt="Жак-Ив Кусто" />
          </div>
          <div className="profile__text">
            <div className="profile__name-wrapper">
              <h1 className="profile__name">{userName}</h1>
              <button
                className="profile__btn-edit"
                onClick={props.onEditProfile}
                type="button"
                aria-label="Edit"
              ></button>
            </div>
            <p className="profile__job">{userDescription}</p>
          </div>
        </div>
        <button
          className="profile__btn-add"
          onClick={props.onAddPlace}
          type="button"
          aria-label="Add"
        ></button>
      </section>
      <section className="elements">
        <ul className="elements__list">
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              onConfirm={props.onConfirm}
              onCardClick={props.onCardClick}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
