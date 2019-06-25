import { all, takeEvery, put, call } from 'redux-saga/effects';
import * as ActionTypes from './actionTypes';
import * as Actions from './actions';

import { formatCurrencies } from './formatters';

function* loadCurrenciesWorker() {
  let responseBody;

  try {
    const response = yield call(fetch, 'http://localhost:3001/asset-pairs');

    responseBody = yield response.json();
  } catch (e) {
    yield put(Actions.loadCurrenciesFailure(e));
    return;
  }

  yield put(Actions.loadCurrenciesSuccess(formatCurrencies(responseBody.result)));
}

function* loadCurrenciesWatcher() {
  yield takeEvery(ActionTypes.LOAD_CURRENCIES, loadCurrenciesWorker);
}

export default function* cryptoSaga() {
  yield all([
    loadCurrenciesWatcher(),
  ]);
}
