import React, { useState, useEffect } from 'react';
import FsLightbox from 'fslightbox-react';
import { Button } from 'react-bootstrap';
import styles from '../styles/Home.module.scss';

const Lightbox = ({ pictureInx }) => {
  const [toggler, setToggler] = useState(false);

  const images = [
    `/tag-v3-1.jpg`,
    `/tag-v3-2.jpg`,
    `/tag-v3-7.jpg`,
    `/tag-v3-8.jpg`,
    `/tag-v3-9.jpg`,
    `/tag-v3-10.jpg`,
  ];

  return (
    <>
      <span
        className={styles.lightboxButton}
        onClick={() => setToggler(!toggler)}
      >
        <i className='bi bi-arrows-fullscreen text-muted'></i>
      </span>
      <FsLightbox toggler={toggler} sources={images} />
    </>
  );
};

export default Lightbox;
