import { LOCATION_CHANGE } from 'connected-react-router';
import { takeEvery, cancel, fork } from 'redux-saga/effects';
import pathToRegexp from 'path-to-regexp';
import find from 'lodash/find';

// constants
import { ROUTES } from 'constants/router';

// view sagas
import home from './views/home';
import details from './views/details';

const viewSagas = {
  [ROUTES.HOME]: home,
  [ROUTES.DETAILS]: details,
};

let task = null;

function* onchange(action) {
  const {
    hash,
    pathname,
    search,
  } = action.payload.location;

  if (task) {
    yield cancel(task);
  }

  if (task) {
    yield cancel(task);
  }
  const taskRoute = find(Object.keys(viewSagas), (path) => (
    pathname.match(pathToRegexp(path))
  ));

  if (taskRoute){
    task = yield fork(viewSagas[taskRoute], search, hash);
  }
}

export default function* routerSaga() {
  yield takeEvery(LOCATION_CHANGE, onchange);
}
