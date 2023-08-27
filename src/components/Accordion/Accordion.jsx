import panels from "../../data/data.js";
import Panel from "../Panel/Panel.jsx";
import "./Accordion.css";
import { useState } from "react";

function Accordion() {
  const [activeIndex, setActiveIndex] = useState(1);

  function handleActiveIndexChange(index) {
    setActiveIndex(index);
  }

  return (
    <section className="accordion-section">
      <div className="accordion">
        <h1 className="visually-hidden">Accessible Accordion</h1>
        <div className="accordion__panels">
          {panels.map((panel) => (
            <Panel
              key={panel.id}
              activeIndex={activeIndex}
              onActiveIndexChange={handleActiveIndexChange}
              panel={panel}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Accordion;
