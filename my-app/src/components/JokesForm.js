import React from 'react';
import { connect } from "react-redux";
import { getData } from "../actions/index";

const JokesForm = props => {
    const handleGetData = event => {
        event.preventDefault();
        props.getData();
    };
    return (
        <>
        {props.isFetchingData ? (
            <div>Currently Fetching Data</div>
            ) : (
                <button onClick={handleGetData}>Get Joke</button>
            )}
        </>
    );
};
const mapStateToProps = state => {
    return {
        isFetchingData: state.isFetchingData
    };
};

export default connect(mapStateToProps, { getData })(JokesForm);