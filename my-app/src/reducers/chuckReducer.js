import { FETCH_DATA, UPDATE_JOKES, SET_ERROR } from '../actions/index';

const initialState = {
   
    value: {
        joke: ""
    },
    isFetchingData: false,
    error: ""
};

export const chuckReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_DATA:
            return {
                ...state,
                isFetchingData: true,
                joke: action.payload
            };
        case UPDATE_JOKES:
            return {
                ...state, 
                isFetchingData: false,
                joke: action.payload
            };
        case SET_ERROR:
            return {
                ...state,
                isFetchingData: false,
                error: action.payload
            };
            default:
                return state;
    }
};