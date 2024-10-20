import React from 'react';
import { Container, Image } from 'react-bootstrap';
import Webcam from "react-webcam";
import '../assets/nav.css';
import logo from '../assets/arDemo.png';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import MindAR from './MindAR';

function Content() {
    const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

    const center = {
        lat: 43.07532,
        lng: -89.404078,
    };

    const markers = [
        { id: 1, lat: 43.07573, lng: -89.40297, label: 'North Hall' },
    ];

    return (
        <>
            <Container className="text-center" style={{width: '100%'}}>
                <Image
                    src={logo}
                    fluid
                    className="img-fluid"
                    style={{ width: 'auto', height: 'auto' }}
                />
            </Container>
            <Container className="text-center">
                <h1 style={{ margin: '20px' }}>Augmented Reality Series</h1>
            </Container>
            <Container className="text-center">
                <MindAR></MindAR>
                <video></video>
            </Container>
            <Container style={{ height: '400px', marginTop: '20px', marginBottom: '20px' }}>
                <LoadScript googleMapsApiKey={API_KEY}>
                    <GoogleMap
                        mapContainerStyle={{ height: '100%', width: '100%' }}
                        center={center}
                        zoom={15}
                    >
                        {markers.map(marker => (
                            <Marker
                                key={marker.id}
                                position={{ lat: marker.lat, lng: marker.lng }}
                                label={marker.label}
                            />
                        ))}
                    </GoogleMap>
                </LoadScript>
            </Container>
        </>
    );
}

export default Content;
