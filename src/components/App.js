import React from "react";
import { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isConfirmPopupOpen, setConfirmPopupOpen] = useState(false);

  const handleEditAvatarClick = () => {
    setEditAvatarPopupOpen(true);
  };

  const handleEditProfileClick = () => {
    setEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setAddPlacePopupOpen(true);
  };

  const handleConfirmClick = () => {
    setConfirmPopupOpen(true);
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const closeAllPopups = () => {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setConfirmPopupOpen(false);
    setSelectedCard(null);
  };

  return (
    <div className="page">
      <div className="page__container">
        <Header />

        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onConfirm={handleConfirmClick}
          onCardClick={handleCardClick}
          onClose={closeAllPopups}
        />

        <Footer />

        <ImagePopup onClose={closeAllPopups} card={selectedCard} />

        <PopupWithForm
          title="Редактировать профиль"
          name="edit-profile"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          btnName = "Сохранить"
        >
          <label className="popup__form-field">
            <input
              name="name"
              id="name"
              type="text"
              className="popup__input popup__input_type_name"
              required
              minLength="2"
              maxLength="40"
            />
            <span
              className="popup__error popup__error_visible"
              id="name-error"
            ></span>
          </label>
          <label className="popup__form-field">
            <input
              name="job"
              id="job"
              type="text"
              className="popup__input popup__input_type_job"
              required
              minLength="2"
              maxLength="200"
            />
            <span
              className="popup__error popup__error_visible"
              id="job-error"
            ></span>
          </label>
        </PopupWithForm>

        <PopupWithForm
          title="Новое место"
          name="add-place"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          btnName = "Создать"
        >
          <label className="popup__form-field">
            <input
              name="title"
              id="place-title"
              type="text"
              className="popup__input popup__input_type_place-title"
              placeholder="Название"
              required
              minLength="2"
              maxLength="30"
            />
            <span
              className="popup__error popup__error_visible"
              id="place-title-error"
            ></span>
          </label>
          <label className="popup__form-field">
            <input
              name="link"
              id="place-link"
              type="url"
              className="popup__input popup__input_type_place-link"
              placeholder="Ссылка на картинку"
              required
            />
            <span
              className="popup__error popup__error_visible"
              id="place-link-error"
            ></span>
          </label>
        </PopupWithForm>

        <PopupWithForm
          title="Обновить аватар"
          name="type_avatar"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          btnName = "Сохранить"
        >
          <label className="popup__form-field">
            <input
              name="link"
              id="avatar-link"
              type="url"
              className="popup__input popup__input_type_avatar"
              placeholder="Ссылка на картинку"
              required
            />
            <span
              className="popup__error popup__error_visible"
              id="avatar-link-error"
            ></span>
          </label>
        </PopupWithForm>

        <PopupWithForm
          title="Вы уверены?"
          name="type_confirm"
          isOpen={isConfirmPopupOpen}
          onClose={closeAllPopups}
          btnName = "Да"
        />
      </div>
    </div>
  );
}

export default App;
