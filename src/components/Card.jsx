import { imagesMap } from "../data/images";
import "../css/card.css";

export default function Card({ image, title, date, stats, footer }) {
  const { likesIcon, likes, commentsIcon, comments } = stats;

  return (
    <article className="card">
      <img className="card__image" src={imagesMap[image]} alt={title} />

      <div className="card__content">
        <div className="card__header">
          <span className="card__title">{title}</span>
          <span className="card__date">{date}</span>
        </div>

        <div className="card__stats">
          <div className="card__stat">
            <img src={imagesMap[likesIcon]} alt="likes" />
            <span>{likes.primary}</span>
          </div>

          <div className="card__stat">
            <img src={imagesMap[commentsIcon]} alt="comments" />
            <span>{comments.primary}</span>
          </div>
        </div>

        <div className="card__stats">
          <div className="card__stat">
            <img src={imagesMap[likesIcon]} alt="likes" />
            <span>{likes.secondary}</span>
          </div>

          <div className="card__stat">
            <img src={imagesMap[commentsIcon]} alt="comments" />
            <span>{comments.secondary}</span>
          </div>
        </div>

        {footer && (
          <div className="card__footer">
            <span className="card__footer-label">{footer.label}</span>
            <span className="card__footer-date">{footer.date}</span>
          </div>
        )}
      </div>
    </article>
  );
}
