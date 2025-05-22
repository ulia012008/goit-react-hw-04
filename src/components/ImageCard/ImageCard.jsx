import css from "./ImageCard.module.css";
export default function ImageCard({ image, onClick }) {
  return (
    <div className={css.image}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        onClick={() => onClick(image)}
      />
    </div>
  );
}
