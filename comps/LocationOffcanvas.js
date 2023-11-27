import React, { useState } from 'react';
import { Button, CloseButton, Offcanvas } from 'react-bootstrap';
import Map from './Map';

const LocationOffcanvas = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <h2 style={{ cursor: 'pointer' }} onClick={handleShow}>
        <i className='bi bi-pin-map-fill'></i>
      </h2>

      <Offcanvas
        style={{ height: '100vh' }}
        placement='bottom'
        show={show}
        onHide={handleClose}
      >
        <Offcanvas.Body style={{ overflow: 'hidden', padding: '0' }}>
          <Map />
          <CloseButton
            variant='white'
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
            }}
            onClick={() => setShow(!show)}
          />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default LocationOffcanvas;
