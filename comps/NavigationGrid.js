import { useEffect, useState } from 'react';
import { Button, Card, Row } from 'react-bootstrap';
import styles from '../styles/Home.module.scss';
import { motion, useAnimation } from 'framer-motion';
import imageUrlBuilder from '@sanity/image-url';
import client from '../studio.js';
import CardAnimation from './CardAnimation';
import Image from 'next/image';
import { useRouter } from 'next/router';

const NavigationGrid = ({ mobile, services }) => {
  function urlFor(source) {
    return imageUrlBuilder(client).image(source);
  }
  const router = useRouter();
  const handleRoute = () => {
    if (mobile) {
      setTimeout(() => {
        router.push('/gallery');
      }, 300);
    } else {
      router.push('/gallery');
    }
  };

  return (
    <>
      <div
        style={{
          position: 'relative',
          height: '100%',
          width: '90%',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1rem',
          maxWidth: '618px',
          zIndex: '10',
          overflow: 'hidden',
          marginBottom: '2rem',
        }}
      >
        {services?.map((service, index) => {
          return (
            <Card
              key={index}
              className='bg-dark text-white overflow-hidden card'
            >
              <Card.Img
                src={urlFor(service?.mainImage.asset)}
                height={100}
                width={100}
                priority='true'
                alt='Card image'
                className={styles.home__navGridImage}
              />
              <Card.ImgOverlay
                className='d-flex justify-between'
                style={{ flexFlow: 'column' }}
              >
                <Card.Title className={styles.card__title}>
                  {service.title}
                  <Card.Text>
                    <i
                      style={{ textShadow: '1px 2px 1px black' }}
                      className='bi bi-dash-lg text-white'
                    />
                  </Card.Text>
                </Card.Title>
                <Card.Text className={styles.card__overlay}>
                  {service.description}
                  <button
                    className='btn btn-wrap draw-border'
                    onClick={handleRoute}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      See More
                    </motion.div>
                  </button>
                </Card.Text>
              </Card.ImgOverlay>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default NavigationGrid;
