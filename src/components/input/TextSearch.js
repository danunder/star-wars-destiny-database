import React, {useState} from 'react';
import { setName, setCardText } from "../../redux/actions/setActions";
import { useSelector, useDispatch } from "react-redux";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';

function TextSearch(props) {

    // we don't do this in REDUX. no local state right? DO SOME READING.
    const { searchType, setSearchType } = useState("card name")

    const style =useSelector(state=>state.style);

    const cardText = useSelector(state => state.cardText);
    const name = useSelector(state=>state.name);
    const dispatch = useDispatch();

    const handleChange = event => {
        dispatch(setCardText(event.target.value));
    };


    let sty = {
        backgroundColor: style.navText,
        color: style.nav,

    };

    let sg = {
        color: style.nav
    };
    
    

    let close = (cardText!==""?<FontAwesomeIcon style={sg} icon={faTimes} onClick={()=>dispatch(setCardText(""))}/>:null);

    return (
        <div className={"searchContainer"}>
            <input style={sty} placeholder={`Search Card by ${searchType}...`} value={cardText} onChange={handleChange}
                   className={"search "+style.name}/>
            {close}
        </div>

    );
}





export default TextSearch;
