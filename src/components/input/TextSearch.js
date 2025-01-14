import React from 'react';
import { setCardText } from "../../redux/actions/setActions";
import { useSelector, useDispatch } from "react-redux";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


function TextSearch(props) {

    

    const style =useSelector(state=>state.style);

    const cardText = useSelector(state => state.cardText);
    
    const dispatch = useDispatch();

    const handleChange = event => {
        dispatch(setCardText(event.target.value));
    };


    let sty = {
        backgroundColor: style.navText,
        color: style.nav,

    };

    let sg = {
        color: 'black'
    };
    
    

    let close = (cardText!==""?<FontAwesomeIcon style={sg} icon={faTimes} onClick={()=>dispatch(setCardText(""))}/>:null);

    return (
        <div className={"searchContainer"}>
            <input style={sty} placeholder={`Filter cards by card text... `} value={cardText} onChange={handleChange}
                   className={"search "+style.name}/>
           
            {close}
        </div>

    );
}





export default TextSearch;
