import React, {Component} from 'react';
import {connect} from "react-redux";
import DefaultButton from "../components/DefaultButton";
import {setQuestionNumber} from "../redux/meta-actions";

const mapStateToProps = (state) => ({
    history: state.history,
    questionNumber: state.questionNumber
});

const mapDispatchToProps = (dispatch) => ({
    setQuestionNumber: questionNumber => dispatch(setQuestionNumber(questionNumber))
});

const mergeProps = (stateProps, dispatchProps) => ({
    history: stateProps.history,
    questionNumber: stateProps.questionNumber,
    setQuestionNumber: () => dispatchProps.setQuestionNumber(stateProps.questionNumber + 1)
});

class connectedQuestion extends Component {
    render() {
        console.log('Question', this.props);
        return (
            <main className="Question">
                <h1>Question {this.props.questionNumber}</h1>
                <DefaultButton
                    action={() => {
                        if(this.props.questionNumber < 10) {
                            this.props.setQuestionNumber()
                        } else {
                            this.props.history.push('/result');
                        }
                    }}
                    text={'Next Question'}
                />
            </main>
        );
    }
}

const Question = connect(mapStateToProps, mapDispatchToProps, mergeProps)(connectedQuestion);
export default Question;
