import css from "./ImageGallery.module.css";
export default function ImageGallery({ images = [] }) {
  if (images.length === 0) return null;
  return (
    <ul className={css.ul}>
      {images.map(({ id, alt_description, urls }) => (
        // {images.map(({ image}) => ( li key={image.id} className={css.li}>
        //  <GalleryCard image={image}  />
        // </li>
        <li key={id} className={css.li}>
          <div className={css.image}>
            <img src={urls.small} alt={alt_description} />
          </div>
        </li>
      ))}
    </ul>
  );
}
