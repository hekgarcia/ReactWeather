import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {
    render() {
        return (
            <table className="table table-gover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
            
                    </tr>
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({weather}) {
    return {weather}; // {weather} === { weather : weather }
}

export default connect(mapStateToProps)(WeatherList);