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
    styles:false,
    deck: {
        cards: [],
        description: "",

    }

};


const rootReducer = (state = initState, action) => {

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

    if(action.type === 'TOGGLE_OPTIONS'){

        return{
            ...state,
            options:!state.options,
            styles:false
        }
    }

    if(action.type === 'TOGGLE_STYLES'){


        return{
            ...state,
            styles:!state.styles,
            options:false
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
        return{
            ...state,
            cards:action.cards
        }
    }

    if (action.type === 'SET_FILTER_VALUES') {
        const filterValues = {
            health: [],
            cost: [],
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