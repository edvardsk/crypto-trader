import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import history from 'store/history';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';

import { ROUTES } from 'constants/router';

const StyledListItem = styled(ListItem)`
    border-bottom: 1px solid grey;
`;

const CurrenciesList = ({ items }) => (
  <List>
    {
      items.map(item => (
        <StyledListItem
          key={item}
        >
          <ListItemText
            primary={item}
          />
          <Button
            variant="contained"
            color="secondary"
            onClick={() => history.push(ROUTES.DETAILS.replace(':id', item))}
          >
            Trade
          </Button>
        </StyledListItem>
      ))
    }
  </List>
);

CurrenciesList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
};

export default CurrenciesList;
