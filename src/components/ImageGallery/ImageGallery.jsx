import css from "./ImageGallery.module.css";
export default function ImageGallery({ images = [] }) {
  return (
    <ul className={css.ul}>
      {images.map(({ id, alt_description, urls }) => (
        <li key={id} className={css.li}>
          <div className={css.image}>
            <img src={urls.small} alt={alt_description} />
          </div>
        </li>
      ))}
    </ul>
  );
}
