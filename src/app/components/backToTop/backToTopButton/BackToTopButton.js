import React, {PropTypes} from 'react';
import cx from 'classnames';

const BackToTopButton = ({onClick, children}) => {
  return (
      <button
        className={cx({
          'btn': true,
          'btn-primary': true
        })}
        onClick={onClick}>
        {
          !children &&
          'Top'
        }
        {
          !!children &&
          children
        }
      </button>
  );
};

BackToTopButton.propTypes = {
  position: PropTypes.oneOf(['bottom-left', 'bottom-right']),
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node
};

BackToTopButton.defaultProps  ={
  position: 'bottom-right'
};

export default BackToTopButton;
