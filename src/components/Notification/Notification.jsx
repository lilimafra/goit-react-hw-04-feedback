import { TextNotify } from './Notification.styled';
import PropTypes from 'prop-types'; // ES6

export const Notification = ({ message }) => {
  return <TextNotify>{message}</TextNotify>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
