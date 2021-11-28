import PropTypes from 'prop-types';

function Section({ title, children }) {
  return (
    <>
      {title && (
        <div>
          <h1>{title}</h1>
          {children}
        </div>
      )}
    </>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired,
};

export default Section;
