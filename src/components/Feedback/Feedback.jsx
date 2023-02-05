import { Component } from 'react';
import css from './Feedback.module.css';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handlerGrade = evt => {
    if (evt.target.type !== 'button') return;
    // console.log('fdffdfdf');
    // console.log(this);
    // console.dir(evt.target.value);
    const selectGrade = evt.target.value;

    this.setState(prevValue => {
      return {
        [selectGrade]: prevValue[selectGrade] + 1,
      };
    });
  };
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
          </ul>
        </div>
      </div>
    );
  }
}

export default Feedback;
