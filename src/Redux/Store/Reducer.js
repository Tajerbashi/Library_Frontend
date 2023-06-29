const initialState = {
    counter: 0,
    result: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                counter: state.counter + 1,
            }
        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter - 1,
            }
        case 'ADD':
            return {
                ...state,
                counter: state.counter + action.value,
            }
        case 'SUB':
            return {
                ...state,
                counter: state.counter - action.value,
            }
        case 'PUSH':
            return {
                ...state,
                result: state.result.concat(state.counter),
            }
        case 'CLEAR':
            return {
                ...state,
                result: state.result.length = [],
            }
        default: return state;
    }
};

export default reducer;