import React from 'react';
import { Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';

import { ROUTES } from 'constants/router';

// views
import Home from 'pages/Home';
import Details from 'pages/Details';
import NotFound from 'pages/NotFound';

const AppRouter = () => (
  <AnimatedSwitch
    atEnter={{ opacity: 0 }}
    atLeave={{ opacity: 0 }}
    atActive={{ opacity: 1 }}
  >
    <Route exact path={ROUTES.DETAILS} component={Details} />
    <Route exact path={ROUTES.HOME} component={Home} />
    <Route path="*" component={NotFound} />
  </AnimatedSwitch>
);

export default AppRouter;
