export const modifyDeckCount = (code, val) => {
    return {
        type: 'MODIFY_DECK_COUNT',
        code: code,
        val: val
    }
}

export const changeLimit = () => {
    return {
        type: 'INCREASE_LIMIT'
    }
};

export const setName = (name) => {
    return {
        type: 'SET_NAME',
        name:name
    }
};

export const setCardText = (cardText) => {
    return {
        type: 'SET_CARD_TEXT',
        cardText:cardText
    }
};

export const setSort = (prop, val) => {
    return {
        type: 'SET_SORT',
        prop: prop,
        val: val
    }
};
export const toggleDeck = () => {
    return {
        type: 'TOGGLE_DECK'
    }
};
export const toggleOptions = () => {
    return {
        type: 'TOGGLE_OPTIONS'
    }
};

export const toggleStyles = () => {
    return {
        type: 'TOGGLE_STYLES'
    }
};

export const setStyles = (style) => {
    return {
        type: 'SET_STYLE',
        style:style

    }
};

export const clearOptions = () =>{
    return {
        type: 'CLEAR_OPTIONS'
    }
};

export const setCards = (cards) =>{
    return {
        type: 'SET_CARDS',
        cards:cards
    }
};

export const setFilterValues = (cards) =>{
    return {
        type: 'SET_FILTER_VALUES',
        cards:cards
    }
};

export const setFormats = (fmts) =>{
    return {
        type: 'SET_FORMATS',
        fmts:fmts
    }
};

export const setSets = (sts) =>{
    return {
        type: 'SET_SETS',
        sts:sts
    }
};