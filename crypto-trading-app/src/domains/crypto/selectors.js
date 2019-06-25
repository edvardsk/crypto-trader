import { createSelector } from 'reselect';

export const cryptoState = state => state.get('crypto');

export const currencies = createSelector(
  cryptoState,
  crypto => crypto.get('currencies').toJS()
);

export const currencyRelations = createSelector(
  cryptoState,
  crypto => crypto.get('currencyRelations').toJS()
);
