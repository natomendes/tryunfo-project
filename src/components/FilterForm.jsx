import PropTypes from 'prop-types';
import React, { Component } from 'react';

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
      <form className="filter-options">
        <h4>Filtro de busca</h4>
        <input
          type="text"
          name="nameFilter"
          data-testid="name-filter"
          placeholder="Nome da Carta"
          value={ nameFilter }
          onChange={ onInputChange }
          disabled={ isDisabled }
        />
        <select
          name="rarityFilter"
          value={ rarityFilter }
          id="rarityFilter"
          data-testid="rare-filter"
          onChange={ onInputChange }
          disabled={ isDisabled }
        >
          <option value="todas">Todas</option>
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito raro</option>
        </select>
        <label htmlFor="trunfoCheck">
          <input
            type="checkbox"
            id="trunfoCheck"
            checked={ trunfoCheck }
            name="trunfoCheck"
            onChange={ this.handleCheckbox }
            data-testid="trunfo-filter"
          />
          <span>Super Trybe Trunfo</span>
        </label>
      </form>);
  }
}

FilterForm.propTypes = {
  nameFilter: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  rarityFilter: PropTypes.string.isRequired,
  trunfoCheck: PropTypes.bool.isRequired,
};
