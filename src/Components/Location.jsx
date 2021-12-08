import React from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
function App(props) {
    return (
        <div className='Location'>
             <header className='Location-header'>
                <h1 className='Location-title'>Google Map with React</h1>
            </header>
            <Map google={props.google} zoom={14}>
                <Marker onClick={props.onMarkerClick}
                name={'Current Location'} />

                <InfoWindow onClose={props.InfoWindowClose}>
                </InfoWindow>
            </Map>
        </div>
    )
}


export default GoogleApiWrapper({
    apiKey: ("AIzaSyCxmbn5OgP_mtUu5Eov_itqt5EDHFWQPT0")
})(App)

// YOUR_GOOGLE_API_KEY_GOES_HERE



