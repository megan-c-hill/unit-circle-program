import React, {Component} from 'react';
import {connect} from "react-redux";
import '../styles/Home.css';

const mapStateToProps = (state, ownProps) => ({
    action: () => ownProps.action(),
    value: ownProps.value,
    checked: ownProps.checked
});

const radioButtonRow = {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start'
};

const radioButtonText = {
    fontSize: 'calc(8px + 1vmin)',
    paddingLeft: 3,
    color: 'white',
    marginTop: 0,
    marginBottom: 0
};

class connectedRadioButtonRow extends Component {
    render() {
        return (
            <div style={radioButtonRow}>
                <input type="radio"
                       value={this.props.value}
                       checked={this.props.checked}
                       onChange={(event) => this.props.action(event.target.value)}
                />
                <label style={radioButtonText}>
                    {this.props.value}
                </label>
            </div>
        );
    }
}

const RadioButtonRow = connect(mapStateToProps)(connectedRadioButtonRow);
export default RadioButtonRow;
