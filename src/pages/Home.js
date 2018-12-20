import React, {Component} from 'react';
import {connect} from "react-redux";
import '../styles/Home.css';
import {setName} from "../actions/meta";

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
        setName: name => dispatch(setName(name))
    };
}

class connectedHome extends Component {
    handleChange(event) {
        console.log('event.target.value', event.target.value);
        this.props.setName(event.target.value);
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
                <form>
                    <div className="form-group">
                        <label className="label" htmlFor="name">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            value={name}
                            onChange={(event) => this.handleChange(event)}
                        />
                    <button type="submit" className="submit-button">
                        SAVE
                    </button>
                    </div>
                </form>
            </div>
        );
    }
}

const Home = connect(mapStateToProps, mapDispatchToProps)(connectedHome);
export default Home;
