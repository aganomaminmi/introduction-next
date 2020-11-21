import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCVnxxVmdzeq5ghb3n5BQchPHT3jz6vYJ8",
    authDomain: "takanami-react-app.firebaseapp.com",
    databaseURL: "https://takanami-react-app.firebaseio.com",
    projectId: "takanami-react-app",
    storageBucket: "takanami-react-app.appspot.com",
    messagingSenderId: "911520889118",
    appId: "1:911520889118:web:a52b2d9b033669de28310f",
    measurementId: "G-T2VFB0PTTY"
};

let fireapp;
try {
    firebase.initializeApp(firebaseConfig);
} catch (error) {
    console.log(error.message);
}

// export default fireapp;


const initial = {
    message: 'START',
    count: 0
};

function counterReducer (state = initial, action) {
    switch (action.type) {
        case 'INCREMENT':
            return {
                message: 'INCREMENT',
                count: state.count + 1
            };
        case 'DECREMENT':
            return {
                message: 'DECREMENT',
                count: state.count - 1
            };
        case 'RESET':
            return {
                message: 'RESET',
                count: initial.count
            };
        default:
            return state;
    }
}

export function initStore(state = initial) {
    return createStore(counterReducer, state, applyMiddleware(thunkMiddleware));
}
