import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MapWithControlledZoom from './map';
import MapContainer from './newMap'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      center: { lat: -34.397, lng: 150.644 },
      zoom:2
    }
  }
  setCenter = () => {
    this.setState({
      center: { lat: 0, lng: 0 },
      zoom:0
    })
  }
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        <MapWithControlledZoom
          onSelected={this.state.center}
          onZoom={this.state.zoom} />
        {/* <MapContainer
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAzcEI27D-EtLxxrtVaIB8qikgDG7w5cjY&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        /> */}
        <button className="ButtonPos" onClick={this.setCenter}>Click</button>
      </div>
    );
  }
}

export default App;
