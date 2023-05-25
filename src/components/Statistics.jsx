import { StatisticTitle } from './styled';
import { Notification } from './Notification';
import PropTypes from 'prop-types';

export const Statistics = ({ total, children }) => (
  <>
    <StatisticTitle>Statistics</StatisticTitle>
    {total() === 0 ? <Notification message="There is no feedback" /> : children}
  </>
);

Statistics.propTypes = {
  total: PropTypes.func.isRequired,
};
