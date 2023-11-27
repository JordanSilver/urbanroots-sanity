import React from 'react';
import { Accordion, Button, Col, Form, Row } from 'react-bootstrap';

import styles from '../styles/Contact.module.scss';
import ContactCarousel from './ContactCarousel';
import ContactForm from './ContactForm';
import ContactMap from './ContactMap';
import NavigationGrid from './NavigationGrid';
import ReviewCarousel from './ReviewCarousel';
import ShowcaseCarousel from './ShowcaseCarousel';
import ShowcaseReviews from './ShowcaseReviews';
import SocialCard from './SocialCard';

const ContactShowcase = ({ clientReviews }) => {
  return (
    <>
      <h1 className={styles.contactShowcaseTitle}>
        <strong>Contact Us</strong>
        <br />

        <strong className='my-3'>URBAN ROOTS</strong>
      </h1>
      <div className={styles.contactShowcase}>
        <ContactForm />
        <ContactMap styles={styles} />
      </div>

      <ShowcaseReviews clientReviews={clientReviews} />
    </>
  );
};

export default ContactShowcase;
