import React, {Component} from 'react';
import {connect} from "react-redux";

const mapStateToProps = state => ({
    questionNumber: state.questionNumber
});

class connectedQuestion extends Component {
    render() {
        return (
            <main className="Question">
                <h1>Question {this.props.questionNumber}</h1>
            </main>
        );
    }
}

const Question = connect(mapStateToProps)(connectedQuestion);
export default Question;
