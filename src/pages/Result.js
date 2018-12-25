import React, {Component} from 'react';
import {connect} from "react-redux";
import DefaultButton from "../components/DefaultButton";
import {setQuestionNumber} from "../redux/meta-actions";

const mapStateToProps = (state) => ({
    questionNumber: state.questionNumber,
    numberCorrect: state.numberCorrect,
    history: state.history
});

const mapDispatchToProps = (dispatch) => ({
    setQuestionNumber: questionNumber => dispatch(setQuestionNumber(questionNumber))
});

const resultText = {
    fontSize: 'calc(3px + 2vmin)',
    color: 'white',
    margin: 0
};

class connectedResult extends Component {
    render() {
        return (
            <main className="Result">
                <h1>Result</h1>
                <p style={resultText}>{`${this.props.numberCorrect} / ${this.props.questionNumber}`} </p>
                <DefaultButton
                    action={() => this.props.history.push('/')}
                    text={'Retake'}
                />
            </main>
        );
    }
}

const Result = connect(mapStateToProps, mapDispatchToProps)(connectedResult);
export default Result;
