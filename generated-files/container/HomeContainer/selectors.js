import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the homeContainer state domain
 */

const selectHomeContainerDomain = state =>
  (state.homeContainer || initialState).toJS();

const makeSelectHomeContainer = () =>
  createSelector(
    selectHomeContainerDomain,
    substate => substate,
  );

export default makeSelectHomeContainer;
export { selectHomeContainerDomain };
