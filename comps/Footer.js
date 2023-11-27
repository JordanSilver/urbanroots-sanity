import Image from 'next/image';
import React from 'react';
import styles from '../styles/Home.module.scss';
import LocationOffcanvas from './LocationOffcanvas';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a
        href='https://www.facebook.com/profile.php?id=100090093402409'
        target='_blank'
        rel='noreferrer noopener'
        className='my-1'
      >
        <i className='bi bi-facebook py-1' style={{ color: 'darkgreen' }} />
      </a>

      <a
        href='https://www.instagram.com/urban_rootscontracting/'
        target='_blank'
        rel='noopener noreferrer'
        className='my-1'
      >
        <i className='bi bi-instagram py-1' style={{ color: 'darkgreen' }} />
      </a>
      <LocationOffcanvas />
    </footer>
  );
};

export default Footer;
