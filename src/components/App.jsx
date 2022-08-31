import React, { Component } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { injectStyle } from 'react-toastify/dist/inject-style';
import { ToastContainer, toast } from 'react-toastify';
import SearchBar from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import Modal from './Modal/Modal';

import { Box } from 'components/Box';
import { GlobalStyle } from './GlobalStyle';
import * as API from '../services/api';

if (typeof window !== 'undefined') {
  injectStyle();
}

export default class App extends Component {
  state = {
    items: null,
    query: null,
    page: 1,
    isLoad: false,
    showModal: false,
    imageId: null,
  };
  componentDidUpdate(prevProps, prevState) {
    const { page, query, items } = this.state;
    if (prevState.page !== page || prevState.query !== query) {
      if (query !== false) {
        this.getImages(query, page);
      }
    }
    if (prevState.items !== items && items.length > 12) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }
  getImages = (query, page) => {
    this.setState({ isLoad: true });
    page = this.state.page;

    API.getImages(query, page)
      .then(res =>
        //console.log(res)
        this.setState(prevState => {
          return {
            items: [...prevState.items, ...res.hits],
            query: query,
          };
        })
      )
      .catch(error => {
        const mess = error.message;
        return this.notify(mess);
      })
      .finally(() => {
        this.setState({ isLoad: false });
      });
  };
  handleSubmit = (values, actions) => {
    if (this.state.query === values.query) {
      return;
    }
    const query = values.query;
    if (query === '') {
      return;
    } else {
      this.setState({
        items: [],
        page: 1,
        query: query,
      });
      actions.resetForm();
    }
  };
  notify = mess =>
    toast.error(`Whoops, something went wrong:${mess}`, {
      // transition: bounce,
      theme: 'colored',
    });
  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };
  toggleModal = e => {
    if (this.state.imageId === null) {
      const { id } = e.target;
      this.setState(({ showModal }) => ({
        showModal: !showModal,
        imageId: id,
      }));
    } else {
      this.setState(({ showModal }) => ({
        showModal: !showModal,
        imageId: null,
      }));
    }
  };
  render() {
    const { items, isLoad, showModal, imageId } = this.state;
    return (
      <Box>
        {showModal && (
          <Modal onClose={this.toggleModal} items={items} idImage={imageId} />
        )}
        <SearchBar onSubmit={this.handleSubmit} />
        {items && (
          <Box minHeight={800}>
            <ImageGallery imagesList={items} onClick={this.toggleModal} />
            {isLoad === true && <Loader />}
            {items.length > 0 && (
              <Button onClick={this.loadMore} children={'Load more...'} />
            )}
            <ToastContainer autoClose={5000} />
          </Box>
        )}
        <GlobalStyle />
      </Box>
    );
  }
}
