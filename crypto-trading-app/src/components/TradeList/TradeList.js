import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';

const StyledListItem = styled(ListItem)`
    border-bottom: 1px solid grey;
    display: flex;
    justify-content: center !important;
`;

const TradeList = ({ options, onClick }) => (
  <List>
    {
      options.map(option => (
        <StyledListItem
          key={option}
          alignItems="center"
        >
          <Button
            variant="contained"
            color="primary"
            onClick={() => onClick(option)}
          >
            {
              `Sell for ${option}`
            }
          </Button>
        </StyledListItem>
      ))
    }
  </List>
);

TradeList.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onClick: PropTypes.func,
};

export default TradeList;
