import React from 'react';


import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlusCircle, faMinusCircle} from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from "react-redux";
import { modifyDeckCount } from '../../redux/actions/setActions';



function CardControls(props) {

  // LOGIC
  
  const { code, deckCount, deckLimit, display } = props;
  
  const dispatch = useDispatch();
  const addToDeck = (e) => {
    e.preventDefault();
    dispatch(modifyDeckCount(code, "+1", deckLimit))
  }

  const removeFromDeck = (e) => {
    e.preventDefault();
    dispatch(modifyDeckCount(code, "-1", deckLimit))
  }

  

  // STYLE

  const floatingBoxStyle = {
    position: 'absolute',
    height: '51%',
    width: '25%',
    maxHeight: '250px',
    maxWidth: '100px',
    margin: 'auto',
    overflow: 'auto',
    top: '0', left: '0', bottom: '0', right: '0',
    zIndex: '1',
    backgroundColor: 'rgba(40, 44, 52, 0.55)',
    padding: '0 1rem',
    borderRadius: '2rem'
  }
  
  const cardControlsStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // height: '250px',
    // width: '100px',
  }
  
  const incrementerStyle = {
    margin: '10',
    color: 'rgba(255, 255, 255, 0.8)'
    
  }

  const deckCountStyle = {
    color: 'rgba(255, 255, 255, 0.8)',
    textShadow: '#000 0px 0px 1px',  
    fontSize: '4rem'
  }

  return (<div style={display? floatingBoxStyle: {display: 'none'}}>
            <div style={cardControlsStyle}>
              <div onClick={(e) => addToDeck(e)} >
                <FontAwesomeIcon
                  style={incrementerStyle}
                  icon={faPlusCircle}
                  size={"3x"} />
              </div>
              <h2 style={deckCountStyle}>{deckCount? deckCount : 0}</h2>
              <div onClick={(e) => removeFromDeck(e)}>
                <FontAwesomeIcon
                  style={incrementerStyle}
                  icon={faMinusCircle}
                  size={"3x"} />
              </div>
              </div>
          </div>)


  
  
}

    
    


export default CardControls;