import React, {useEffect, useRef} from 'react';
import { Map, Marker, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import './ec-map.scss';
import {LeafletMouseEvent, DragEndEvent} from 'leaflet';

type EcMapProps = {
  position: number[];
  zoom?: number;
  changePosition: (lat: number, lng: number) => void;
}

export const EcMap = (props: EcMapProps) => {
  const {position, zoom = 30} = props;

  useEffect(() => {
    const L = require("leaflet");

    delete L.Icon.Default.prototype._getIconUrl;

    L.Icon.Default.mergeOptions({
      iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
      iconUrl: require("leaflet/dist/images/marker-icon.png"),
      shadowUrl: require("leaflet/dist/images/marker-shadow.png")
    });
    
  }, []);

  const changePosition = (e: LeafletMouseEvent) => {
    props.changePosition(e.latlng.lat, e.latlng.lng);
  }

  const markerDraged = (e: DragEndEvent) => {
    props.changePosition(e.target._latlng.lat, e.target._latlng.lng)
  }

  

  return (
    <div className="map">
      <Map center={[position[0], position[1]]} zoom={zoom} onclick={(e) => changePosition(e)}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'/>

        <Marker position={[position[0], position[1]]} draggable ondragend={(e) => markerDraged(e)} />
      </Map>
    </div>
  );
}