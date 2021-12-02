import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Title } from './Section.styled';

function Section({ title, children }) {
  return (
    <Fragment>
      {title && (
        <Fragment>
          <Title>{title}</Title>
          {children}
        </Fragment>
      )}
    </Fragment>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired,
};

export default Section;
