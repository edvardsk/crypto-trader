import React, { Component } from 'react';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import TradeList from 'components/TradeList';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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

const StyledButton = styled(Button)`
  margin-top: 20px !important;
`;

const Label = styled.div`
  color: green;
  margin-top: 20px;
`;

class Details extends Component {

  state = {
    selected: null,
    success: false,
  };

  selectCurrency = currency => this.setState({ success: false, selected: currency });

  trade = () => this.setState({ success: true });

  render() {
    const { currency, options } = this.props;
    const { selected, success } = this.state;

    return (
      <Content>
        <Title>{currency}</Title>

        <StyledPaper>
          <TradeList
            options={options}
            onClick={this.selectCurrency}
          />

          {
            selected &&
              <div>
                <TextField
                  type="number"
                  variant="standard"
                />

                <StyledButton
                  onClick={this.trade}
                  fullWidth
                  variant="contained"
                  color="secondary"
                >
                  Trade now
                </StyledButton>
              </div>
          }

          {
            success &&
              <Label>
                {`Trade between ${currency} and ${selected} successful`}
              </Label>
          }

        </StyledPaper>
      </Content>
    );
  }

};

export default Details;
