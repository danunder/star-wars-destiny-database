import React from 'react';
import {clearOptions} from "../../redux/actions/setActions";
import { useDispatch, useSelector } from "react-redux";
import Option from './Option';
import Button from '../input/Button';

function OptionsMenu(props){

    const style = useSelector(state => state.style);
    const filterValues = useSelector(state => state.filterValues);
    const Options = useSelector(state => state.options);
    const sets = useSelector(state => state.sets);
    const formats = useSelector(state => state.formats);
    const dispatch = useDispatch();

    let show;

    if(Options){
        show={
            "right":"0",
            backgroundColor:style.navText,
            color:style.nav
        }
    }else{
        show={
            "right":"-100%",
            backgroundColor:style.navText,
            color:style.nav
        }
    }
  
    const Sort = [

        {
            name: "Affiliations",
            type: "affiliation_code",
            values:["hero", "villain", "neutral"]
        },
        {
            name: "Colors",
            type: "faction_code",
            values:["red", "blue", "yellow", "gray"]
        },
        {
            name: "Rarity",
            type: "rarity_name",
            values:["Starter", "Common", "Uncommon", "Rare", "Legendary"]
        },
        {
            name:"Health",
            type:"health",
            values:
                // [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 18]
                filterValues.health.sort((a, b) => a - b)
        },
        {
            name:"Cost",
            type:"cost",
            values: filterValues.cost.sort((a, b) => a - b)
        },
        {
            name:"Set",
            type:"set_name",
            values: sets.map(set => set.name)
        },
        {
            name:"Points",
            type:"points",
            values: filterValues.points.sort((a, b) => a - b).map(x => x.toString())
        },
        {
            name:"Type",
            type:"type_code",
            values:["character", "upgrade", "support", "event", "downgrade", "plot"]
        },
        {
            name:"Dice Sides",
            type:"sides",
            values:["RD", "Sh","MD", "ID", "Dc","Dr", "F", "R", "Sp","-","+"]

        },
        {
            name:"Formats",
            type:"formats",
            values: formats.map(frmt => frmt.name)
        },
        {
            name: "Restricted",
            type:"restricted",
            values:["restricted"]
        },
        {
            name: "Balanced",
            type:"balanced",
            values:["balanced"]
        },
        {
            name: "Subtypes",
            type: "subtypes",
            values: filterValues.subtypes.sort((a, b) => a - b)
        }

    ];


    let options = Sort.map((srt, idx)=>
        <Option key={idx} opt={srt}/>
    );


    return (
        <div className={"options"} style={show}>
            <div className={"top"}><h1 style={{color:style.nav}}>Filter Cards </h1><Button handleClick={() => dispatch(clearOptions())} text={"Clear Search Query"}/></div>
            <div className={"wrapper"}>
                {options}
            </div>

        </div>
    )
}







export default OptionsMenu;
