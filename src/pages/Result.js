import React, {Component} from 'react';
import {connect} from "react-redux";
import DefaultButton from "../components/DefaultButton";
import {setQuestionNumber} from "../redux/meta-actions";

const mapStateToProps = (state) => ({
    questionNumber: state.questionNumber,
    history: state.history
});

const mapDispatchToProps = (dispatch) => ({
    setQuestionNumber: questionNumber => dispatch(setQuestionNumber(questionNumber))
});

class connectedResult extends Component {
    render() {
        return (
            <main className="Result">
                <h1>Result</h1>
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
