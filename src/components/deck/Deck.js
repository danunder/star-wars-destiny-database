import React from 'react';
import { useSelector, } from 'react-redux';

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
  
  const supportCount = () => {
    let count = 0;
    for (let card of supports) {
      count += card.count
    }
    return count
  }
  const upgradeCount = () => {
    let count = 0;
    for (let card of upgrades) {
      count += card.count
    }
    return count
  }
  const downgradeCount = () => {
    let count = 0;
    for (let card of downgrades) {
      count += card.count
    }
    return count
  }
  const eventCount = () => {
    let count = 0;
    for (let card of events) {
      count += card.count
    }
    return count
  }

    const cardCount = () => supportCount() + upgradeCount() + downgradeCount() + eventCount()
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
    top: '150px', left: '0', bottom: '150px', right: '0',
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

  const outerBoxStyle = {
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
      <h2 style={headingStyle}>{`${cardCount()} cards: ${supportCount()} Supports, ${upgradeCount()} Upgrades, ${downgradeCount()} Downgrades, ${eventCount()} Events `}</h2>
      {characters.length &&
        <div style={outerBoxStyle}>
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
        <div style={outerBoxStyle}>
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
        <div style={outerBoxStyle}>
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
        <div style={outerBoxStyle}>
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
        <div style={outerBoxStyle}>
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
        <div style={outerBoxStyle}>
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
        <div style={outerBoxStyle}>
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