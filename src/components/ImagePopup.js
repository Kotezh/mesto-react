function ImagePopup(props) {
  return (
    props.card && (
      <section
        className={`popup popup_type_image ${props.card ? "popup_opened" : ""}`}
      >
        <div className="popup__image-wrapper">
          <figure className="popup__figure">
            <img
              className="popup__image"
              src={props.card.link}
              alt={props.card.name}
            />
            <figcaption className="popup__image-caption">
              {props.card.name}
            </figcaption>
          </figure>
          <button
            type="reset"
            aria-label="Close"
            className="popup__close popup__close_type_image"
            onClick={props.onClose}
          ></button>
        </div>
      </section>
    )
  );
}

export default ImagePopup;
