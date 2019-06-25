import Home from './Home';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { Selectors as CryptoSelectors } from 'domains/crypto';

const mapStateToProps = createSelector(
  [
    CryptoSelectors.currencies,
  ],
  (currencies) => ({
    currencies,
  })
);

export default connect(mapStateToProps)(Home);
