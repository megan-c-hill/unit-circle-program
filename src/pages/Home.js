import React, {Component} from 'react';
import {connect} from "react-redux";
import '../styles/Home.css';
import {setFunctions, setHomePageFormComplete, setName, setRange} from "../actions/meta";
import {NEGATIVE_DEGREES, NEGATIVE_RADIANS, POSITIVE_DEGREES, POSITIVE_RADIANS} from "../constants/ranges";
import {ALL_SIX_FUNC, SIN_AND_COS, SIN_COS_AND_TAN} from "../constants/functions";

const mapStateToProps = state => {
    console.log('state', state);
    return {
        allFieldsComplete: state.functions && state.name && state.name !== '' && state.range,
        functions: state.functions,
        homePageFormComplete: state.homePageFormComplete,
        name: state.name,
        range: state.range
    };
};

function mapDispatchToProps(dispatch) {
    return {
        goToNextPage: () => console.log('next page'),
        setName: name => dispatch(setName(name)),
        setRange: range => dispatch(setRange(range)),
        setFunctions: functions => dispatch(setFunctions(functions)),
        setHomePageFormComplete: homePageFormComplete => dispatch(setHomePageFormComplete(homePageFormComplete)),
        showErrorMessage: () => console.log('show error')
    };
}

class connectedHome extends Component {
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
                            onChange={(event) => this.props.setName(event.target.value)}
                        />
                    </div>
                    <div className="radio-button-div">
                        <p className="radio-button-label-txt">{'Range:'}</p>
                        <div className="radio-button-row">
                            <input type="radio" name="positiveDegreesRange"
                                   value={POSITIVE_DEGREES}
                                   checked={this.props.range === POSITIVE_DEGREES}
                                   onChange={(event) => this.props.setRange(event.target.value)}
                            />
                            <label className="radio-button-txt">
                                {POSITIVE_DEGREES}
                            </label>
                        </div>
                        <div className="radio-button-row">
                            <input type="radio" name="negativeDegreesRange"
                                   value={NEGATIVE_DEGREES}
                                   checked={this.props.range === NEGATIVE_DEGREES}
                                   onChange={(event) => this.props.setRange(event.target.value)}
                            />
                            <label className="radio-button-txt">
                                {NEGATIVE_DEGREES}
                            </label>
                        </div>
                        <div className="radio-button-row">
                            <input type="radio" name="positiveRadiansRange"
                                   value={POSITIVE_RADIANS}
                                   checked={this.props.range === POSITIVE_RADIANS}
                                   onChange={(event) => this.props.setRange(event.target.value)}
                            />
                            <label className="radio-button-txt">
                                {POSITIVE_RADIANS}
                            </label>
                        </div>
                        <div className="radio-button-row">
                            <input type="radio" name="negativeRadiansRange"
                                   value={NEGATIVE_RADIANS}
                                   checked={this.props.range === NEGATIVE_RADIANS}
                                   onChange={(event) => this.props.setRange(event.target.value)}
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
                                   onChange={(event) => this.props.setFunctions(event.target.value)}
                            />
                            <label className="radio-button-txt">
                                {SIN_AND_COS}
                            </label>
                        </div>
                        <div className="radio-button-row">
                            <input type="radio" name="sinCosAndTan"
                                   value={SIN_COS_AND_TAN}
                                   checked={this.props.functions === SIN_COS_AND_TAN}
                                   onChange={(event) => this.props.setFunctions(event.target.value)}
                            />
                            <label className="radio-button-txt">
                                {SIN_COS_AND_TAN}
                            </label>
                        </div>
                        <div className="radio-button-row">
                            <input type="radio" name="allSixFunctions"
                                   value={ALL_SIX_FUNC}
                                   checked={this.props.functions === ALL_SIX_FUNC}
                                   onChange={(event) => this.props.setFunctions(event.target.value)}
                            />
                            <label className="radio-button-txt">
                                {ALL_SIX_FUNC}
                            </label>
                        </div>
                    </div>
                </div>
                { !this.props.homePageFormComplete ?
                    <p className="error-text">
                        {'You have not filled out all required fields'}
                    </p>
                    : null
                }
                <button className="submit-button" onClick={() => {
                    console.log('onSubmit');
                    if (this.props.allFieldsComplete) {
                        this.props.setHomePageFormComplete(true);
                        this.props.goToNextPage()
                    } else {
                        this.props.setHomePageFormComplete(false);
                        this.props.showErrorMessage()
                    }
                }}>
                    <p className="button-text">SAVE</p>
                </button>
            </div>
        );
    }
}

const Home = connect(mapStateToProps, mapDispatchToProps)(connectedHome);
export default Home;
