import React from 'react';
import {toggleOptions, clearOptions, toggleStyles, toggleDeck } from "../../redux/actions/setActions";
import { useDispatch, useSelector } from "react-redux";
import Search from '../input/Search';
import TextSearch from '../input/TextSearch';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch, faTimes, faPalette, faBoxOpen} from '@fortawesome/free-solid-svg-icons';

function Nav() {

    const options = useSelector(state=>state.options);
    const styles = useSelector(state=>state.styles);
    const style = useSelector(state => state.style);
    const deck = useSelector(state => state.deck.show)

    const dispatch = useDispatch();

    let styler= {
        color:style.navText,
        backgroundColor:style.nav
    };



    return (


        <nav style={styler}>
            <div className={"logo"} >
                {(style.name!==undefined)?<img alt={"logo"} src={require("./../../assets/"+style.name.toLowerCase()+"logo.svg")} onClick={()=>dispatch(clearOptions())}/>:<img alt={"logo"} src={require("./../../assets/convergencelogo.svg")} onClick={()=>dispatch(clearOptions())}/>}
                <h5>Deckbuilder</h5>
            </div>
            <Search />
            <TextSearch />
            <div className={"ham"} >

                {!deck && <FontAwesomeIcon icon={faBoxOpen} size="2x" onClick={() => dispatch(toggleDeck())}/>}
                {deck && <FontAwesomeIcon icon={faTimes} size="2x" onClick={() => dispatch(toggleDeck())}/>}
                {/* {!styles && <FontAwesomeIcon icon={faPalette} size="2x" onClick={() => dispatch(toggleStyles())}/>}
                {styles && <FontAwesomeIcon icon={faTimes} size="2x" onClick={() => dispatch(toggleStyles())}/>} */}

                {!options && <FontAwesomeIcon icon={faSearch} size="2x" onClick={() => dispatch(toggleOptions())}/>}
                {options && <FontAwesomeIcon icon={faTimes} size="2x" onClick={() => dispatch(toggleOptions())}/>}

            </div>

        </nav>


    );
}




export default Nav;
