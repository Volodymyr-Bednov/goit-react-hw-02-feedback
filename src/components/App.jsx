import { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import css from './App.module.css';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
    isVisible: false,
  };

  LeaveFeedback = evt => {
    if (evt.target.type !== 'button') return;
    const selectGrade = evt.target.value;
    this.setState(prevValue => {
      return {
        [selectGrade]: prevValue[selectGrade] + 1,
        isVisible: true,
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
      return { positivePercentage: Math.round((good * 100) / total) };
    });
  }

  render() {
    return (
      <div className={css.wrap}>
        <Section
          title={'Please leave feedback'}
          children={<FeedbackOptions onLeaveFeedback={this.LeaveFeedback} />}
        />
        {/* <FeedbackOptions onLeaveFeedback={this.LeaveFeedback} /> */}

        <Section
          title={'Statistics'}
          children={
            this.state.isVisible ? (
              <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={this.state.total}
                positivePercentage={this.state.positivePercentage}
              />
            ) : (
              <Notification message={'There is no feedback'} />
            )
          }
        />
      </div>
    );
  }
}
