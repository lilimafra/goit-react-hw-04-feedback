import PropTypes from 'prop-types';

import { ButtonList, BtnFeedback } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonList>
      {options.map(option => {
        return (
          <li key={option}>
            <BtnFeedback onClick={() => onLeaveFeedback(option)}>
              {option}
            </BtnFeedback>
          </li>
        );
      })}
    </ButtonList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
