import { FeedbackOptionsList, Button } from './styled';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ handleClick }) => (
  <FeedbackOptionsList>
    <Button type="button" onClick={handleClick}>
      good
    </Button>
    <Button type="button" onClick={handleClick}>
      neutral
    </Button>
    <Button type="button" onClick={handleClick}>
      bad
    </Button>
  </FeedbackOptionsList>
);

FeedbackOptions.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
