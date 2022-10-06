//import PropTypes from 'prop-types';
import { Title } from './InfoMessage.styled';
export const InfoMessage = () => {
  const message = (
    <Title>
      Для того чтобы запустить игру необходимо нажать кнопку "start", чтобы
      остановить кнопку "pause"
    </Title>
  );
  return message;
};
