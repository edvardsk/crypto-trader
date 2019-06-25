import { combineReducers } from 'redux-immutable';
import { connectRouter } from 'connected-react-router/immutable';

// domains
import { reducer as cryptoReducer } from 'domains/crypto';

export default (history) => combineReducers({
  crypto: cryptoReducer,

  // generic
  router: connectRouter(history),
});
