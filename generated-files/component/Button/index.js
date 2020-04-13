/**
 *
 * Button
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types'
// import styled from 'styled-components'

import { FormattedMessage as T } from 'react-intl';

function Button() {
  return (
    <div data-testid="button">
      <T id="button" />
    </div>
  );
}

Button.propTypes = {};

export default memo(Button);
