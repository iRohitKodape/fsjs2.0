import React from "react";

const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [readMore, SetReadMore] = React.useState(false);

  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {readMore ? info : `${info.substring(0, 100)}...`}
          <button
            type="button"
            onClick={() => SetReadMore(!readMore)}
            className="info-btn"
          >
            {readMore ? "less" : "more"}
          </button>
        </p>
        <button
          type="button"
          className="btn btn-block delete-btn"
          onClick={() => removeTour(id)}
        >
          Remove
        </button>
      </div>
    </article>
  );
};

export default Tour;
