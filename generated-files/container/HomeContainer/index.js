/**
 *
 * HomeContainer
 *
 */

import React from 'react';
// import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { injectIntl, FormattedMessage as T } from 'react-intl';
import { Helmet } from 'react-helmet';

import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { injectSaga } from 'redux-injectors';
import selectHomeContainerDomain from './selectors';
import saga from './saga';

export function HomeContainer() {
  return (
    <div>
      <Helmet>
        <title>HomeContainer</title>
        <meta name="description" content="Description of HomeContainer" />
      </Helmet>
      <T id="HomeContainer" />
    </div>
  );
}

HomeContainer.propTypes = {};

const mapStateToProps = createStructuredSelector({
  homeConatiner: selectHomeContainerDomain(),
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
  injectSaga({ key: 'homeContainer', saga }),
)(HomeContainer);

export const HomeContainerTest = compose(injectIntl)(HomeContainer);
