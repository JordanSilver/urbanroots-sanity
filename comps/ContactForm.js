import React from 'react';
import { Accordion, Button, Col, Form, Row } from 'react-bootstrap';

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit');
  };
  return (
    <>
      <Form style={{ opacity: '1' }} onSubmit={handleSubmit}>
        <Row className='my-4'>
          <Col xs={12} md={6} className='mb-3'>
            <div className='btn btn-outline-dark d-block'>
              <i className='bi bi-telephone-fill text-success'></i>{' '}
              <strong>
                <a href='tel:+9055414547'>
                  {' '}
                  <span style={{ color: 'black' }}> (905) 541-4547 </span>
                </a>{' '}
              </strong>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div
              className='btn btn-outline-dark d-block'
              style={{ whiteSpace: 'nowrap' }}
            >
              <i className='bi bi-envelope-open-fill text-danger'></i>{' '}
              <a href='mailto:info@tagpainting.com'>
                <small style={{ color: 'black' }}>
                  {' '}
                  <strong>info@urbanroots.com</strong>
                </small>
              </a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <Form.Group className='mb-3' controlId='formBasicName'>
              <Form.Label>
                <strong>Name</strong>
              </Form.Label>
              <Form.Control type='text' name='name' placeholder='Enter name' />
            </Form.Group>
          </Col>
          <Col xs={12} md={6}>
            <Form.Group className='mb-2' controlId='formBasicEmail'>
              <Form.Label>
                <strong>Email address</strong>
              </Form.Label>
              <Form.Control
                type='email'
                name='email'
                placeholder='Enter email'
              />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className='mb-3' controlId='formBasicMessage'>
          <Form.Label>
            <strong>Message</strong>
          </Form.Label>
          <Form.Control
            as='textarea'
            row={6}
            name='message'
            placeholder='Message'
          />
        </Form.Group>

        <Accordion className='mb-4 ' flush>
          <Accordion.Item
            eventKey='0'
            style={{
              background: '#fff',
              border: '1px solid #e5e5e5',
            }}
          >
            <Accordion.Header>
              <strong>Preferred Date & Time </strong>
            </Accordion.Header>
            <Accordion.Body>
              <Row>
                <Col>
                  <Form.Group controlId='dos'>
                    <Form.Label className='mt-2'>Preferred Date </Form.Label>
                    <Form.Control
                      type='date'
                      name='dos'
                      placeholder='Date of service'
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId='tos'>
                    <Form.Label className='mt-2'>Preferred Time </Form.Label>
                    <Form.Control
                      type='time'
                      name='tos'
                      placeholder='Time of Service'
                    />
                  </Form.Group>
                </Col>
              </Row>
              <small style={{ fontSize: '.7rem' }}>
                <i>* date and time not required</i>
              </small>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <div className='d-grid'>
          <Button
            variant='dark'
            type='submit'
            // disabled={state.submitting}
            size='lg'
          >
            Submit
          </Button>
        </div>

        {/* <ValidationError errors={state.errors} /> */}
        <hr />
      </Form>
    </>
  );
};

export default ContactForm;
