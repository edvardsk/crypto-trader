import { createStore, applyMiddleware, compose } from 'redux';
import { Map } from 'immutable';

import history from './history';
import { routerMiddleware } from 'connected-react-router/immutable';

// middlewares
import createSagaMiddleware from 'redux-saga';

//helpers
import rootReducer from 'reducers';
import rootSaga from 'sagas';

const initialState = Map();

const sagaMiddleware = createSagaMiddleware();
const middleware = [
  sagaMiddleware,
  routerMiddleware(history),
];

const composedEnhancers = compose(
  applyMiddleware(...middleware),
);

const store = createStore(
  rootReducer(history),
  initialState,
  composedEnhancers,
);

sagaMiddleware.run(rootSaga);

export default store;
