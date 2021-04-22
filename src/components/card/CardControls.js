import React, { useState } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlusCircle, faMinusCircle} from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from "react-redux";
import { modifyDeckCount, getDeckLimit } from '../../redux/actions/setActions';

export default function CardControls(props) {

  // LOGIC
  // display prop is true/false triggered by hover state of parent element
  const { code, display } = props;
  const cards = useSelector(state => state.cards);
  const deck = useSelector(state => state.deck);
  const card = cards.filter(card => card.code === code)[0];
  
  const deckLimit = card.deck_limit;
  const deckCount = deck.cards[code] ? deck.cards[code] : null;
  // const canBeElite = card.points && card.points.includes("/");
  const dispatch = useDispatch();

  const addToDeck = (e) => {
    e.preventDefault();
    dispatch(modifyDeckCount(code, "+1"));
    // console.log(`Adding ${code} to deck! we are at ${deckCount} of ${deckLimit}` )
  }

  const removeFromDeck = (e) => {
    e.preventDefault();
    dispatch(modifyDeckCount(code, "-1"));
  }

  const [plusHover, setPlusHover] = useState(false);
  const [minusHover, setMinusHover] = useState(false);

  // STYLE
  // stretch - change shading of PLUS and MINUS when unusable?

  const floatingBoxStyle = {
    position: 'absolute',
    height: '202px',
    width: '75px',
    margin: 'auto',
    overflow: 'auto',
    top: '0', left: '0', bottom: '0', right: '0',
    zIndex: '1',
  }
  
  const cardControlsStyle = {
    backgroundColor: 'rgba(40, 44, 52, 0.55)',
    padding: '0 1rem',
    borderRadius: '2rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
  
  const plusIncrementerStyle = {
    margin: '8',
    color: deckCount < deckLimit? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 0, 0, 0.9)',
    
  }

  const plusIncrementerHoverStyle = {
    margin: '8',
    color: deckCount < deckLimit? 'rgba(255, 255, 255, 1.0)' : 'rgba(255, 0, 0, 1.0)',
    boxShadow: deckCount < deckLimit? '0 0 15px rgba(255, 255, 255, 1.0)' : '0 0 15px rgba(255, 0, 0, 1.0)',
    borderRadius: '25px'

  }

    const minusIncrementerStyle = {
    margin: '8',
    color: 'rgba(255, 255, 255, 0.9)',
    
  }

  const minusIncrementerHoverStyle = {
    margin: '8',
    color: 'rgba(255, 255, 255, 1.0)',
    boxShadow: '0 0 15px rgba(255, 255, 255, 1.0)',
    borderRadius: '25px'

  }
  const deckCountStyle = {
    color: deckCount > deckLimit? 'rgba(255, 0, 0, 0.9)' : 'rgba(255, 255, 255, 0.9)',
    textShadow: '#000 0px 0px 1px',  
    fontSize: '4rem'
  }

  const floatingTextStyle = {
    position: 'absolute',
    margin: 'auto',
    overflow: 'auto',
    top: '0', left: '0', bottom: '0', right: '0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: deckCount > deckLimit? 'rgba(255, 0, 0, 1.0)' : 'rgba(255, 255, 255, 1.0)',
    textShadow: '#000 2px 2px 3px',  
    fontSize: '4rem'
  }

  return (
    <div style={floatingBoxStyle}>
      {/* These components are displayed when the parent card element is hovered */}
              <div style={display ? cardControlsStyle : { display: 'none' }}>
                <div onClick={(e) => addToDeck(e)} >
                  <FontAwesomeIcon
                    onMouseEnter={() => setPlusHover(true)}
                    onMouseLeave={() => setPlusHover(false)}
                    style={plusHover? plusIncrementerHoverStyle: plusIncrementerStyle}
                    icon={faPlusCircle}
                    size={"3x"} />
                </div>
        <h2 style={deckCountStyle}>{deckCount ? deckCount : 0}</h2>
                <div onClick={(e) => removeFromDeck(e)}>
                  <FontAwesomeIcon
                    onMouseEnter={() => setMinusHover(true)}
                    onMouseLeave={() => setMinusHover(false)}
                    style={deckCount > 0 && minusHover? minusIncrementerHoverStyle: minusIncrementerStyle}
                    icon={faMinusCircle}
                    size={"3x"} />
                </div>
              </div>
      {/* This heading displays non-zero deck counts when the card is NOT being hovered */}
              <h2 style={display ? { display: 'none' } : floatingTextStyle} >{deckCount ? deckCount : ""}</h2>
            </div>
          )


  
  
}

    
    


