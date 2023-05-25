import { StatisticItem, StatisticTotal, StatisticPercentage } from './styled';
import PropTypes from 'prop-types';

export const StatisticsList = ({
  good,
  neutral,
  bad,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) => (
  <>
    <StatisticItem>good: {good}</StatisticItem>
    <StatisticItem>neutral: {neutral}</StatisticItem>
    <StatisticItem>bad: {bad}</StatisticItem>
    <StatisticTotal>Total: {countTotalFeedback()}</StatisticTotal>
    <StatisticPercentage>
      Positive feedback: {countPositiveFeedbackPercentage()}%
    </StatisticPercentage>
  </>
);

StatisticsList.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  countTotalFeedback: PropTypes.func.isRequired,
  countPositiveFeedbackPercentage: PropTypes.func.isRequired,
};
