import React, { Component } from 'react';
import './styles/App.css';
import Card from './components/Card';
import Form from './components/Form';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
    };
  }

  onSaveButtonClick = () => {
    console.log('salvei');
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
    } = this.state;
    return (
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
              }
            }
          />
        </div>
      </section>
    );
  }
}
