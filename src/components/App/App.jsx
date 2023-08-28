import React, { useState } from 'react';

// import { Container } from './App.styled';
import { Section } from '../Section/Section';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Statistics } from '../Statistics/Statistics';
import { Notification } from '../Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = option => {
    switch (option) {
      case 'good':
        setGood(state => state + 1);
        break;

      case 'neutral':
        setNeutral(state => state + 1);
        break;

      case 'bad':
        setBad(state => state + 1);
        break;

      default:
        alert('something went wrong');
        break;
    }
  };

  const options = ['good', 'bad', 'neutral'];

  const totalFeedback = good + bad + neutral;

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / (good + neutral + bad)) * 100);
  };

  return (
    <div>
      <Section title={'Please leave your feedback'}>
        <FeedbackOptions
          options={options.map(option => {
            return option;
          })}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>

      <Section title={'Statistics'}>
        {good + neutral + bad > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          ></Statistics>
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Section>
    </div>
  );
};
