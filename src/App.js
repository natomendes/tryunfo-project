import React, { Component } from 'react';
import './styles/App.css';
import Card from './components/Card';
import Form from './components/Form';
import mockCards from './mockCards';
import FilterForm from './components/FilterForm';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: true,
      isSaveButtonDisabled: true,
      tryunfoDeck: mockCards,
      nameFilter: '',
      rarityFilter: 'todas',
      trunfoCheck: false,
    };
  }

  deckHasTrunfo = () => {
    const { tryunfoDeck } = this.state;
    if (tryunfoDeck.length !== 0) {
      return tryunfoDeck.some(({ cardTrunfo }) => cardTrunfo);
    }
    return false;
  }

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;
    this.setState(({ tryunfoDeck: prevDeck }) => ({
      tryunfoDeck: [...prevDeck, {
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
        cardTrunfo,
      }],
    }), () => this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: this.deckHasTrunfo(),
      isSaveButtonDisabled: true,
    }));
  };

  formValidation = () => {
    const {
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardName,
      cardDescription,
      cardImage,
      cardRare,
    } = this.state;
    const maxSumAttr = 211;
    const maxAttr = 90;
    const minAttr = 0;
    if (cardAttr1 > maxAttr || cardAttr1 < minAttr
        || cardAttr2 > maxAttr || cardAttr2 < minAttr
        || cardAttr3 > maxAttr || cardAttr3 < minAttr) return true;
    const sumAttr = (Number(cardAttr1)
      + Number(cardAttr2)
      + Number(cardAttr3)) < maxSumAttr;

    return !(sumAttr
      && cardDescription
      && cardName
      && cardImage
      && cardRare);
  }

  handleChange = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;

    this.setState({
      [name]: value,
    }, () => this.setState({
      isSaveButtonDisabled: this.formValidation(),
    }));
  };

  deleteCard = (cardIndex, isTrunfo) => {
    const { tryunfoDeck } = this.state;
    this.setState({
      tryunfoDeck: tryunfoDeck.filter((_, index) => index !== cardIndex),
      hasTrunfo: isTrunfo,
    });
  }

  renderCardsList = () => {
    const { nameFilter, rarityFilter, tryunfoDeck, trunfoCheck } = this.state;

    if (trunfoCheck) return tryunfoDeck.filter(({ cardTrunfo }) => cardTrunfo);

    return tryunfoDeck
      .filter(({ cardName }) => (
        !nameFilter ? true : cardName.includes(nameFilter)))
      .filter(({ cardRare }) => (
        rarityFilter === 'todas' ? true : cardRare === rarityFilter));
  }

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
      tryunfoDeck,
      nameFilter,
      rarityFilter,
      trunfoCheck,
    } = this.state;
    return (
      <>
        <section className="App">
          <div className="form-content">
            <Form
              { ...this.state }
              onInputChange={ this.handleChange }
              onSaveButtonClick={ this.onSaveButtonClick }
            />
          </div>
          <div className="card-content">
            <Card
              {
                ...{
                  cardName,
                  cardDescription,
                  cardAttr1,
                  cardAttr2,
                  cardAttr3,
                  cardImage,
                  cardRare,
                  cardTrunfo,
                  tryunfoDeck,
                }
              }
            />
          </div>
        </section>
        <section className="card-deck">
          <div className="filter-content">
            <FilterForm
              nameFilter={ nameFilter }
              rarityFilter={ rarityFilter }
              trunfoCheck={ trunfoCheck }
              onInputChange={ this.handleChange }
            />
          </div>
          <div className="cards">
            {
              this.renderCardsList().map((card, index) => (<Card
                key={ index }
                cardIndex={ index }
                { ...card }
                deleteCard={ this.deleteCard }
              />))
            }
          </div>
        </section>
      </>
    );
  }
}
