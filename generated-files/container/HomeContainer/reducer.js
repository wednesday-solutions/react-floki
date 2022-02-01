/*
 *
 * HomeContainer reducer
 *
 */
import produce from 'immer';
import { createActions } from 'reduxsauce';

export const initialState = {};

export const {
  Types: homeContainerTypes,
  Creators: homeContainerCreators,
} = createActions({
  defaultAction: ['somePayload'],
});

/* eslint-disable default-case, no-param-reassign */
export const homeContainerReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case homeContainerTypes.DEFAULT_ACTION:
        return { ...state, somePayload: action.somePayload };
      default:
        return state;
    }
  });

export default homeContainerReducer;
