import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

const initial = {
    message: 'START',
    data: [],
    number: [],
    result: 0
};

function counterReducer (state = initial, action) {
    switch (action.type) {
        case 'ENTER':
            calcReduce(state, action);
        case 'RESET':
            return {
                message: 'RESET',
                data: [],
                number: [],
                result: 0
            };
        default:
            return state;
    }
}

function calcReduce(state, action) {
   let data = [...state.data];
   let letter = action.value;
   data.unshift(letter);

   let newNum = letter.replace(/[^0-9]/g, '');
   let number = [...state.number];
   number.unshift(newNum);

   let result = (state.result * 1) + (newNum * 1);

   return {
       message: 'ENTER',
       data: data,
       number: number,
       result: result
   }
}

export function enterCalc(letter) {
   return {
       type: 'ENTER',
       value: letter
   }
}

export function initStore(state = initial) {
    return createStore(counterReducer, state, applyMiddleware(thunkMiddleware));
}
