import { FaLocationArrow, FaTimes } from "react-icons/fa";

import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
  LoadScript,
} from "@react-google-maps/api";
import { useRef, useState } from "react";

const center = { lat: 28.4595, lng: 77.0266 };

function RouteTravel() {

  const [map, setMap] = useState(null);
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");
  const [userPosition, setUserPosition] = useState({
    lat: 28.4595,
    lng: 77.0266,
  });

  const originRef = useRef();
  const destiantionRef = useRef();


  async function calculateRoute() {
    if (originRef.current.value === "" || destiantionRef.current.value === "") {
      return;
    }
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: originRef.current.value,
      destination: destiantionRef.current.value,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    });
    setDirectionsResponse(results);
    setDistance(results.routes[0].legs[0].distance.text);
    setDuration(results.routes[0].legs[0].duration.text);
  }

  function clearRoute() {
    setDirectionsResponse(null);
    setDistance("");
    setDuration("");
    originRef.current.value = "";
    destiantionRef.current.value = "";
  }

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <div style={{ width: "100vw", height: "75vh" }}>
        {/* Google Map Box */}
        {/* <LoadScript googleMapsApiKey={process.env.REACT_APP_API_KEY}> */}
        <GoogleMap
          center={center}
          zoom={15}
          mapContainerStyle={{ width: "100%", height: "100%" }}
          options={{
            zoomControl: true,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
          }}
          onLoad={(map) => setMap(map)}
        >
          <Marker position={center} />
          <Marker position={center} />
          <Marker position={userPosition} />
          {directionsResponse && (
            <DirectionsRenderer directions={directionsResponse} />
          )}
        </GoogleMap>
        {/* </LoadScript> */}
      </div>
      <div
        style={{
          padding: "4px",
          margin: "6px",
          backgroundColor: "white",
          zIndex: "2",
        }}
      >
        <div style={{ justifyContent: "space-between" }}>
          <div style={{ flexGrow: 1 }}>
            <Autocomplete>
              <input type="text" placeholder="Origin" ref={originRef} />
            </Autocomplete>
          </div>
          <div style={{ flexGrow: 1 }}>
            <Autocomplete>
              <input
                type="text"
                placeholder="Destination"
                ref={destiantionRef}
              />
            </Autocomplete>
          </div>

          <div>
            <button type="submit" onClick={calculateRoute}>
              Calculate Route
            </button>
            <button
              aria-label="center back"
              icon={<FaTimes />}
              onClick={clearRoute}
            >
              Clear
            </button>
          </div>
        </div>
        <div style={{ justifyContent: "space-between" }}>
          <b>Distance: {distance} </b> <br />
          <b>Duration: {duration} </b> <br />
        </div>
      </div>
    </div>
  );
}

export default RouteTravel;
