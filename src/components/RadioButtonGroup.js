import React, {Component} from 'react';
import {connect} from "react-redux";
import '../styles/Home.css';
import RadioButtonRow from "./RadioButtonRow";

const mapStateToProps = (state, ownProps) => ({
    action: (value) => ownProps.action(value),
    comparison: ownProps.comparison,
    headerText: ownProps.headerText,
    values: ownProps.values
});

class connectedRadioButtonGroup extends Component {
    render() {
        return (
            <div className="radio-button-div">
                <p className="radio-button-label-txt">{`${this.props.headerText}:`}</p>
                {this.props.values.map((value) =>
                    <RadioButtonRow
                        key={`key-${value}`}
                        value={value}
                        checked={this.props.comparison === value}
                        action={() => this.props.action(value)}
                    />)
                }
            </div>
        );
    }
}

const RadioButtonGroup = connect(mapStateToProps)(connectedRadioButtonGroup);
export default RadioButtonGroup;
