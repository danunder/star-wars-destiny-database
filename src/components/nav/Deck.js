import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleDeck } from '../../redux/actions/setActions';
import Card from '../card/Card.js'
import CardControls from '../card/CardControls'




export default function Deck() {
  
  // LOGIC
  const deck = useSelector(state => state.deck);
  
  
  const display = deck.show;
  
  const dispatch = useDispatch()

  // const locations,
  //   plots,
  //   characters,
  //   supports,
  //   upgrades,
  //   downgrades,
  //   events
  // } = 
 

  
  useEffect(() => {
    const locations = [];
    const plots = [];
    const characters = [];
    const supports = [];
    const upgrades = [];
    const downgrades = [];
    const events = [];

    for (const card in deck.cards) {
      if (card.type_name === 'Location') {
        locations.push(
          {
            name: card.name,
            imagesrc: card.imagesrc,
            code: card.code
          }
        )
      }
      if (card.type_name === 'Plot') {
        plots.push(
          {
            name: card.name,
            imagesrc: card.imagesrc,
            code: card.code
          }
        )
      }
      if (card.type_name === 'Character') {
        characters.push(
          {
            name: card.name,
            imagesrc: card.imagesrc,
            code: card.code
          }
        )
      }
      if (card.type_name === 'Support') {
        supports.push(
          {
            name: card.name,
            imagesrc: card.imagesrc,
            code: card.code
          }
        )
      }
      if (card.type_name === 'Upgrade') {
        upgrades.push(
          {
            name: card.name,
            imagesrc: card.imagesrc,
            code: card.code
          }
        )
      }
      if (card.type_name === 'Downgrade') {
        downgrades.push(
          {
            name: card.name,
            imagesrc: card.imagesrc,
            code: card.code
          }
        )
      }
      if (card.type_name === 'Event') {
        events.push(
          {
            name: card.name,
            imagesrc: card.imagesrc,
            code: card.code
          }
        )
      }
    }
      
  })


  // STYLE

  const hide = {
    display: 'none'
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
    flexDirection: 'column',
    justifyContent: 'top',
    alignItems: 'flex-start',
  
  }

  
  const deckImageStyle = {
    
    height: '250px',
    width: 'auto'
  }

  return (
    <div style={display ? deckStyle : hide}
      onClick={() => dispatch(toggleDeck())}>
      <div>
        <h2>Characters</h2>
        <div style={{ position: 'relative' }}>
        <img style={deckImageStyle} src="https://swdestinydb.com/bundles/cards/en/01/01002.jpg" alt="card"></img>
        <CardControls code={"01002"} display={true}/>
      </div>
      </div>
      {/* {characters.map(char => {
        return (<img style={deckImageStyle} alt={char.name} src={char.imagesrc}></img>)
      })} */}
    </div>
  )






}