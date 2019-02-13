import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MapWithControlledZoom from './map';
import MapContainer from './newMap'
import MyComponent from './MyComponent'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 3,
      polygonCoordinates: []
    }
  }
  setCenter = () => {
    this.setState({
      center: { lat: 0, lng: 0 },
      zoom: 0
    })
  }
  selectedZone = (val) => {

    this.setState({
      center: {
        lat: parseInt(val.lat, 10),
        lng: parseInt(val.lng, 10)
      },
      zoom: 5
    })
  }
  setBoundary = (val) => {
    this.setState({
      polygonCoordinates: [...val]
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
          onZoom={this.state.zoom}
          mapBoundary={this.state.polygonCoordinates} />
        {/* <MapContainer
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAzcEI27D-EtLxxrtVaIB8qikgDG7w5cjY&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        /> */}
        {/* <button className="ButtonPos" onClick={this.setCenter}>Click</button> */}
        <MyComponent
          onSelect={this.selectedZone}
          onHover={this.setBoundary} />
      </div>
    );
  }
}

export default App;
