import PropTypes from 'prop-types';
import { ButtonLoad } from './Button.styled';
export const Button = ({ onClick, children }) => {
  const ImagesItem = <ButtonLoad onClick={onClick}>{children}</ButtonLoad>;
  return ImagesItem;
};
Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.string.isRequired,
};
