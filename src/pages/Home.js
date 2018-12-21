import React, {Component} from 'react';
import {connect} from "react-redux";
import '../styles/Home.css';
import {setFunctions, setName, setRange} from "../actions/meta";
import {NEGATIVE_DEGREES, NEGATIVE_RADIANS, POSITIVE_DEGREES, POSITIVE_RADIANS} from "../constants/ranges";
import {ALL_SIX_FUNC, SIN_AND_COS, SIN_COS_AND_TAN} from "../constants/functions";

const mapStateToProps = state => {
    console.log('state', state);
    return {
        functions: state.functions,
        name: state.name,
        range: state.range
    };
};

function mapDispatchToProps(dispatch) {
    return {
        setName: name => dispatch(setName(name)),
        setRange: range => dispatch(setRange(range)),
        setFunctions: functions => dispatch(setFunctions(functions))
    };
}

class connectedHome extends Component {
    handleNameChange(event) {
        console.log('event.target.value', event.target.value);
        this.props.setName(event.target.value);
    }

    handleRangeChange(event) {
        this.props.setRange(event.target.value);
    }

    handleFunctionsChange(event) {
        this.props.setFunctions(event.target.value);
    }

    render() {
        console.log('this.props', this.props);
        const {name} = this.props;
        return (
            <div className="Home">
                <header className="home-header">
                    <p>
                        Home Page
                    </p>
                </header>
                <div>
                    <div>
                        <label className="label" htmlFor="name">Name:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            value={name}
                            onChange={(event) => this.handleNameChange(event)}
                        />
                    </div>
                    <div className="radio-button-div">
                        <p className="radio-button-label-txt">{'Range:'}</p>
                        <div className="radio-button-row">
                            <input type="radio" name="positiveDegreesRange"
                                   value={POSITIVE_DEGREES}
                                   checked={this.props.range === POSITIVE_DEGREES}
                                   onChange={(event) => this.handleRangeChange(event)}
                            />
                            <label className="radio-button-txt">
                                {POSITIVE_DEGREES}
                            </label>
                        </div>
                        <div className="radio-button-row">
                            <input type="radio" name="negativeDegreesRange"
                                   value={NEGATIVE_DEGREES}
                                   checked={this.props.range === NEGATIVE_DEGREES}
                                   onChange={(event) => this.handleRangeChange(event)}
                            />
                            <label className="radio-button-txt">
                                {NEGATIVE_DEGREES}
                            </label>
                        </div>
                        <div className="radio-button-row">
                            <input type="radio" name="positiveRadiansRange"
                                   value={POSITIVE_RADIANS}
                                   checked={this.props.range === POSITIVE_RADIANS}
                                   onChange={(event) => this.handleRangeChange(event)}
                            />
                            <label className="radio-button-txt">
                                {POSITIVE_RADIANS}
                            </label>
                        </div>
                        <div className="radio-button-row">
                            <input type="radio" name="negativeRadiansRange"
                                   value={NEGATIVE_RADIANS}
                                   checked={this.props.range === NEGATIVE_RADIANS}
                                   onChange={(event) => this.handleRangeChange(event)}
                            />
                            <label className="radio-button-txt">
                                {NEGATIVE_RADIANS}
                            </label>
                        </div>
                    </div>
                    <div className="radio-button-div">
                        <p className="radio-button-label-txt">{'Functions:'}</p>
                        <div className="radio-button-row">
                            <input type="radio" name="sinAndCos"
                                   value={SIN_AND_COS}
                                   checked={this.props.functions === SIN_AND_COS}
                                   onChange={(event) => this.handleFunctionsChange(event)}
                            />
                            <label className="radio-button-txt">
                                {SIN_AND_COS}
                            </label>
                        </div>
                        <div className="radio-button-row">
                            <input type="radio" name="sinCosAndTan"
                                   value={SIN_COS_AND_TAN}
                                   checked={this.props.functions === SIN_COS_AND_TAN}
                                   onChange={(event) => this.handleFunctionsChange(event)}
                            />
                            <label className="radio-button-txt">
                                {SIN_COS_AND_TAN}
                            </label>
                        </div>
                        <div className="radio-button-row">
                            <input type="radio" name="allSixFunctions"
                                   value={ALL_SIX_FUNC}
                                   checked={this.props.functions === ALL_SIX_FUNC}
                                   onChange={(event) => this.handleFunctionsChange(event)}
                            />
                            <label className="radio-button-txt">
                                {ALL_SIX_FUNC}
                            </label>
                        </div>
                    </div>
                </div>
                <button className="submit-button">
                    <p className="button-text">SAVE</p>
                </button>
            </div>
        );
    }
}

const Home = connect(mapStateToProps, mapDispatchToProps)(connectedHome);
export default Home;
