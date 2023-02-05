import { Component } from 'react';
import css from './Feedback.module.css';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercent: 0,
    isVisible: true,
  };

  handlerGrade = evt => {
    if (evt.target.type !== 'button') return;
    const selectGrade = evt.target.value;
    this.setState(prevValue => {
      return {
        [selectGrade]: prevValue[selectGrade] + 1,
      };
    });
    this.countTotalFeedback();
  };

  countTotalFeedback = () => {
    this.setState(prevValue => {
      const { good, neutral, bad } = prevValue;
      return { total: good + neutral + bad };
    });
    this.countPositiveFeedbackPercentage();
  };

  countPositiveFeedbackPercentage() {
    this.setState(prevValue => {
      const { good, total } = prevValue;
      return { positivePercent: Math.round((good * 100) / total) };
    });
  }

  render() {
    return (
      <div>
        <h2>Please leave feedback</h2>

        <div className={css.grade} onClick={this.handlerGrade}>
          <button type="button" value="good">
            Good
          </button>

          <button type="button" value="neutral">
            Neutral
          </button>

          <button type="button" value="bad">
            Bad
          </button>
        </div>

        <div>
          <ul>
            <li>Good: {this.state.good}</li>
            <li>Neutral: {this.state.neutral}</li>
            <li>Bad: {this.state.bad}</li>
            <li>Total: {this.state.total}</li>
            <li>Positive feedback: {this.state.positivePercent}%</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Feedback;
