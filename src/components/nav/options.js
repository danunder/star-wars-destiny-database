import React, {useEffect} from 'react';
import {clearOptions} from "../../redux/actions/setActions";
import { useDispatch, useSelector } from "react-redux";
import Option from './Option';
import Button from '../input/Button';

function Options(props){

    const style = useSelector(state => state.style);
    const cards = useSelector(state => state.cards);
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

    // this should be moved into state store!
    const values = {
        health: [],
        cost: [],
        points: [],
        subtypes: []
    }
            
    useEffect(() => {
        
        cards.forEach(card => {
            // if (card.health) {
            //     if (!values.health.includes(card.health)){
            //         values.health.push(card.health)
            //     }
            // }
            if (card.cost) {
                if (!values.cost.includes(card.cost)) {
                    values.cost.push(card.cost)
                }
            }
            // if (card.points) { values.points.includes(card.points) ? null : values.points.push(card.points) }
            // if (card.subtypes) { values.subtypes.includes(card.subtypes) ? null : values.subtypes.push(card.subtypes) }
            
        });
    }, [cards])

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
            values:[4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
        },
        {
            name:"Cost",
            type:"cost",
            values: values.cost.sort((a, b) => a - b)
        },
        {
            name:"Set",
            type:"set_name",
            values: sets.map(set => set.name)
        },
        {
            name:"Points",
            type:"points",
            values:["4","5","6","7","8","9","10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28"]
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







export default Options;
