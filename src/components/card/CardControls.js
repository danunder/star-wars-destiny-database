import React, { useState } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlusCircle, faMinusCircle} from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from "react-redux";
import { modifyDeckCount } from '../../redux/actions/setActions';

function CardControls(props) {

  // LOGIC
  // deckCount and deckLimit can be accessed from store. 
  const { code, display } = props;
  const deck = useSelector(state => state.deck)
  const deckCount = deck.cards[code] ? deck.cards[code] : null
  

  const dispatch = useDispatch();

  const addToDeck = (e) => {
    e.preventDefault();
    dispatch(modifyDeckCount(code, "+1"));
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
    height: '50%',
    width: '25%',
    maxHeight: '250px',
    maxWidth: '100px',
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
  
  const incrementerStyle = {
    margin: '8',
    color: 'rgba(255, 255, 255, 0.8)',
    
  }

  const incrementerHoverStyle = {
    margin: '8',
    color: 'rgba(255, 255, 255, 1.0)',
    boxShadow: '0 0 15px rgba(255, 255, 255, 0.8)',
    borderRadius: '25px'

  }

  const deckCountStyle = {
    color: 'rgba(255, 255, 255, 0.8)',
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
    color: 'rgba(255, 255, 255, 1.0)',
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
                    style={plusHover? incrementerHoverStyle: incrementerStyle}
                    icon={faPlusCircle}
                    size={"3x"} />
                </div>
                <h2 style={deckCountStyle}>{deckCount? deckCount : 0}</h2>
                <div onClick={(e) => removeFromDeck(e)}>
                  <FontAwesomeIcon
                    onMouseEnter={() => setMinusHover(true)}
                    onMouseLeave={() => setMinusHover(false)}
                    style={minusHover? incrementerHoverStyle: incrementerStyle}
                    icon={faMinusCircle}
                    size={"3x"} />
                </div>
      </div>
      {/* This heading displays non-zero deck counts when the card is NOT being hovered */}
              <h2 style={display ? { display: 'none' } : floatingTextStyle} >{deckCount ? deckCount : ""}</h2>
            </div>
          )


  
  
}

    
    


export default CardControls;