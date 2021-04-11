import React from "react";

function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <li className="element">
      <div className="element__image-wrapper">
        <a
          className="element__popup"
          href="#"
          target="_self"
          onClick={handleClick}
        >
          <img
            className="element__image"
            alt={props.card.alt}
            src={props.card.link}
          />
        </a>
      </div>
      <div className="element__field">
        <h2 className="element__title">{props.card.title}</h2>
        <div className="element__likes">
          <button
            type="button"
            aria-label="Like"
            className="heart element__heart"
          ></button>
          <span className="element__likes-number">
            {props.card.likes.length}
          </span>
        </div>
      </div>
      <button
        type="button"
        className="element__trash trash"
        onClick={props.onConfirm}
        aria-label="Trash"
      ></button>
    </li>
  );
}

export default Card;
