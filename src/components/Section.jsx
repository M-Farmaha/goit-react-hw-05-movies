import { SectionWrap, Title } from './styled';
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => (
  <SectionWrap>
    <Title>{title}</Title>
    {children}
  </SectionWrap>
);

Section.propTypes = {
  title: PropTypes.string,
};
