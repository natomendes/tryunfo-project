/* eslint-disable sonarjs/no-duplicate-string */
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Box from '@mui/material/Box';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import hasTrunfo from '../hasTrunfo.svg';

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
    const imgUrl = 'https://media.istockphoto.com/photos/prize-wheel-picture-id175482570?s=612x612';
    const descText = 'Card description to test the layout of card preview';
    const greenColor = 'rgba(2, 48, 49, 1)';
    return (
      <Box
        sx={ {
          maxWidth: 300,
          background: 'orange',
          p: 1,
          borderRadius: 2,
          position: 'relative',
          boxShadow: 12,
        } }
      >
        <Box
          sx={ {
            display: 'flex',
            flexDirection: 'column',
            background: greenColor,
            borderRadius: 2,
            padding: 1,
            margin: 'auto',
          } }
        >
          <Box
            component="h2"
            data-testid="name-card"
            sx={ {
              textAlign: 'right',
              background: greenColor,
              borderTopLeftRadius: 4,
              borderTopRightRadius: 4,
              p: 1,
              color: 'white',
            } }
          >
            {cardName || 'Card Name'}
          </Box>
          <Box
            component="img"
            alt={ cardName || 'Test layout' }
            data-testid="image-card"
            src={ cardImage || imgUrl }
            sx={ {
              maxHeight: 150,
            } }
          />
          <Box
            component="p"
            data-testid="description-card"
            sx={ {
              transform: 'skewY(-5deg) translateY(-25px)',
              background: greenColor,
              p: 1,
              color: 'white',
            } }
          >
            {cardDescription || descText }
          </Box>
          <Box
            sx={ {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 1,
              p: 1,
              background: 'orange',
              borderRadius: 1,
              fontWeight: 700,
              fontStyle: 'italic',
            } }
          >
            <Box
              data-testid="attr1-card"
              sx={ {
                background: greenColor,
                px: 1,
                py: 0.6,
                borderRadius: 1,
                color: 'white',
                display: 'flex',
                justifyContent: 'space-between',
                width: 1,
              } }
            >
              <p>Attr1</p>
              <p>{cardAttr1 || '30'}</p>
            </Box>
            <Box
              data-testid="attr2-card"
              sx={ {
                background: greenColor,
                px: 1,
                py: 0.6,
                borderRadius: 1,
                color: 'white',
                display: 'flex',
                justifyContent: 'space-between',
                width: 1,
              } }
            >
              <p>Attr2</p>
              <p>{cardAttr2 || '60'}</p>
            </Box>
            <Box
              data-testid="attr3-card"
              sx={ {
                background: greenColor,
                px: 1,
                py: 0.6,
                borderRadius: 1,
                color: 'white',
                display: 'flex',
                justifyContent: 'space-between',
                width: 1,
              } }
            >
              <p>Attr3</p>
              <p>{cardAttr3 || '60'}</p>
            </Box>
            <Box
              data-testid="rare-card"
              sx={ {
                background: '#222',
                px: 1,
                py: 0.6,
                borderRadius: 1,
                color: 'white',
                display: 'flex',
                justifyContent: 'space-around',
                width: 0.8,
              } }
            >
              <p>Raridade</p>
              <p>{cardRare || 'Normal'}</p>
            </Box>
          </Box>
        </Box>
        {
          cardTrunfo && (
            <Box
              component="img"
              sx={ {
                position: 'absolute',
                top: '10%',
                left: '5%',
                width: 100,
                shadow: 1,
              } }
              alt="Card is trunfo image"
              src={ hasTrunfo }
            />
          )
        }
        {
          deleteCard && (
            <IconButton
              data-testid="delete-button"
              onClick={ () => deleteCard(cardIndex, !cardTrunfo) }
              size="large"
              sx={ {
                position: 'absolute',
                top: 5,
                left: 5,
                color: 'red',
              } }
            >
              <DeleteIcon fontSize="inherit" />
            </IconButton>
          )
        }
      </Box>
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
