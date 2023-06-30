import * as actiontype from './Actions'

const initialState = {
    counter: 0,
    result: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actiontype.LOGIN:
            return {
                ...state,
                counter: state.counter + 1,
            }
        case actiontype.SIGNUP:
            return {
                ...state,
                counter: state.counter - 1,
            }
        case actiontype.ADD:
            return {
                ...state,
                result: state.result.concat(state.counter),
            }
        case actiontype.CLEAR:
            return {
                ...state,
                result: state.result.length = [],
            }
        default: return state;
    }
};

export default reducer;