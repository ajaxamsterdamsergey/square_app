import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ imagesList, onClick }) => {
  const Gallery = (
    <ImageGalleryItem onClick={onClick} imagesList={imagesList} />
  );
  return Gallery;
};
