import React, {useState} from 'react';
import {changeLimit} from "../../redux/actions/setActions";
import Card from '../card/Card';
import { useSelector, useDispatch } from "react-redux";
import Button from '../input/Button';
import { Link } from 'react-router-dom';

// This component handles sorting and filtering of card data
function List() {

    const [sort, setSort] = useState([]);
    const [load] = useState(true);
    const [error] = useState(false);

    const itemLimit = useSelector(state=>state.itemLimit);
    const sorted = useSelector(state=>state.sorted);
    const name = useSelector(state => state.name);
    const cardText = useSelector(state => state.cardText);
    // populated from API call
    const cards = useSelector(state=>state.cards);
    const formats = useSelector(state => state.formats);
    const deck = useSelector(state => state.deck.cards);

    const dispatch = useDispatch();


    React.useEffect(() => {


        function sortObject() {

            let sortedList = cards;

            for (let p in sorted) {


                if (sorted[p].toggle) {

                    if (p === "points") {


                        sortedList = sortedList.filter(crd => {
                            let ret = false;
                            if (crd.points !== null) {
                                let arrayPoints = crd.points.split("/");
                                for (let i = 0; i < sorted.points.val.length; i++) {
                                    for (let v = 0; v < arrayPoints.length; v++) {
                                        if (arrayPoints[v] === sorted.points.val[i]) {

                                            ret = true;
                                        }
                                    }
                                }
                            }
                            return (ret ? crd : null)

                        });


                    } else if (p === "sides") {

                        for (let i = 0; i < sorted.sides.val.length; i++) {

                            sortedList = sortedList.filter(crd => {
                                let ret = false;
                                if (crd.hasOwnProperty('sides')) {
                                    for (let v = 0; v < crd.sides.length; v++) {
                                        if (crd.sides[v].includes(sorted.sides.val[i])) {
                                            ret = true
                                        }
                                    }
                                }
                                return (ret ? crd : null)

                            });
                        }


                    }
                    else if (p === "subtypes") {
                        sortedList = sortedList.filter(crd => {
                            let ret = false;
                            for(let i=0; i<sorted.subtypes.val.length; i++){
                                if (crd.subtypes && crd.subtypes.map(x => x.name).includes(sorted.subtypes.val[i])){
                                    ret=true;
                                }
                            }
                            return (ret ? crd : null);
                        });
                    
                        
                    } else if (p === 'formats') {
                        sortedList = sortedList.filter(crd => {
                            let ret = false;
                            for (let i = 0; i < formats.length; i++) {
                                for (let q = 0; q < sorted.formats.val.length; q++) {
                                    if (formats[i].name === sorted.formats.val[q] && formats[i].data.sets.includes(crd.set_code)) {
                                        ret = true;
                                    }
                                }
                            }
                            return (ret ? crd : null);
                        });
                    }else if (p === 'restricted') {
                        sortedList = sortedList.filter(crd => {
                            let ret = false;
                            for(let y=0; y<formats.length; y++){
                                for (let i = 0; i < formats[y].data.restricted.length; i++) {
                                    if(formats[y].data.restricted[i]===crd.code&&sorted.restricted.val.includes("restricted")){
                                        ret=true
                                    }
                                }
                            }

                            return (ret ? crd : null);
                        });
                    }else if (p === 'balanced') {
                        sortedList = sortedList.filter(crd => {
                            let ret = false;
                            for(let y=0; y<formats.length; y++){
                                for (let i in formats[y].data.balance) {
                                    if(i===crd.code&&sorted.balanced.val.includes("balanced")){
                                        ret=true
                                    }
                                }
                            }

                            return (ret ? crd : null);
                        });
                    }else if (p === 'keywords') {
                        sortedList = sortedList.filter(crd => {
                            let ret = false;
                            for(let i=0; i<sorted.keywords.val.length; i++){
                                if(crd.text!==null&&crd.text.includes(sorted.keywords.val[i])){
                                    ret=true;
                                }
                            }
                            return (ret ? crd : null);
                        });
                    } else {
                        sortedList = sortedList.filter(crd => {

                            return sorted[p].val.includes(crd[p])

                        });
                    }
                }
            }


            if (name !== '') {
                sortedList = sortedList.filter(crd => {
                    if (crd.name.includes(name)) {
                        return true
                    } else if (crd.name.toLowerCase().includes(name)) {
                        return true
                    } else return crd.name.toUpperCase().includes(name);
                });
            }

            if (cardText !== '') {
                sortedList = sortedList.filter(crd => {
                    if (crd.text&&crd.text.includes(cardText)) {
                        return true
                    } else if (crd.text&&crd.text.toLowerCase().includes(cardText)) {
                        return true
                    } else return crd.text&&crd.text.toUpperCase().includes(cardText);
                });
            }



            setSort(sortedList)
        }

        sortObject();

        return () => {
            sortObject();
        }

    }, [load, name, cardText, sorted, cards, formats]);


    let cardEle;

    if (sort.length !== 0) {
        cardEle = sort.slice(0,itemLimit).map((crd, idx) =>


            <Link to={"/card/" + crd.code} key={idx} className={"cardFlop"}>

                <Card name={crd.name} bod={true} imagesrc={crd.imagesrc} code={crd.code} deckLimit={crd.deck_limit} deckCount={deck[crd.code]? deck[crd.code]:0}
                      loadColor={"#343740"}/>
            </Link>
        );
    } else if (!load && !error) {
        cardEle = <h1>No cards in search</h1>;
    } else if (load && !error) {
        cardEle = <h1>Fetching Cards...</h1>;
    } else if (load && error) {
        cardEle = <h1>Loading Cards failed. Refresh page...</h1>;
    }


    const button = () => {
        if (itemLimit < sort.length && sort.length > 10) {
            return <Button handleClick={() => dispatch(changeLimit())} text={"Load More"}/>
        }
    };


    return (

        <div className={"list"}>
            <div className={"wrapper"}>
                {cardEle}
            </div>
            {button()}
        </div>
    );
}


export default List;
