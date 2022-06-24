import PropTypes from 'prop-types';
import React, { Component } from 'react';
import '../styles/Card.css';

export default class Card extends Component {
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
      deleteCard,
      cardIndex,
    } = this.props;
    return (
      <div className="Card">
        <h2 data-testid="name-card">
          {cardName}
        </h2>
        <img
          src={ cardImage }
          alt={ cardName }
          data-testid="image-card"
        />
        <p data-testid="description-card">
          {cardDescription}
        </p>
        <p data-testid="attr1-card">
          {cardAttr1}
        </p>
        <p data-testid="attr2-card">
          {cardAttr2}
        </p>
        <p data-testid="attr3-card">
          {cardAttr3}
        </p>
        <p data-testid="rare-card">
          {cardRare}
        </p>
        {
          cardTrunfo && (
            <p data-testid="trunfo-card">
              Super Trunfo
            </p>
          )
        }
        {
          deleteCard && (
            <button
              type="submit"
              data-testid="delete-button"
              onClick={ () => deleteCard(cardIndex, !cardTrunfo) }
            >
              Excluir
            </button>
          )
        }
      </div>
    );
  }
}

Card.propTypes = {
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardName: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  deleteCard: PropTypes.func,
  cardIndex: PropTypes.number,
};

Card.defaultProps = {
  deleteCard: undefined,
  cardIndex: 0,
};
