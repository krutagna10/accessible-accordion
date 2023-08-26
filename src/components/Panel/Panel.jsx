import "./Panel.css";

function Panel({ id, title, description, icon, image, alt }) {
  return (
    <div className="accordion__panel">
      <h2 id={`panel-${id}-heading`}>
        <button
          className="accordion__btn"
          aria-controls={`panel-${id}-content`}
          aria-expanded="true"
        >
          <span className="accordion-title">{title}</span>
          <svg aria-hidden="true" className="accordion__icon">
            <use xlinkHref={icon}></use>
          </svg>
        </button>
      </h2>
      <div
        id={`panel-${1}-content`}
        className="accordion__content"
        aria-labelledby={`panel-${id}-heading`}
        aria-hidden="false"
        role="region"
      >
        <p>{description}</p>
        <img className="accordion__image" src={image} alt={alt} />
      </div>
    </div>
  );
}

export default Panel;
