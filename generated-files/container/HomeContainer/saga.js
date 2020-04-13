import { takeLatest } from 'redux-saga/effects';
import { homeContainerTypes } from './reducer';
// Individual exports for testing
const { DEFAULT_ACTION } = homeContainerTypes;

export function* defaultFunction(/* action */) {
  // console.log('Do something here')
}

export default function* homeContainerSaga() {
  yield takeLatest(DEFAULT_ACTION, defaultFunction);
}
