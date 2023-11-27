import React from 'react';
import Map from './Map';

const ContactMap = ({ styles }) => {
  const isContactMap = true;
  return (
    <div className={styles.contact__contactMap}>
      <Map isContactMap={isContactMap} />
    </div>
  );
};

export default ContactMap;
