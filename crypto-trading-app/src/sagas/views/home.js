import { Actions as CryptoActions } from 'domains/crypto';
import { put } from 'redux-saga/effects';

export default function* homeSaga() {
  yield put(CryptoActions.loadCurrencies());
}
