import React, {Component} from 'react';
import {connect} from "react-redux";
import '../styles/Home.css';

const mapStateToProps = (state, ownProps) => ({
    action: () => ownProps.action(),
    value: ownProps.value,
    checked: ownProps.checked
});

class connectedRadioButtonRow extends Component {
    render() {
        return (
            <div className="radio-button-row">
                <input type="radio"
                       value={this.props.value}
                       checked={this.props.checked}
                       onChange={(event) => this.props.action(event.target.value)}
                />
                <label className="radio-button-txt">
                    {this.props.value}
                </label>
            </div>
        );
    }
}

const RadioButtonRow = connect(mapStateToProps)(connectedRadioButtonRow);
export default RadioButtonRow;
