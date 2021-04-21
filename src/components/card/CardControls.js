import React from 'react';


import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlusCircle, faMinusCircle} from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from "react-redux";
import { modifyDeckCount } from '../../redux/actions/setActions';



function CardControls(props) {

  // LOGIC

  const dispatch = useDispatch();
  const deck = useSelector(state => state.deck.cards)
  // const addToDeck = () => 

  const { code } = props
  const count = deck[code]? deck[code] : 0
  

  // STYLE

  const floatingBoxStyle = {
    position: 'absolute',
    height: '51%',
    width: '25%',
    margin: 'auto',
    overflow: 'auto',
    top: '0', left: '0', bottom: '0', right: '0',
    zIndex: '1',
    backgroundColor: 'rgba(40, 44, 52, 0.77)',
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
    
  }

  const cardCountStyle = {
    color: 'rgba(255, 255, 255, 0.8)',
    textShadow: '#000 0px 0px 1px',  
    fontSize: '4rem'
  }

  return (<div style={floatingBoxStyle}>
            <div style={cardControlsStyle}>
              <div onClick={() => dispatch(modifyDeckCount(code, "+1"))} >
                <FontAwesomeIcon
                  style={incrementerStyle}
                  icon={faPlusCircle}
                  size={"3x"} />
              </div>
              <h2 style={cardCountStyle}>{count? count : 0}</h2>
              <div onClick={() => dispatch(modifyDeckCount(code, "-1"))}>
                <FontAwesomeIcon
                  style={incrementerStyle}
                  icon={faMinusCircle}
                  size={"3x"} />
              </div>
              </div>
          </div>)


  
  
}

    
    


export default CardControls;