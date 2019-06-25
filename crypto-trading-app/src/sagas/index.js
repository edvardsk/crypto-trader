import { all } from 'redux-saga/effects';

import routerSaga from './router';

import { saga as cryptoSaga } from 'domains/crypto';

export default function* rootSaga() {
  yield all([
    routerSaga(),

    cryptoSaga(),
  ]);
}
