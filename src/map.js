import React from "react";
import ReactDOM from "react-dom";
import { compose, withProps, withState, withHandlers } from "recompose";
// const FaAnchor = require("react-icons/lib/fa/anchor");
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";

const MapWithControlledZoom = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyAzcEI27D-EtLxxrtVaIB8qikgDG7w5cjY&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: '100vh', width: '100%' }} />,
    containerElement: <div style={{ height: '100vh', width: '100%' }} />,
    mapElement: <div style={{ height: '100vh', width: '100%' }} />
  }),
  withState("zoom", "onZoomChange", 2),
  withHandlers(() => {
    const refs = {
      map: undefined
    };

    return {
      onMapMounted: () => ref => {
        refs.map = ref;
      },
      onZoomChanged: ({ onZoomChange }) => () => {
          console.log(refs.map.getZoom())
        onZoomChange(refs.map.getZoom());
      }
    };
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap
    center={props.onSelected}
    zoom={props.onZoom}
    ref={props.onMapMounted}
    onZoomChanged={props.onZoomChanged}
  >
    {props.zoom>5?<Marker
      position={{ lat: -34.397, lng: 150.644 }}
      onClick={props.onToggleOpen}
    >
      <InfoWindow onCloseClick={props.onToggleOpen}>
        <div>
        Controlled zoom: {props.zoom}
        </div>
      </InfoWindow>
    </Marker>:null}
  </GoogleMap>
  
));

export default MapWithControlledZoom
