import Details from './Details';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { matchPath } from 'react-router';

import { route } from 'selectors/router';
import { ROUTES } from 'constants/router';

import get from 'lodash/get';

import { Selectors as CryptoSelectors } from 'domains/crypto';

const mapStateToProps = createSelector(
  [
    route,
    CryptoSelectors.currencyRelations,
  ],
  (params, relations) => {
    const match = matchPath(params, {
      path: ROUTES.DETAILS,
      exact: true,
      strict: false
    });

    const base = get(match, 'params.id');

    let options = relations[base] || [];
    options = options.length > 3 ? options.splice(0, 3) : options;

    return {
      currency: base,
      options: options.map(option => option.wsname.substring(option.wsname.indexOf('/') + 1, option.wsname.length)),
    };
  }
);

export default connect(mapStateToProps)(Details);
