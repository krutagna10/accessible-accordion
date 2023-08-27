import "./Panel.css";

function Panel({ panel, activeIndex, onActiveIndexChange }) {
  return (
    <div
      className={`accordion__panel ${panel.id === activeIndex ? "active" : ""}`}
      onClick={() => {
        onActiveIndexChange(panel.id);
      }}
    >
      <h2 id={`panel-${panel.id}-heading`}>
        <button
          className="accordion__btn"
          aria-controls={`panel-${panel.id}-content`}
          aria-expanded={panel.id === activeIndex}
        >
          <span className="accordion__title">{panel.title}</span>
          <svg aria-hidden="true" className="accordion__icon">
            <use xlinkHref={panel.icon}></use>
          </svg>
        </button>
      </h2>
      <div
        id={`panel-${panel.id}-content`}
        className="accordion__content"
        aria-labelledby={`panel-${panel.id}-heading`}
        aria-hidden={panel.id === activeIndex}
        role="region"
      >
        <p className="accordion__description">{panel.description}</p>
        <img className="accordion__image" src={panel.image} alt={panel.alt} />
      </div>
    </div>
  );
}

export default Panel;
