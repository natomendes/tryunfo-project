import {
  TextField,
  MenuItem,
  FormGroup,
  FormControlLabel,
  Checkbox } from '@mui/material';
import { Box } from '@mui/system';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { green, red } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: green,
    secondary: red,
  },
});

export default class FilterForm extends Component {
  constructor() {
    super();
    this.state = {
      isDisabled: false,
    };
  }

  handleCheckbox = (event) => {
    const { onInputChange } = this.props;
    this.setState(({ isDisabled: prevState }) => ({
      isDisabled: !prevState,
    }));
    onInputChange(event);
  }

  render() {
    const { isDisabled } = this.state;
    const {
      nameFilter,
      rarityFilter,
      onInputChange,
      trunfoCheck,
    } = this.props;
    return (
      <ThemeProvider theme={ theme }>
        <Box
          component="form"
          sx={ {
            display: 'flex',
            p: 2,
            alignItems: 'center',
            justifyContent: 'center',
            gap: 2,
            background: '#CCC',
            width: '100%',
            boxShadow: 8,
            borderRadius: 3,
            color: 'green',
          } }
        >
          <Box
            component="p"
          >
            Filtro de busca
          </Box>
          <TextField
            label="Nome da carta"
            name="nameFilter"
            data-testid="name-filter"
            value={ nameFilter }
            onChange={ onInputChange }
            disabled={ isDisabled }
          />
          <TextField
            select
            name="rarityFilter"
            value={ rarityFilter }
            id="rarityFilter"
            data-testid="rare-filter"
            onChange={ onInputChange }
            disabled={ isDisabled }
            label="Raridade"
          >
            <MenuItem value="todas">Todas</MenuItem>
            <MenuItem value="normal">Normal</MenuItem>
            <MenuItem value="raro">Raro</MenuItem>
            <MenuItem value="muito raro">Muito Raro</MenuItem>

          </TextField>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  id="trunfoCheck"
                  checked={ trunfoCheck }
                  name="trunfoCheck"
                  onChange={ this.handleCheckbox }
                  data-testid="trunfo-filter"
                />
              }
              label="Super Trybe Trunfo"
            />
          </FormGroup>
        </Box>
      </ThemeProvider>
    );
  }
}

FilterForm.propTypes = {
  nameFilter: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  rarityFilter: PropTypes.string.isRequired,
  trunfoCheck: PropTypes.bool.isRequired,
};
