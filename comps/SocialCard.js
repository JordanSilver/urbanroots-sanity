import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from '../styles/Home.module.scss';
import Map from './Map';
import { Accordion, Row } from 'react-bootstrap';
import LocationOffcanvas from './LocationOffcanvas';

const SocialCard = () => {
  return (
    <>
      <div className={styles.social__card}>
        <div className={styles.social__nav}>
          <Link href='/about'>About</Link>
          <Link href='/gallery'>Gallery</Link>
          <Link href='/contact'>Contact</Link>
          <Link href='/blog'>Blog</Link>
        </div>
        <div className='mx-auto'>
          <Image
            style={{ borderRadius: '.5rem' }}
            className='mt-2 '
            src='/ur-logo.jpg'
            width={150}
            height={140}
            quality={100}
          />
          <div className='text-center'>
            <div>
              <div className='p-2'>
                <span className='text-success'>Phone Number</span> <br />
                <a href='tel:+9055414547'>(905) 541-4547</a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.social__innercard}>
          <a
            href='https://urbanrootscontracting.net/'
            target='_blank'
            rel='noreferrer noopener'
            className='my-1'
          >
            <i className='bi bi-facebook py-1' style={{ color: 'royalblue' }} />
          </a>

          <a
            href='https://www.instagram.com/urban_rootscontracting/'
            target='_blank'
            rel='noopener noreferrer'
            className='my-1'
          >
            <i className='bi bi-instagram py-1' style={{ color: 'crimson' }} />
          </a>
          <LocationOffcanvas />
        </div>
      </div>
      <div
        className='d-flex'
        style={{
          zIndex: '10',
          color: '#000',
          margin: '1rem 0',
          letterSpacing: '0.2rem',
        }}
      >
        URBAN ROOTS &copy;{' '}
      </div>
    </>
  );
};

export default SocialCard;
