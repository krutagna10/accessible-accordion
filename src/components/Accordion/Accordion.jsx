import panels from "../../data/data.js";
import boatImage from "../../assets/boat.webp";
import Panel from "../Panel/Panel.jsx";
import "./Accordion.css";

function Accordion() {
  return (
    <section className="accordion-section">
      <div className="accordion">
        {panels.map((panel) => (
          <Panel key={panel.id} {...panel} />
        ))}
      </div>
    </section>
  );
}

export default Accordion;
