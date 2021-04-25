import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSpinner, faExclamationCircle, faCircle} from '@fortawesome/free-solid-svg-icons';
import { useSelector } from "react-redux";
import CardControls from '../card/CardControls';
import { Link } from 'react-router-dom';

export default function SmallCard(props) {

    const { name, imagesrc, code } = props;

    const [display, setDisplay] = useState(false)

    const deckImageStyle = {
    
    height: '250px',
        width: 'auto',
        boxShadow: display ? '0px 0px 5px white' : 'none',
        borderRadius: '10px',
        margin: '1rem',
        padding: '0'
  }

    

    return (
        
            <Link to={"/card/" + code} style={{ position: 'relative' }}
            onMouseEnter={() => setDisplay(!display)}
            onMouseLeave={() => setDisplay(!display)}>
                <img
                    alt={name}
                    src={imagesrc}
                    style={deckImageStyle}
                />
                <CardControls code={code} display={display}/>
            </Link>
                    

            


        
    )
}


