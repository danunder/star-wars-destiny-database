import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleDeck } from '../../redux/actions/setActions';
import Card from '../card/Card.js'




export default function Deck() {
  
  // LOGIC
  const deck = useSelector(state => state.deck);
  const cards = useSelector(state => state.cards);
  const display = deck.show;
  const [fullDeck, setFullDeck] = useState([]);
  const dispatch = useDispatch()

  useEffect(() => {
    
    const cardCodes = Object.keys(deck.cards)
    const cardData = cards
      .filter(card => cardCodes.includes(card.code))
      .map(card => {
        return {
          ...card,
          quantity: deck.cards[card.code]
        }
      })
        
    setFullDeck(cardData)
      
  }, [deck, cards])



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
    zIndex: '2',
    backgroundColor: 'rgba(40, 44, 52, 0.77)',
    padding: '0 1rem',
    borderRadius: '2rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'top',
  
  }

  return (
    <div style={display ? deckStyle : hide}
      onClick={() => dispatch(toggleDeck())}>
      {fullDeck.map(card => {
        return (
          <Card 
          name={card.name} 
          bod={true} 
          imagesrc={card.imagesrc} 
          code={card.code} 
                      
          loadColor={"#343740"}></Card>
        )
      })}
    </div>
  )






}