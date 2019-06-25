import React from 'react';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';

import CurrenciesList from 'components/CurrenciesList';

const Title = styled.div`
  font-family: Roboto;
  font-size: 18px;
  color: #1d6fda;
  font-weight: bold;
  
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const Content = styled.div`
  margin: 20px;
`;

const StyledPaper = styled(Paper)`
  padding: 20px;
  max-width: 500px;
`;

export default ({ currencies }) => (
  <Content>
    <Title>Currencies List</Title>

    <StyledPaper>
      <CurrenciesList items={currencies}/>
    </StyledPaper>
  </Content>
);
