import { imagesMap } from "../data/images";
import "../css/card-column.css";

export default function CardColumn({ image, title, date, stats, footer }) {
  const { likesIcon, likes, commentsIcon, comments } = stats;

  return (
    <article className="card-column">
      <img className="card-column__image" src={imagesMap[image]} alt={title} />

      <div className="card-column__main">
        <span className="card-column__title">{title}</span>
        <div className="card-column__stats">
          <div className="card-column__stat">
            <img src={imagesMap[likesIcon]} alt="likes" />
            <span>{likes.primary}</span>
          </div>
          <div className="card-column__stat">
            <img src={imagesMap[commentsIcon]} alt="comments" />
            <span>{comments.primary}</span>
          </div>
        </div>
      </div>

      <div className="card-column__secondary">
        <span className="card-column__date">{date}</span>
        <div className="card-column__stats">
          <div className="card-column__stat">
            <img src={imagesMap[likesIcon]} alt="likes" />
            <span>{likes.secondary}</span>
          </div>
          <div className="card-column__stat">
            <img src={imagesMap[commentsIcon]} alt="comments" />
            <span>{comments.secondary}</span>
          </div>
        </div>
      </div>

      <div className="card-column__footer">
        <span className="card-column__footer-label">{footer.label}</span>
        <span className="card-column__footer-date">{footer.date}</span>
      </div>
    </article>
  );
}
