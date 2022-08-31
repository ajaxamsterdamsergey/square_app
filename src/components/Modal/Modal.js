import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalElem } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };
  handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };
  render() {
    const { items, idImage } = this.props;
    const largeImage = items.find(item => {
      if (item.id === Number(idImage)) {
        return item.largeImageURL;
      } else {
        return null;
      }
    });
    return createPortal(
      <Overlay onClick={this.handleBackdropClick}>
        <ModalElem>
          <img
            src={largeImage.largeImageURL}
            alt={largeImage.tags}
            width="900"
          />
        </ModalElem>
      </Overlay>,
      modalRoot
    );
  }
}
