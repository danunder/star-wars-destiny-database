import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleDeck } from '../../redux/actions/setActions';
import Card from '../card/Card.js'
import CardControls from '../card/CardControls'
import SmallCard from '../deck/SmallCard'




export default function Deck() {
  
  // LOGIC
  const deck = useSelector(state => state.deck);
  const cards = useSelector(state => state.cards);
  
  const display = deck.show;

  const characters = cards
    .filter(card => Object.keys(deck.cards).includes(card.code))
    .filter(card => card.type_name === "Character")
  
  const plots = cards
    .filter(card => Object.keys(deck.cards).includes(card.code))
    .filter(card => card.type_name === "Plot")
  
  const battlefields = cards
    .filter(card => Object.keys(deck.cards).includes(card.code))
    .filter(card => card.type_name === "Battlefield")
  
  const supports = cards
    .filter(card => Object.keys(deck.cards).includes(card.code))
    .filter(card => card.type_name === "Support")
  
  const upgrades = cards
    .filter(card => Object.keys(deck.cards).includes(card.code))
    .filter(card => card.type_name === "Upgrade")
  
  const downgrades = cards
    .filter(card => Object.keys(deck.cards).includes(card.code))
    .filter(card => card.type_name === "Downgrade")
  
  const events = cards
    .filter(card => Object.keys(deck.cards).includes(card.code))
    .filter(card => card.type_name === "Event")
  
 


  // STYLE

  const hide = {
    display: 'none'
  }

  const headingStyle = {
    color: 'white',
    padding: '0.5rem',
    margin: '1rem 0 0 1rem'
  }

  const deckStyle = {
    position: 'absolute',
    height: '80%',    
    width: '95%',
    margin: 'auto',
    overflow: 'auto',
    top: '0', left: '0', bottom: '150px', right: '0',
    zIndex: '10',
    backgroundColor: 'rgba(40, 44, 52, 0.77)',
    padding: '0 1rem',
    borderRadius: '2rem',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'top',
    alignItems: 'flex-start',
  
  }

  const outerBox = {
    margin: '0 2rem 0 2rem',

  }
  const cardTypeWrapperStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  }
  

  return (
    <div style={display ? deckStyle : hide}>
      {characters.length &&
        <div style={outerBox}>
          <h2 style={headingStyle}>Characters</h2>
        <div style={cardTypeWrapperStyle}>
          {characters.map(card => {
            return (
              <SmallCard
                name={card.name}
                imagesrc={card.imagesrc}
                code={card.code}>              
              </SmallCard>
            )
          })}
        </div>
      </div>
      }
     {plots.length &&
        <div style={outerBox}>
          <h2 style={headingStyle}>Plots</h2>
        <div style={cardTypeWrapperStyle}>
          {plots.map(card => {
            return (
              <SmallCard
                name={card.name}
                imagesrc={card.imagesrc}
                code={card.code}>              
              </SmallCard>
            )
          })}
        </div>
      </div>
      }
      {battlefields.length &&
        <div style={outerBox}>
          <h2 style={headingStyle}>Battlefields</h2>
        <div style={cardTypeWrapperStyle}>
          {battlefields.map(card => {
            return (
              <SmallCard
                name={card.name}
                imagesrc={card.imagesrc}
                code={card.code}>              
              </SmallCard>
            )
          })}
        </div>
      </div>
      }
      {upgrades.length &&
        <div style={outerBox}>
          <h2 style={headingStyle}>Upgrades</h2>
        <div style={cardTypeWrapperStyle}>
          {upgrades.map(card => {
            return (
              <SmallCard
                name={card.name}
                imagesrc={card.imagesrc}
                code={card.code}>              
              </SmallCard>
            )
          })}
        </div>
      </div>
      }
      {downgrades.length &&
        <div style={outerBox}>
          <h2 style={headingStyle}>Downgrades</h2>
        <div style={cardTypeWrapperStyle}>
          {downgrades.map(card => {
            return (
              <SmallCard
                name={card.name}
                imagesrc={card.imagesrc}
                code={card.code}>              
              </SmallCard>
            )
          })}
        </div>
      </div>
      }
      {supports.length &&
        <div style={outerBox}>
          <h2 style={headingStyle}>Supports</h2>
        <div style={cardTypeWrapperStyle}>
          {supports.map(card => {
            return (
              <SmallCard
                name={card.name}
                imagesrc={card.imagesrc}
                code={card.code}>              
              </SmallCard>
            )
          })}
        </div>
      </div>
      }
      {events.length &&
        <div style={outerBox}>
          <h2 style={headingStyle}>Events</h2>
        <div style={cardTypeWrapperStyle}>
          {events.map(card => {
            return (
              <SmallCard
                name={card.name}
                imagesrc={card.imagesrc}
                code={card.code}>              
              </SmallCard>
            )
          })}
        </div>
      </div>
      }
    </div>
  )






}