import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Lightbox from './Lightbox';
import styles from '../styles/Home.module.scss';
import ShowcaseCarousel from './ShowcaseCarousel';
import { motion } from 'framer-motion';
import TitleAnimation from './TitleAnimation';

const HeroShowcase = ({ showcase }) => {
  const [pictureInx, setPictureInx] = useState(0);
  return (
    <motion.div className={styles.HeroShowcase}>
      {/* <ShowcaseCarousel showcase={showcase} setPictureInx={setPictureInx} /> */}

      <div className={styles.HeroTitle}>
        BACKYARD <br /> RENOVATIONS <br />
        <small>by</small> <br />
        <p className={styles.heroBrand}>URBAN ROOTS</p>
      </div>
    </motion.div>
  );
};

export default HeroShowcase;
