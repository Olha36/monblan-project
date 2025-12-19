import cards from "../column-data.json";
import CardColumn from "./Card2";



export default function CardsColumn() {
  return (
    <div className="cards-column">
      {cards.map((card) => (
        <CardColumn key={card.id} {...card} />
      ))}
      <div className="button-wrapper">
        <button>Load more</button>
      </div>
    </div>
  );
}
