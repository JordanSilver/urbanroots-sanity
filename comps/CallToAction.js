import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.scss';
import CardAnimation from '../comps/CardAnimation';
import TitleAnimation from '../comps/TitleAnimation';
import { Container } from 'react-bootstrap';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useRouter } from 'next/router';

const CallToAction = ({ mobile }) => {
  const router = useRouter();

  const handleRoute = () => {
    if (mobile) {
      window.scroll({
        top: 0,
      });
      setTimeout(() => {
        router.push('/about');
      }, 300);
    } else {
      router.push('/about');
    }
  };
  return (
    <>
      <div className={styles.callToAction}>
        <Image
          src='/tag-v3-lite.jpg'
          className={styles.callToActionImage}
          quality={100}
          priority={true}
          layout='fill'
        />
        <div className={styles.cardContentLeft}>
          <span style={{ fontFamily: 'FreeHand' }}>
            Custom Kitchen Cabinet Painting
          </span>
          by The Ashworth Group
          <TitleAnimation className='btn-wrap'>
            <span className='btn  draw-border' onClick={handleRoute}>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                {' '}
                Learn More
              </motion.div>
            </span>
          </TitleAnimation>
        </div>
        <div className={styles.cardContentRight}>
          <CardAnimation>
            Welcome to The Ashworth Group, where we have been providing premier
            painting services for over 15 years. With clients across southern
            Ontario, we have been working with the highest quality products and
            most skilled painters to give our client the best experience
            possible. <br />
          </CardAnimation>
          <CardAnimation>
            For a fraction of the cost of replacement, we can paint or refinish
            your kitchen cabinets recapturing that warm and inviting feeling you
            USED to have when your kitchen was new! Ashworth Painting can help
            your family feel like it has a whole new heart at home! Ask us how!
          </CardAnimation>
        </div>
      </div>
    </>
  );
};

export default CallToAction;
