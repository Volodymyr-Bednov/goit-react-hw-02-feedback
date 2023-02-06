import PropTypes from 'prop-types';
import css from './Feedback.module.css';
export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div>
      <div className={css.grade} onClick={onLeaveFeedback}>
        <button className={css.btn} type="button" value="good">
          Good
        </button>

        <button className={css.btn} type="button" value="neutral">
          Neutral
        </button>

        <button className={css.btn} type="button" value="bad">
          Bad
        </button>
      </div>
    </div>
  );
};

FeedbackOptions.protoTypes = {
  onLeaveFeedback: PropTypes.func,
};
