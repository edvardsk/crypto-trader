import { createAction } from 'redux-actions';

import * as ActionTypes from './actionTypes';

export const loadCurrencies = createAction(ActionTypes.LOAD_CURRENCIES);
export const loadCurrenciesSuccess = createAction(ActionTypes.LOAD_CURRENCIES_SUCCESS);
export const loadCurrenciesFailure = createAction(ActionTypes.LOAD_CURRENCIES_FAILURE);
