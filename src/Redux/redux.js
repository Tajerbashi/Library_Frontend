const redux = require('redux');

const createStore = redux.legacy_createStore

const initialState = {
    counter: 0
}

const rootReducer = (state = initialState, action) => {
    if (action.type === 'INC') {
        return ({
            ...state,
            counter: state.counter + 2
        });
    } else if (action.type === 'ADD') {
        return ({
            ...state,
            counter: state.counter + action.value
        });
    } else if (action.type === 'DEL') {
        return ({
            ...state,
            counter: state.counter - action.value
        });
    }
    return state;
}

const store = createStore(rootReducer);

// console.log(store.getState());



store.dispatch({
    type: 'INC',
});

store.dispatch({
    type: 'ADD',
    value: 10
});

store.dispatch({
    type: 'DEL',
    value: 1
});

console.log(store.getState());