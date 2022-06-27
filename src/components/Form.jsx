import PropTypes from 'prop-types';
import React, { Component } from 'react';
import '../styles/Form.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { green, red } from '@mui/material/colors';
import {
  TextField,
  MenuItem,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: green,
    secondary: red,
  },
});

export default class Form extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <form className="Form">
        <h1>Adicionar Nova Carta</h1>
        <ThemeProvider theme={ theme }>
          <TextField
            id="nome"
            label="Nome"
            name="cardName"
            data-testid="name-input"
            value={ cardName }
            onChange={ onInputChange }
            size="small"
          />
          <TextField
            id="description"
            multiline
            maxRows={ 2 }
            label="Descrição"
            name="cardDescription"
            data-testid="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
          />

          <fieldset className="card-attributes">
            <TextField
              name="cardAttr1"
              data-testid="attr1-input"
              value={ cardAttr1 }
              onChange={ onInputChange }
              label="Attr1"
              type="number"
              fullWidth
              size="small"
              inputProps={ {
                max: 90,
                min: 0,
              } }
            />
            <TextField
              name="cardAttr2"
              data-testid="attr2-input"
              value={ cardAttr2 }
              onChange={ onInputChange }
              label="Attr2"
              type="number"
              fullWidth
              size="small"
              inputProps={ {
                max: 90,
                min: 0,
              } }
            />
            <TextField
              name="cardAttr3"
              data-testid="attr3-input"
              value={ cardAttr3 }
              onChange={ onInputChange }
              label="Attr3"
              type="number"
              fullWidth
              size="small"
              inputProps={ {
                max: 90,
                min: 0,
              } }
            />

          </fieldset>
          <TextField
            name="cardImage"
            label="Imagem"
            data-testid="image-input"
            value={ cardImage }
            onChange={ onInputChange }
            size="small"
          />
          <TextField
            select
            id="rare-input"
            label="Raridade"
            name="cardRare"
            value={ cardRare }
            onChange={ onInputChange }
            data-testid="rare-input"
            size="small"
          >
            <MenuItem value="normal">Normal</MenuItem>
            <MenuItem value="raro">Raro</MenuItem>
            <MenuItem value="muito raro">Muito Raro</MenuItem>
          </TextField>
          {
            !hasTrunfo
              ? (
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="cardTrunfo"
                        data-testid="trunfo-input"
                        id="trunfo-input"
                        checked={ cardTrunfo }
                        onChange={ onInputChange }
                      />
                    }
                    label="Super Trybe Trunfo"
                  />
                </FormGroup>
              )
              : (
                <span
                  className="hasTrunfo"
                >
                  Você já tem um Super Trunfo em seu baralho
                </span>)
          }
          <Button
            variant="contained"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </Button>
        </ThemeProvider>
      </form>
    );
  }
}

Form.propTypes = {
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardName: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
