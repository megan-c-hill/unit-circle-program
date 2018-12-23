import React, {Component} from 'react';
import {connect} from "react-redux";

const mapStateToProps = state => {
    console.log('state', state);
    return {
        questionNumber: state.questionNumber
    };
};

class connectedQuestion extends Component {
    render() {
        console.log('this.props', this.props);
        return (
            <div className="Question">
                <h1>Question {this.props.questionNumber}</h1>
            </div>
        );
    }
}

const Question = connect(mapStateToProps)(connectedQuestion);
export default Question;
