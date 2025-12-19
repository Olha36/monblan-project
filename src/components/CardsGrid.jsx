import cards from "../row-data.json";
import Card from "./Card";
import '../css/cards-grid.css'

export default function CardsGrid() {
  return (
    <div className="cards-grid">
      {cards.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </div>
  );
}
