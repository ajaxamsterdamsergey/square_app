import { useState, useEffect } from 'react';
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

export default function App() {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState(null);
  const [page, setPage] = useState(1);
  const [isLoad, setIsLoad] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [imageId, setImageId] = useState(null);

  useEffect(() => {
    async function getImages(query, page) {
      if (query === null) {
        return;
      }
      setIsLoad(true);
      try {
        const res = await API.getImages(query, page);
        setItems(prevState => [...prevState, ...res.hits]);
        setQuery(query);

        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      } catch (error) {
        const mess = error.message;
        return notify(mess);
      } finally {
        setIsLoad(false);
      }
    }
    getImages(query, page);
  }, [query, page]);

  const handleSubmit = (values, actions) => {
    if (query === values.query) {
      return;
    }
    const querySubmit = values.query;
    if (querySubmit === '') {
      return;
    } else {
      setItems([]);
      setQuery(querySubmit);
      setPage(1);
      actions.resetForm();
    }
  };
  const notify = mess =>
    toast.error(`Whoops, something went wrong:${mess}`, {
      theme: 'colored',
    });
  const loadMore = () => {
    setPage(prevState => prevState + 1);
  };
  const toggleModal = e => {
    if (imageId === null) {
      const { id } = e.target;
      setShowModal(!showModal);
      setImageId(id);
    } else {
      setShowModal(!showModal);
      setImageId(null);
    }
  };
  return (
    <Box>
      {showModal && (
        <Modal onClose={toggleModal} items={items} idImage={imageId} />
      )}
      <SearchBar onSubmit={handleSubmit} />
      {items.length > 0 && (
        <Box minHeight={800}>
          <ImageGallery imagesList={items} onClick={toggleModal} />
          {isLoad && <Loader />}
          {items.length > 0 && (
            <Button onClick={loadMore} children={'Load more...'} />
          )}
          <ToastContainer autoClose={5000} />
        </Box>
      )}
      <GlobalStyle />
    </Box>
  );
}
