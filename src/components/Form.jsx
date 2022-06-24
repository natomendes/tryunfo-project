import PropTypes from 'prop-types';
import React, { Component } from 'react';
import '../styles/Form.css';

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
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <form className="Form">
        <h1>Adicionar Nova Carta</h1>
        <label htmlFor="name">
          <span>Nome</span>
          <input
            type="text"
            data-testid="name-input"
            id="name"
            name="cardName"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="description">
          <span>Descrição</span>
          <textarea
            id="description"
            name="cardDescription"
            data-testid="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <fieldset className="card-attributes">
          <label htmlFor="attr1">
            <span>Attr1</span>
            <input
              type="number"
              name="cardAttr1"
              data-testid="attr1-input"
              id="attr1"
              min={ 0 }
              max={ 90 }
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="attr2">
            <span>Attr2</span>
            <input
              type="number"
              name="cardAttr2"
              data-testid="attr2-input"
              id="attr2"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="attr3">
            <span>Attr3</span>
            <input
              type="number"
              name="cardAttr3"
              data-testid="attr3-input"
              id="attr3"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
        </fieldset>
        <label htmlFor="image-input" className="img-label">
          <span>Imagem</span>
          <input
            type="text"
            name="cardImage"
            data-testid="image-input"
            id="image-input"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="rare-input">
          <span>Raridade</span>
          <select
            value={ cardRare }
            name="cardRare"
            id="rare-input"
            onChange={ onInputChange }
            data-testid="rare-input"
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>
        <label htmlFor="trunfo-input" className="trunfo-checkbox">
          <input
            type="checkbox"
            name="cardTrunfo"
            data-testid="trunfo-input"
            id="trunfo-input"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
          <span>Super Trybe Trunfo</span>
        </label>
        <button
          type="submit"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
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
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
