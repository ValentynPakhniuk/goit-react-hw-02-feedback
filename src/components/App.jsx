import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Component } from 'react';
import { Container } from './Container.styled';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handelClick = btnName =>
    this.setState(prevState => ({
      [btnName]: prevState[btnName] + 1,
    }));

  render() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const positivePercentage = Math.round(
      (good / (good + neutral + bad)) * 100
    );

    const stateNames = Object.keys(this.state);

    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={stateNames}
            handelClick={this.handelClick}
          ></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={total}
            positivePercentage={positivePercentage}
          ></Statistics>
        </Section>
      </Container>
    );
  }
}
