import React, { Component } from 'react';
import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';
import Section from 'components/Section';
import Notification from 'components/Notification';
import { Container } from './App.styled';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  changeFeedback = event => {
    event.preventDefault();

    const key = event.target.name;

    this.setState(prevState => {
      return {
        [key]: (prevState[key] += 1),
      };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  };

  getPositivePercentage = () => {
    const total = this.countTotalFeedback();

    return Math.round((this.state.good / total) * 100);
  };
  render() {
    const total = this.countTotalFeedback();
    const positivePercentage = this.getPositivePercentage();

    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.changeFeedback}
          />

          {total > 0 && (
            <Statistics
              statistics={this.state}
              total={total}
              positivePercentage={positivePercentage}
            />
          )}

          {!total && <Notification message="There is no feedback" />}
        </Section>
      </Container>
    );
  }
}
