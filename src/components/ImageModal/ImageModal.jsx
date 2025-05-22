import Modal from "react-modal";
import css from "./ImageModal.module.css";

export const ImageModal = ({ isOpen, onRequestClose, image }) => {
  if (!image) return null;
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={css.modal}
      overlayClassName={css.overlay}
      contentLabel="Image modal"
    >
      <img src={image.urls.regular} alt={image.alt_description} />
      <button onClick={onRequestClose}>Close</button>
    </Modal>
  );
};

export default ImageModal;
