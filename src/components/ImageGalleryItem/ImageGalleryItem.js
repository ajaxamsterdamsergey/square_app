import PropTypes from 'prop-types';
import { Item, List, Image } from './ImageGalleryItem.styled';
export const ImageGalleryItem = ({ imagesList, onClick }) => {
  const ImagesItem = (
    <List>
      {imagesList.map(elData => (
        <Item key={elData.id}>
          <Image
            onClick={onClick}
            id={elData.id}
            src={elData.webformatURL}
            alt={elData.tags}
          />
        </Item>
      ))}
    </List>
  );
  return ImagesItem;
};
ImageGalleryItem.propTypes = {
  imagesList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ).isRequired,
};
