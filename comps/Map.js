import React, { useEffect, useState } from 'react';

const mapsStyle = require('../comps/data/mapstyle.json');
const darkMapStyle = require('../comps/data/darkmapstyle.json');
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoBox,
} from '@react-google-maps/api';
import { OverlayTrigger, Popover, Button } from 'react-bootstrap';
import Image from 'next/image';

const Map = ({ isContactMap }) => {
  const [widthMap, setWidth] = useState(0);
  const [heightMap, setHeight] = useState(0);

  useEffect(() => {
    if (!isContactMap) {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
      window.addEventListener('resize', () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
      });
    } else {
      setWidth(300);
      setHeight(400);
    }
  }, []);

  const containerStyle = {
    width: widthMap,
    height: heightMap,
  };

  const mapOpts = {
    closeBoxURL: ``,
    enableEventPropagation: true,
    styles: darkMapStyle,
  };

  const center = {
    lat: 43.2557,
    lng: -79.8711,
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyBQ6bK-q7S_PUzcEOxv8qKpYeFxz1qnG1I',
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
    setTimeout(() => {
      map.setZoom(16);
    }, 1000);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const popover = (
    <Popover
      id='popover-basic'
      style={{
        zIndex: 9999,
        // color: theme === 'dark' ? 'black' : 'white',
        border: '1px solid #ccc',
        backgroundColor: 'black',
      }}
    >
      <Popover.Header as='h3' style={{ color: 'black' }}>
        <strong>The Ashworth Group</strong>
      </Popover.Header>
      <Popover.Body style={{ color: 'white' }}>
        <span className='mb-2'>
          4582 Penetanguishene Rd <br /> Hillsdale, ON L0L 1V0{' '}
        </span>
        <br />
        <a href='tel:+7055151300'>
          {' '}
          <strong>(705) 515-1300 </strong>
        </a>

        <a href='mailto:info@tagpainting.com'>
          <span>
            {' '}
            <strong>info@tagpainting.com</strong>
          </span>
        </a>
      </Popover.Body>
    </Popover>
  );

  const MapMarkers = () => {
    return (
      <>
        <Marker position={center} animation={2} />
        <InfoBox options={mapOpts} position={center}>
          <div
            style={{
              backgroundColor: 'black',
              padding: 10,
              color: 'black',
              borderRadius: 10,
            }}
          >
            <OverlayTrigger
              style={{ border: '1px solid #ccc' }}
              trigger='click'
              placement='bottom'
              overlay={popover}
            >
              <Button variant='dark' style={{ height: '25px', width: '26px' }}>
                <Image
                  style={{ borderRadius: '.5rem' }}
                  src='/ur-logo.jpg'
                  layout='fill'
                />
              </Button>
            </OverlayTrigger>
          </div>
        </InfoBox>
      </>
    );
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={15}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={mapOpts}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <>
        <MapMarkers />
      </>
    </GoogleMap>
  ) : (
    <>Loading Map ...</>
  );
};

export default Map;
