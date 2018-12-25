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

const radioButtonDiv = {
    width: '100%',
    paddingLeft: '10%',
    paddingTop: 10
};

const radioButtonLabelText =  {
    fontSize: 'calc(8px + 2vmin)',
    color: 'white',
    marginTop: 0,
    marginBottom: 0,
    textAlign: 'left'
};

class connectedRadioButtonGroup extends Component {
    render() {
        return (
            <div style={radioButtonDiv}>
                <p style={radioButtonLabelText}>{`${this.props.headerText}:`}</p>
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
