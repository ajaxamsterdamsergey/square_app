import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalElem } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ onClose, idImage, items }) {
  useEffect(() => {
    const handleEcsapeKey = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEcsapeKey);

    return () => {
      document.removeEventListener('keydown', handleEcsapeKey);
    };
  }, [onClose]);

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };
  const largeImage = items.find(item => {
    if (item.id === Number(idImage)) {
      return item.largeImageURL;
    } else {
      return null;
    }
  });
  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ModalElem>
        <img src={largeImage.largeImageURL} alt={largeImage.tags} width="900" />
      </ModalElem>
    </Overlay>,
    modalRoot
  );
}

Modal.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ).isRequired,
  onClose: PropTypes.func,
  idImage: PropTypes.string.isRequired,
};
