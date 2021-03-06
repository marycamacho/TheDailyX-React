import React, { Component } from 'react';
import './App.css';
import MetricList from './MetricList';
import AppControls from './AppControls';

class App extends Component {

    render() {
        return (
          <div className="App">
            <div className="App-header">
                <h2>The Daily X</h2>
                <AppControls/>
            </div>
            <MetricList/>
          </div>
        );
    }
}

export default App;
