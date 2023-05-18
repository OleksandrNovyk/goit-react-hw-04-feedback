import PropTypes from 'prop-types';

import { BtnWrapper } from './FeedbackOptions.styled';
import { Feedbackbtn } from '../FeedbackBtn/FeedbackBtn';


export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <BtnWrapper>
      {options.map(option => {
        return (
          <li key={option}>
            <Feedbackbtn
              type="button"
              status={option}
              text={option}
              onClick={() => onLeaveFeedback(option)}
            >
              {option}
            </Feedbackbtn>
          </li>
        );
      })}
    </BtnWrapper>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
