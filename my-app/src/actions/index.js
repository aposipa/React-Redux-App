import axios from 'axios';

export const FETCH_DATA = 'FETCH_DATA';
export const UPDATE_JOKES = 'UPDATE_JOKES';
export const SET_ERROR = 'SET_ERROR';


export const getData = () => dispatch => {
    dispatch({ type: FETCH_DATA });
    axios.get('http://api.icndb.com/jokes/random')
    .then(response => {
        console.log("this is api call log:", response);
        dispatch({ type: UPDATE_JOKES, payload: response.data.value.joke});
    })
    .catch(error => {
        console.log("error fetching data", error);
        dispatch({ type: SET_ERROR, payload: "Error fetching data from API"});
    });
};