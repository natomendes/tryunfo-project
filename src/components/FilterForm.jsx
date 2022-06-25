import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class FilterForm extends Component {
  render() {
    const {
      nameFilter,
      rarityFilter,
      onInputChange,
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
        />
        <select
          name="rarityFilter"
          value={ rarityFilter }
          id="rarityFilter"
          data-testid="rare-filter"
          onChange={ onInputChange }
        >
          <option value="todas">Todas</option>
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito raro</option>
        </select>
      </form>);
  }
}

FilterForm.propTypes = {
  nameFilter: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  rarityFilter: PropTypes.string.isRequired,
};
