import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart, faCircle, faTimes} from '@fortawesome/free-solid-svg-icons';
import {setSort} from "../../redux/actions/setActions";
import { useDispatch, useSelector } from "react-redux";

function SortTag(props){
    const [hover, setHover] = React.useState(false);
    const style =useSelector(state=>state.style);
    const dispatch = useDispatch();

    const handleSort = (prop, val) => {
        dispatch(setSort(prop, val))
    };

    let styler;

    if(hover){
        styler = {
            color:style.body,
            backgroundColor:style.nav
        };
    }else{
        styler = {
            color:style.nav,
            backgroundColor:style.body
        };
    }

    const hoverChange = ()=>{
        setHover(!hover)
    };

    const numberCheck = (prop, val) => {
        if(val==="RD"){
            return <span><span className='icon icon-ranged'></span> Ranged</span>
        }else if(val==="Sh"){
            return <span><span className='icon icon-shield'></span> Shield</span>
        }else if(val==="MD"){
            return <span><span className='icon icon-melee'></span> Melee</span>
        }else if(val==="ID"){
            return <span><span className='icon icon-indirect'></span> Indirect</span>
        }else if(val==="Dc"){
            return <span><span className='icon icon-discard'></span> Discard</span>
        }else if(val==="Dr"){
            return <span><span className='icon icon-disrupt'></span> Disrupt</span>
        }else if(val==="F"){
            return <span><span className='icon icon-focus'></span> Focus</span>
        }else if(val==="Sp"){
            return <span><span className='icon icon-special'></span> Special</span>
        }else if(val==="R"){
            return <span><span className='icon icon-resource'></span> Special</span>
        }else if(val==="-"){
            return <span><span className='icon icon-blank'></span> Blank</span>
        }else if(val==="+"){
            return <span>Modified</span>
        }else if(prop === "health"){
            return <span><FontAwesomeIcon icon={faHeart}/> {val}</span>
        }else if(prop === "points"){
            return <span><FontAwesomeIcon icon={faCircle}/> {val}</span>
        }else if(prop === "cost"){
            return <span><span className='icon icon-resource' /> {val}</span>
        }else if (isNaN(val)) {
            return val.charAt(0).toUpperCase() + val.substring(1)
        } else {
            return val
        }
    };

    return (
        <div className={"itm"}
            onClick={() => handleSort(props.prop, props.val)}
            style={styler}
            onMouseEnter={hoverChange}
            onMouseLeave={hoverChange}>
            {numberCheck(props.prop, props.val)} <FontAwesomeIcon icon={faTimes} />
        </div>
    )
}



export default SortTag;