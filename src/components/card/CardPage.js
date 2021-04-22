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
import CardControls from './CardControls';


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
    
    

    return (
         <Link to={"/"} className={props.match.params.id ? "cardPageWrapper" : undefined} >

            <div className={"close"} style={{ backgroundColor: style.navText, color: style.nav }}>
               <FontAwesomeIcon icon={faTimes} size={"4x"}/>
                
            </div>

            {rend.load && <FontAwesomeIcon icon={faSpinner} spin size={"lg"} style={{color: style.loadColor}}/>}
            {rend.error && <FontAwesomeIcon icon={faExclamationCircle} style={{color: "red"}} size={"6x"}/>}

            {rend.crd &&
                <Card name={card.name} bod={false} imagesrc={card.imagesrc} code={card.code} loadColor={"white"} />}
                
            
            { code && <div>
                
                            <CardControls code={code} display={true} />
                            <CardInfo crd={card} code={code} />
                </div>
                }

        </Link>
    )
}

export default CardPage;