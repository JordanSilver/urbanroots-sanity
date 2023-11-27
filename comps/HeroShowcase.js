import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Lightbox from './Lightbox';
import styles from '../styles/Home.module.scss';
import ShowcaseCarousel from './ShowcaseCarousel';
import { motion } from 'framer-motion';
import TitleAnimation from './TitleAnimation';
import Image from 'next/image';

const HeroShowcase = ({ showcase, mobile }) => {
  const [pictureInx, setPictureInx] = useState(0);
  return (
    <div className={styles.HeroShowcase}>
      <motion.div className={styles.trusted__partners}>
        {/* <ShowcaseCarousel showcase={showcase} setPictureInx={setPictureInx} /> */}

        <div className={styles.HeroTitle}>
          <small>
            <br />
            Landscape <br /> contracting <br /> by
          </small>{' '}
          <br />
          <p className={styles.heroBrand}>
            {' '}
            <Image
              className={styles.OffCanvaHead}
              src='/urbanroots-logo.jpg'
              width={mobile ? 170 : 250}
              height={mobile ? 180 : 180}
              quality={100}
              priority={true}
            />
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroShowcase;
