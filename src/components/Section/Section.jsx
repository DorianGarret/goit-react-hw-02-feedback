import PropTypes from 'prop-types';
import { Title } from './Section.styled';

function Section({ title, children }) {
  return (
    <>
      {title && (
        <>
          <Title>{title}</Title>
          {children}
        </>
      )}
    </>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired,
};

export default Section;
