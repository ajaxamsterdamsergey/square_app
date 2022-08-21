import React, { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';
import { Box } from 'components/Box';
import { GlobalStyle } from './GlobalStyle';

export default class App extends Component {
  static defaultProps = {
    title: 'Please leave feadback',
    message: 'There is no feedback',
  };
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onLeaveFeedback = event => {
    const name = event.target.name;
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };
  countTotalFeedback = () => {
    return Object.values(this.state).reduce((total, item) => total + item, 0);
  };
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return Math.round((good / total) * 100);
  };

  render() {
    const total = this.countTotalFeedback();
    const positivCountFeedBack = this.countPositiveFeedbackPercentage();
    return (
      <Box
        width={284}
        m="auto"
        mt={30}
        boxShadow="0 2px 5px rgba(0,0,0,0.2), 0 4px 6px rgba(0,0,0,0.2)"
        borderRadius="2px"
      >
        <Box width={254} m="auto">
          <Section title={this.props.title}>
            <FeedbackOptions
              onLeaveFeedback={this.onLeaveFeedback}
              onLeave={this.state}
            />
            {total > 0 ? (
              <Statistics
                onLeave={this.state}
                total={total}
                positivCountFeedBack={positivCountFeedBack}
              />
            ) : (
              <Notification message={this.props.message} />
            )}
          </Section>
          <GlobalStyle />
        </Box>
      </Box>
    );
  }
}
