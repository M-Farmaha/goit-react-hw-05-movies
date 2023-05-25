import { useState } from 'react';
import { Section } from './Section';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';
import { StatisticsList } from './StatisticsList';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = e => {
    const target = e.currentTarget.textContent;
    if (target === 'good') setGood(prev => prev + 1);
    else if (target === 'neutral') setNeutral(prev => prev + 1);
    else if (target === 'bad') setBad(prev => prev + 1);
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    if (countTotalFeedback() === 0) {
      return 0;
    }
    return ((good / countTotalFeedback()) * 100).toFixed(0);
  };

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions handleClick={handleClick} />
      <Statistics total={countTotalFeedback}>
        <StatisticsList
          {...{
            good,
            neutral,
            bad,
            countTotalFeedback,
            countPositiveFeedbackPercentage,
          }}
        />
      </Statistics>
    </Section>
  );
};
