const initState = {
    // populated from API
    cards: [],
    filterValues: {
        health: [],
        cost: [],
        points: [],
        subtypes: []
    },
    formats:[],
    sets:[],
    itemLimit: 10,
    // options in sort panel
    sorted:{
        rarity_name: { toggle: false, val: [] },
        affiliation_code: { toggle: false, val: [] },
        type_code: { toggle: false, val: [] },
        faction_code: { toggle: false, val: [] },
        set_name: { toggle:false, val:[] },
        health: { toggle: false, val: [] },
        cost: { toggle: false, val: [] },
        points: { toggle: false, val: [] },
        sides: { toggle: false, val:[] },
        formats: { toggle: false, val:[] },
        restricted: { toggle: false, val:[] },
        balanced: { toggle: false, val: [] },
        subtypes: {toggle: false, val: [] },
        keywords: { toggle: false, val:[] }
    },
    style:JSON.parse(localStorage.getItem('localStyle')) || '',
    //variables for search strings
    name: "",
    cardText: "",
    options:false,
    styles: false,
    
    deck: {
        show: false,
        cards: {},
        name: "",
        description: ""
        }
        
    

    

};


const rootReducer = (state = initState, action) => {

    if (action.type === 'MODIFY_DECK_COUNT') {
        let deck = state.deck;
        const code = action.code;
        const card = state.cards.filter(card => card.code === code)[0];
        
        if (action.val === "+1") {
            // console.log('adding card ' + code + ' with limit of ' + card.deck_limit)
            if (deck.cards[code]) {
                deck.cards[code].count += 1;
            } else if (!deck.cards[code]) {
                deck.cards[code] = card;
                deck.cards[code].count = 1;
            }
        }
        if (deck.cards[code] && action.val === "-1") {
            deck.cards[code].count -= 1;
            if (deck.cards[code].count === 0) {
                delete deck.cards[code]
            }
        }
            
        return {
            ...state,
            deck: {
                ...state.deck,
                cards: deck.cards
            }
        }
    }
    if (action.type === 'INCREASE_LIMIT') {

        let val = state.itemLimit;

        val = val + 10;


        return {
            ...state,
            itemLimit: val
        }
    }

    if (action.type === 'SET_SORT') {

        let orgArray = state.sorted[action.prop].val;

        if(orgArray.includes(action.val)){
            let ind = orgArray.indexOf(action.val);
            orgArray.splice(ind,1);

        }else{
            orgArray.push(action.val)
        }

        let togg = orgArray.length > 0;

        return {
            ...state,
            itemLimit:10,
            sorted:{
                ...state.sorted,
                [action.prop]: {
                    toggle: togg,
                    val: orgArray
                }
            }

        }

    }

    if(action.type === 'SET_NAME'){
        return{
            ...state,
            name:action.name
        }
    }

    if(action.type === 'SET_CARD_TEXT'){
        return{
            ...state,
            cardText:action.cardText
        }
    }

    if(action.type === 'SET_STYLE'){

        document.documentElement.style.backgroundColor=action.style.body;

        return{
            ...state,
            style:action.style
        }
    }

     if(action.type === 'TOGGLE_DECK'){

        return{
            ...state,
            deck: {
                ...state.deck,
                show: !state.deck.show
            },
            styles: false,
            options: false,
        }
     }
    
    if(action.type === 'TOGGLE_OPTIONS'){

        return{
            ...state,
            options:!state.options,
            styles: false,
            deck: {
                ...state.deck,
                show: false
            }
        }
    }

    if(action.type === 'TOGGLE_STYLES'){


        return{
            ...state,
            styles:!state.styles,
            options: false,
            deck: {
                ...state.deck,
                show: false
            }
        }
    }

    if(action.type === 'CLEAR_OPTIONS'){

        return{
            ...state,
            itemLimit: 10,
            sorted:{
                rarity_name: {toggle: false, val: []},
                affiliation_code: {toggle: false, val: []},
                type_code: {toggle: false, val: []},
                faction_code: {toggle: false, val: []},
                set_name:{toggle:false,val:[]},
                health: {toggle: false, val: []},
                cost: {toggle: false, val: []},
                points: {toggle: false, val: []},
                sides:{toggle: false, val:[]},
                formats:{toggle:false, val:[]},
                restricted:{toggle:false,val:[]},
                balanced: { toggle: false, val: [] },
                subtypes: {toggle: false, val: []},
                keywords:{toggle:false,val:[]}
            },
            name: "",
            cardText: "",
            options:false,
            styles:false
        }
    }

    if(action.type === 'SET_CARDS'){
       
        return {
            ...state,
            cards:action.cards
        }
    }

    if (action.type === 'SET_FILTER_VALUES') {
        const filterValues = {
            health: [],
            cost: [0],
            points: [],
            subtypes: []
        }
        action.cards.forEach(card => {
            if (card.health && !filterValues.health.includes(card.health)) {
                filterValues.health.push(card.health)
            }
            if (card.cost && !filterValues.cost.includes(card.cost)) {
                filterValues.cost.push(card.cost)
            }
            if (card.points) {
                const pointValues = card.points.split("/");
                pointValues.forEach(pointValue => {
                    if (!filterValues.points.includes(parseInt(pointValue))) {
                        filterValues.points.push(parseInt(pointValue))
                    }
                })
            }
            if (card.subtypes) {
                card.subtypes.forEach(subtype => {
                    if (!filterValues.subtypes.includes(subtype.name)) {
                        filterValues.subtypes.push(subtype.name)
                    }
                })
            }
        })
        filterValues.subtypes.sort()
        return{
            ...state,
            filterValues: filterValues
        }
    }

    if(action.type === 'SET_FORMATS'){
        return{
            ...state,
            formats:action.fmts
        }
    }

    if(action.type === 'SET_SETS'){
        return{
            ...state,
            sets:action.sts
        }
    }


    return state;
};


export default rootReducer;