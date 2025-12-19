import cards from "../column-data.json";
import CardBase from "./CardBase";
import "../css/card-column.css";

export default function CardsColumn() {
  return (
    <div className="cards-column">
      {cards.map((card) => (
        <CardBase key={card.id} {...card} variant="column" />
      ))}
      <div className="button-wrapper">
        <button>Load more</button>
      </div>
    </div>
  );
}
