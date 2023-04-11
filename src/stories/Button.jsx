import React from 'react';
import PropTypes from 'prop-types';
import './button.css';
import { Button } from 'semantic-ui-react';

/**
 * Primary UI component for user interaction
 */
export const CButton = ({ primary, backgroundColor, size, label, ...props }) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <Button
      type="button"
      primary
      // className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      // style={backgroundColor && { backgroundColor }}
      // {...props}
    >
      {label}
    </Button>
  );
};

CButton.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

CButton.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};
