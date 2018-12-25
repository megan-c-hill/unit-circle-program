import React, {Component} from 'react';
import {connect} from "react-redux";
import '../styles/Home.css';


const submitButtonStyle = {
    borderRadius: 15,
    padding: '20px',
    margin: '20px'
};

const buttonText = {
    color: '#282c34',
    fontSize: 'calc(5px + 2vmin)',
    padding: 0,
    margin: 0
};

const mapStateToProps = (state, ownProps) => ({
    action: () => ownProps.action(),
    text: ownProps.text
});

class connectedDefaultButton extends Component {
    render() {
        return (
            <button style={submitButtonStyle} onClick={() => this.props.action()}>
                <p style={buttonText}>{this.props.text}</p>
            </button>
        );
    }
}

const DefaultButton = connect(mapStateToProps)(connectedDefaultButton);
export default DefaultButton;
