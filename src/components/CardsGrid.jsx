import cards from "../row-data.json";
import CardBase from "./CardBase";
import "../css/cards-grid.css";

export default function CardsGrid() {
  return (
    <div className="cards-grid">
      {cards.map((card) => (
        <CardBase key={card.id} {...card} variant="grid" />
      ))}
    </div>
  );
}
