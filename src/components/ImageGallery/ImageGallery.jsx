import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ images = [], onImageClick }) {
  if (images.length === 0) return null;
  return (
    <ul className={css.ul}>
      {images.map((image) => (
        <li key={image.id} className={css.li}>
          <ImageCard image={image} onClick={onImageClick} />
        </li>
      ))}
    </ul>
  );
}
