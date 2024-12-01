import React, { useEffect, useState, useRef, useCallback } from "react";

import {
  APIProvider,
  Map,
  MapCameraChangedEvent,
  Pin,
  AdvancedMarker,
  useMap,
} from "@vis.gl/react-google-maps";
import { MarkerClusterer } from "@googlemaps/markerclusterer";
import { Marker } from "@googlemaps/markerclusterer";
import { useNavigate } from "react-router-dom";
// import { Circle } from "./components/circle";
// import MapContainer from "./components/LiveLocation";

const locations= [
  { key: "operaHouse", location: { lat: -33.8567844, lng: 151.213108 } },
  { key: "tarongaZoo", location: { lat: -33.8472767, lng: 151.2188164 } },
  { key: "manlyBeach", location: { lat: -33.8209738, lng: 151.2563253 } },
  { key: "hyderPark", location: { lat: -33.8690081, lng: 151.2052393 } },
  { key: "theRocks", location: { lat: -33.8587568, lng: 151.2058246 } },
  { key: "circularQuay", location: { lat: -33.858761, lng: 151.2055688 } },
  { key: "harbourBridge", location: { lat: -33.852228, lng: 151.2038374 } },
  { key: "kingsCross", location: { lat: -33.8737375, lng: 151.222569 } },
  { key: "botanicGardens", location: { lat: -33.864167, lng: 151.216387 } },
  { key: "museumOfSydney", location: { lat: -33.8636005, lng: 151.2092542 } },
  { key: "maritimeMuseum", location: { lat: -33.869395, lng: 151.198648 } },
  { key: "kingStreetWharf", location: { lat: -33.8665445, lng: 151.1989808 } },
  { key: "aquarium", location: { lat: -33.869627, lng: 151.202146 } },
  { key: "darlingHarbour", location: { lat: -33.87488, lng: 151.1987113 } },
  { key: "barangaroo", location: { lat: -33.8605523, lng: 151.1972205 } },
];

const ViewAllMem = () => {

  return (
    <APIProvider
      apiKey={process.env.REACT_APP_API_KEY}
      onLoad={() => console.log("Maps API has loaded.")}
    >
      <h1>View All members</h1>
      <Map
        defaultZoom={13}
        defaultCenter={{ lat: -33.860664, lng: 151.208138 }}
        onCameraChanged={(ev) =>
          console.log(
            "camera changed:",
            ev.detail.center,
            "zoom:",
            ev.detail.zoom
          )
        }
        mapId="DEMO_MAP_ID"
      >
        <PoiMarkers pois={locations} />
        {/* <MapContainer userLocation={userLocation} setUserLocation={setUserLocation} /> */}
      </Map>
    </APIProvider>
  );
};

const PoiMarkers = (props) => {
  const map = useMap();
  const [markers, setMarkers] = useState({});
  const clusterer = useRef(null);

  const [circleCenter, setCircleCenter] = useState(null);

  const navigate= useNavigate();

  // Initialize MarkerClusterer, if the map has changed
  useEffect(() => {
    if (!map) return;
    if (!clusterer.current) {
      clusterer.current = new MarkerClusterer({ map });
    }
  }, [map]);

  // Update markers, if the markers array has changed
  useEffect(() => {
    clusterer.current?.clearMarkers();
    clusterer.current?.addMarkers(Object.values(markers));
  }, [markers]);

  const setMarkerRef = (marker, key) => {
    if (marker && markers[key]) return;
    if (!marker && !markers[key]) return;

    setMarkers((prev) => {
      if (marker) {
        return { ...prev, [key]: marker };
      } else {
        const newMarkers = { ...prev };
        delete newMarkers[key];
        return newMarkers;
      }
    });
  };

  const handleClick = useCallback((ev) => {
    if (!map) return;
    if (!ev.latLng) return;
    console.log("marker clicked:", ev.latLng.toString());
    map.panTo(ev.latLng);
    setCircleCenter(ev.latLng);
  });

  return (
    <>
     
      {props.pois.map((poi) => (
        <AdvancedMarker
          key={poi.key}
          position={poi.location}
          ref={(marker) => setMarkerRef(marker, poi.key)}
          clickable={true}
          // onClick={handleClick}
          onClick={()=>navigate("/livelocation")}
        >
          <Pin
            background={"red"}
            glyphColor={"#000"}
            borderColor={"#000"}
          />
        </AdvancedMarker>
      ))}
    </>
  );
};

export default ViewAllMem;
