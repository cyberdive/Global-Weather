import React from 'react';
import Form from './Form';
import { connect } from "react-redux";
import { AppActions } from "../types/actions";
import { bindActionCreators } from "redux";
import { ThunkDispatch } from "redux-thunk";
import WeatherDetails from './WeatherDetails';
import { Weather } from "../types/Weather";
import { City } from "../types/City";
import { Country } from "../types/Country";
import { getCountries } from "../actions/actions";

interface IState {
    countries: Country[],
    city?: City,
    weather: Weather
}

interface IDispatchProps {
    getCountries: () => void;
}


class Home extends React.Component<IDispatchProps, IState> {

    public state: IState = {
        countries: [],
        city: undefined,
        weather: {}
    }

    async componentDidMount() {
        try {
            this.props.getCountries();
        } catch (error) {

        }
    }

    render() {
        return (
            <div className="container content panel">
                <div className="container">
                    <div className="row">
                        <div className="form-container">
                            <WeatherDetails />
                            <Form />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppActions>): IDispatchProps => ({
    getCountries: bindActionCreators(getCountries, dispatch),
});

export default connect(null, mapDispatchToProps)(Home);