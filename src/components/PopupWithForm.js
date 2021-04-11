function PopupWithForm(props) {
  return (
    <section
      className={`popup popup_type_${props.name} ${
        props.isOpen ? "popup_opened" : ""
      }`}
    >
      <div className="popup__container">
        <h2 className="popup__title">{props.title}</h2>
        <button
          type="reset"
          aria-label="Close"
          className="popup__close popup__close_type_edit-profile"
          onClick={props.onClose}
        ></button>
        <form
          noValidate
          className={`popup__form popup__form_type_${props.name}`}
          name="edit-form"
          action="#"
          method="post"
        >
          {props.children}
          <button
            name="submit"
            type="submit"
            className="popup__btn-submit"
            value="Сохранить"
          >
            {props.btnName}
          </button>
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;
