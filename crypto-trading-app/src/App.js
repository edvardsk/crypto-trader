import React from 'react';
import Router from 'router';
import { Provider } from 'react-redux';
import store from './store';
import history from './store/history';
import { ConnectedRouter } from 'connected-react-router/immutable';
import styled from 'styled-components';

const Container = styled.div`
  background: rgba(0, 0, 0, 0.17);
  min-height: 100vh;
  overflow: auto;
`;

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Container>
          <Router/>
        </Container>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
