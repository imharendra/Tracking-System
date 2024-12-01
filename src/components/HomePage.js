
  import { FaLocationArrow, FaTimes } from 'react-icons/fa'
  
  import {
    useJsApiLoader,
    GoogleMap,
    Marker,
    Autocomplete,
    DirectionsRenderer,
  } from '@react-google-maps/api'
  import { useRef, useState } from 'react'
  
  const center = { lat: 48.8584, lng: 2.2945 };
  
  function HomePage() {
    const { isLoaded } = useJsApiLoader({
      googleMapsApiKey: process.env.REACT_APP_API_KEY,
      libraries: ['places'],
    })
  
    const [map, setMap] = useState(/** @type google.maps.Map */ (null))
    const [directionsResponse, setDirectionsResponse] = useState(null)
    const [distance, setDistance] = useState('')
    const [duration, setDuration] = useState('');
    const [userPosition, setUserPosition] = useState({lat: 48.8584, lng: 2.2945});
  
    /** @type React.MutableRefObject<HTMLInputElement> */
    const originRef = useRef()
    /** @type React.MutableRefObject<HTMLInputElement> */
    const destiantionRef = useRef()
  
    if (!isLoaded) {
      return <h4>Loading....</h4>
    }
  
    async function calculateRoute() {
      if (originRef.current.value === '' || destiantionRef.current.value === '') {
        return
      }
      // eslint-disable-next-line no-undef
      const directionsService = new google.maps.DirectionsService()
      const results = await directionsService.route({
        origin: originRef.current.value,
        destination: destiantionRef.current.value,
        // eslint-disable-next-line no-undef
        travelMode: google.maps.TravelMode.DRIVING,
      })
      setDirectionsResponse(results)
      setDistance(results.routes[0].legs[0].distance.text)
      setDuration(results.routes[0].legs[0].duration.text)
    }
  
    function clearRoute() {
      setDirectionsResponse(null)
      setDistance('')
      setDuration('')
      originRef.current.value = ''
      destiantionRef.current.value = ''
    }
  
    return (
      <div
        style={{width:"100vw", height:"100vh"}}
      >
        <div style={{width:"100vw", height:"75vh"}}>
          {/* Google Map Box */}
          <GoogleMap
            center={center}
            zoom={15}
            mapContainerStyle={{ width: '100%', height: '100%' }}
            options={{
              zoomControl: true,
              streetViewControl: false,
              mapTypeControl: false,
              fullscreenControl: false,
            }}
            onLoad={map => setMap(map)}
          >
            <Marker position={center} />
            <Marker position={center} />
            <Marker position={userPosition} />
            {directionsResponse && (
              <DirectionsRenderer directions={directionsResponse} />
            )}
          </GoogleMap>
        </div>
        <div
        style={{padding:"4px", margin:"6px", backgroundColor:"white", zIndex:"2"}}
        >
          <div style={{justifyContent:"space-between"}}>
            <div style={{flexGrow:1}}>
              <Autocomplete>
                <input type='text' placeholder='Origin' ref={originRef} />
              </Autocomplete>
            </div>
            <div style={{flexGrow:1}}>
              <Autocomplete>
                <input
                  type='text'
                  placeholder='Destination'
                  ref={destiantionRef}
                />
              </Autocomplete>
            </div>
  
            <div>
              <button type='submit' onClick={calculateRoute}>
                Calculate Route
              </button>
              <button
                aria-label='center back'
                icon={<FaTimes />}
                onClick={clearRoute}
              >Clear</button>
            </div>
          </div>
          <div style={{justifyContent:"space-between"}}>
            <b>Distance: {distance} </b> <br />
            <b>Duration: {duration} </b> <br />
            <button
              aria-label='center back'
              icon={<FaLocationArrow />}
              onClick={() => {
                map.panTo(center)
                map.setZoom(15)
              }}
            >
                Re-center
            </button> {" "}
            <button
              aria-label='center back'
              icon={<FaLocationArrow />}
              onClick={() => {
                navigator.geolocation.getCurrentPosition((position)=>{
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;
                    setUserPosition({lat:latitude, lng:longitude});
                    map.panTo(userPosition)
                    map.setZoom(15)
                });
              }}
            >
                Live location
            </button>
          </div>
        </div>
      </div>
    )
  }
  
  export default HomePage