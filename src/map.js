import React from "react";
import ReactDOM from "react-dom";
import { compose, withProps, withState, withHandlers, withPropsOnChange } from "recompose";
// const FaAnchor = require("react-icons/lib/fa/anchor");
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import { Polygon } from "react-google-maps";
const boundary = [{ lat: 25.774, lng: -80.190 },
{ lat: 18.466, lng: -66.118 },
{ lat: 32.321, lng: -64.757 },
{ lat: 25.774, lng: -80.190 }]
const MapWithControlledZoom = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyAzcEI27D-EtLxxrtVaIB8qikgDG7w5cjY&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: '100vh', width: '100%' }} />,
    containerElement: <div style={{ height: '100vh', width: '100%' }} />,
    mapElement: <div style={{ height: '100vh', width: '100%' }} />
  }),
  withState("zoom", "onZoomChange", 2),
  withState("show", "handleShow", false),
  withHandlers(() => {
    const refs = {
      map: undefined
    };

    return {
      onMapMounted: () => ref => {
        refs.map = ref;
      },
      onZoomChanged: ({ onZoomChange }) => () => {
        onZoomChange(refs.map.getZoom());
      },
      handleMouseOver: (props) => (e) => {
        if ((e.latLng.lat() > 18 && e.latLng.lat() < 32) && ((e.latLng.lng() > -80 && e.latLng.lng() < -64))) {
          props.handleShow(true)
        }
        else {
          props.handleShow(false)
        }
      },
      drillDown: (props) => (ref) => {
        props.onZoomChange(4)
      }
    };
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap
    center={props.onSelected}
    zoom={props.zoom}
    ref={props.onMapMounted}
    onZoomChanged={props.onZoomChanged}
    onMouseMove={props.handleMouseOver}
  >
    {props.zoom > 5 ? <Marker
      position={{ lat: -34.397, lng: 150.644 }}
      onClick={props.onToggleOpen}
    >
      <InfoWindow onCloseClick={props.onToggleOpen}>
        <div>
          Controlled zoom: {props.zoom}
        </div>
      </InfoWindow>
    </Marker> : null}
    {props.show ? <Polygon
      paths={boundary}
      strokeColor="#000000"
      strokeOpacity={0.8}
      strokeWeight={2}
      fillColor="#000000"
      fillOpacity={0.35}
      onClick={props.drillDown} /> : null}
  </GoogleMap>

));

export default MapWithControlledZoom
