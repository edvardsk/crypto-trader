import { fromJS } from 'immutable';
import * as ActionTypes from './actionTypes';

const initialState = fromJS({
  currencies: [],
  currencyRelations: {}
});

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case ActionTypes.LOAD_CURRENCIES_SUCCESS:
      return state
        .set('currencies', fromJS(payload.currencies))
        .set('currencyRelations', fromJS(payload.currencyRelations));

    default: {
      return state;
    }
  }
}
