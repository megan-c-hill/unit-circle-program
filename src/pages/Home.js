import React, {Component} from 'react';
import {connect} from "react-redux";
import '../styles/Home.css';
import {setFunctions, setHistory, setHomePageFormComplete, setName, setRange} from "../redux/meta-actions";
import {allRanges} from "../constants/ranges";
import {allFunctions} from "../constants/functions";
import RadioButtonGroup from "../components/RadioButtonGroup";
import DefaultButton from "../components/DefaultButton";

const mapStateToProps = (state) => ({
    allFieldsComplete: state.functions && state.name && state.name !== '' && state.range,
    functions: state.functions,
    homePageFormComplete: state.homePageFormComplete,
    name: state.name,
    range: state.range
});

const mapDispatchToProps = (dispatch) => ({
    setHistory: history => dispatch(setHistory(history)),
    setName: name => dispatch(setName(name)),
    setRange: range => dispatch(setRange(range)),
    setFunctions: functions => dispatch(setFunctions(functions)),
    setHomePageFormComplete: homePageFormComplete => dispatch(setHomePageFormComplete(homePageFormComplete))
});

class connectedHome extends Component {
    componentDidMount() {
        this.props.setHistory(this.props.history);
    }

    render() {
        console.log('Home', this.props);
        return (
            <main className="Home">
                <h1 className="home-header">
                    Home Page
                </h1>
                <div>
                    <div>
                        <label className="label">Name:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            value={this.props.name}
                            onChange={(event) => this.props.setName(event.target.value)}
                        />
                    </div>
                    <RadioButtonGroup
                        comparison={this.props.range}
                        headerText={'Range'}
                        values={allRanges}
                        action={(value) => this.props.setRange(value)}
                    />
                    <RadioButtonGroup
                        comparison={this.props.functions}
                        headerText={'Function'}
                        values={allFunctions}
                        action={(value) => this.props.setFunctions(value)}
                    />
                </div>
                {!this.props.homePageFormComplete ?
                    <p className="error-text">
                        {'You have not filled out all required fields'}
                    </p>
                    : null
                }
                <DefaultButton
                    action={() => {
                        if (this.props.allFieldsComplete) {
                            this.props.setHomePageFormComplete(true);
                            this.props.history.push('/question');
                        } else {
                            this.props.setHomePageFormComplete(false);
                        }
                    }}
                    text={'SAVE'}
                />
            </main>
        );
    }
}

const Home = connect(mapStateToProps, mapDispatchToProps)(connectedHome);
export default Home;
