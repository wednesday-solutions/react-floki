/**
 *
 * HomeContainer
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { Helmet } from 'react-helmet';
import { FormattedMessage as T } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { injectSaga } from 'redux-injectors';
import { selectHomeContainer } from './selectors';
import saga from './saga';

export function HomeContainer() {
  return (
    <div>
      <Helmet>
        <title>HomeContainer</title>
        <meta name="description" content="Description of HomeContainer" />
      </Helmet>
      <T id={'HomeContainer'} />
    </div>
  );
}

HomeContainer.propTypes = {};

const mapStateToProps = createStructuredSelector({
  homeContainer: selectHomeContainer(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
  injectSaga({ key: 'homeContainer', saga }),
)(HomeContainer);

export const HomeContainerTest = compose(injectIntl)(HomeContainer);
