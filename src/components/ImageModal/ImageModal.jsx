import React from "react";
import Modal from "react-modal";
import css from "./ImageModal.module.css";

const ImageModal = ({ isOpen, onRequestClose, image }) => {
  if (!image) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={css.modal}
      overlayClassName={css.overlay}
      contentLabel="Image modal"
    >
      <button
        onClick={onRequestClose}
        className={css.closeButton}
        aria-label="Close modal"
      >
        ✕
      </button>
      <img
        className={css.img}
        src={image.urls.regular}
        alt={image.alt_description || "Enlarged image"}
      />
    </Modal>
  );
};

export default ImageModal;
