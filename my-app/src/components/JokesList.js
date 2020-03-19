import React from 'react';
import { connect } from "react-redux";

const JokesList = props => {
    console.log("******this is props", props)
    return (
        <>
        {props.error ? (
            <div className="error">{props.error}</div>
        ) : (
            <div className="joke-text">{props.value}</div>
        )}
        </>
    );
};

const mapStateToProps = state => {
    return {
        value: state.joke,
        error: state.error
    };
};

export default connect(mapStateToProps, {})(JokesList);