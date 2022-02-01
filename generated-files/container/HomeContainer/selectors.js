import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the homeContainer state domain
 */

const selectHomeContainerDomain = state => state.homeContainer || initialState;

/**
 * use createSelector if you are doing something with the returned state.
 * https://redux.js.org/usage/deriving-data-selectors#createselector-overview
 * e.g:  const makeSelectHomeContainer = () =>
 * createSelector(selectHomeContainerDomain, substate =>  get(substate, 'somevalue'))
 */
export const selectHomeContainer = () =>
  createSelector(
    selectHomeContainerDomain,
    substate => substate,
  );
