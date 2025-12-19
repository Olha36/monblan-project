import { imagesMap } from "../data/images";
import "../css/card.css";
import "../css/card-column.css";

export default function CardBase({
  image,
  title,
  date,
  stats,
  footer,
  variant = "grid",
}) {
  const { likesIcon, likes, commentsIcon, comments } = stats;

  const rootClass = variant === "grid" ? "card" : "card-column";
  const contentClass =
    variant === "grid" ? "card__content" : "card-column__main";
  const secondaryClass = variant === "column" ? "card-column__secondary" : null;
  const footerClass =
    variant === "grid" ? "card__footer" : "card-column__footer";

  return (
    <article className={rootClass}>
      <img
        className={variant === "grid" ? "card__image" : "card-column__image"}
        src={imagesMap[image]}
        alt={title}
      />

      <div className={contentClass}>
        <div className={variant === "grid" ? "card__header" : null}>
          <span
            className={
              variant === "grid" ? "card__title" : "card-column__title"
            }
          >
            {title}
          </span>
          {variant === "grid" && <span className="card__date">{date}</span>}
        </div>

        <div
          className={variant === "grid" ? "card__stats" : "card-column__stats"}
        >
          <div
            className={variant === "grid" ? "card__stat" : "card-column__stat"}
          >
            <img src={imagesMap[likesIcon]} alt="likes" />
            <span>{likes.primary}</span>
          </div>
          <div
            className={variant === "grid" ? "card__stat" : "card-column__stat"}
          >
            <img src={imagesMap[commentsIcon]} alt="comments" />
            <span>{comments.primary}</span>
          </div>
        </div>
      </div>

      {variant === "column" && (
        <div className={secondaryClass}>
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
      )}

      {footer && (
        <div className={footerClass}>
          <span
            className={
              variant === "grid"
                ? "card__footer-label"
                : "card-column__footer-label"
            }
          >
            {footer.label}
          </span>
          <span
            className={
              variant === "grid"
                ? "card__footer-date"
                : "card-column__footer-date"
            }
          >
            {footer.date}
          </span>
        </div>
      )}
    </article>
  );
}
