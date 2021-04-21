import React from 'react';
import {
    Link
} from "react-router-dom";
import Card from './Card';
import CardInfo from './CardInfo';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSpinner, faExclamationCircle, faTimes, faPlusCircle, faMinusCircle} from '@fortawesome/free-solid-svg-icons';
import {useSelector, useDispatch } from "react-redux";
import { modifyDeckCount } from '../../redux/actions/setActions';
import Button from '../input/Button';


function CardPage(props) {

    const [card, setCard] = React.useState("");

    const [rend, rendElement] = React.useState({
        crd: false,
        load: true,
        error: false
    });

    const style =useSelector(state=>state.style);
    const cards = useSelector(state => state.cards);
    const deck = useSelector(state => state.deck.cards)
    const dispatch = useDispatch();

    React.useEffect(() => {


            function handleStatusChange(status) {
                rendElement({
                    crd: true,
                    load: false,
                    error: false
                });
                setCard(status)
            }


            let cardMain = cards.filter(crd => {
                return props.match.params.id === crd.code;
            });

            handleStatusChange(cardMain[0]);


        }

        ,
        [props.match.params.id, cards]
    )
    ;

    const code = card.code;
    const incrementer = {
        margin: 10,
        
        
    }
    

    return (
        <div className={props.match.params.id ? "cardPageWrapper" : undefined} >

            <div className={"close"} style={{ backgroundColor: style.navText, color: style.nav }}>
                <Link to={"/"} ><FontAwesomeIcon icon={faTimes} size={"4x"}/></Link>
                
            </div>

            {rend.load && <FontAwesomeIcon icon={faSpinner} spin size={"lg"} style={{color: style.loadColor}}/>}
            {rend.error && <FontAwesomeIcon icon={faExclamationCircle} style={{color: "red"}} size={"6x"}/>}

            {rend.crd &&
                <Card name={card.name} bod={false} imagesrc={card.imagesrc} code={card.code} loadColor={"white"} />}
            <div className={"deckControls"}>
                <h2 className={"cardCount"}>{deck[code]? deck[code] : 0}</h2>
                <div
                    style={{zIndex: 1}}
                    onClick={() => dispatch(modifyDeckCount(code, "+1"))} >
                    <FontAwesomeIcon
                        style={incrementer }
                        icon={faPlusCircle}
                        size={"4x"} />
                </div>
                <div onClick={() => dispatch(modifyDeckCount(code, "-1"))}>
                <FontAwesomeIcon
                    
                    style={incrementer}
                    icon={faMinusCircle}
                        size={"4x"} />
                    </div>
            </div>
            {code && <CardInfo crd={card} code={code}/>}

        </div>
    )
}

export default CardPage;