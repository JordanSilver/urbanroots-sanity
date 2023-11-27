import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import Image from 'next/image';
import { Row } from 'react-bootstrap';

import ShowcaseCarousel from './ShowcaseCarousel';

import CardAnimation from './CardAnimation';
import TitleAnimation from './TitleAnimation';
import ContactCarousel from './ContactCarousel';
import { useRouter } from 'next/router';

const AboutShowcase = ({ styles, mobile, showcase }) => {
  // get window top
  const [windowTop, setWindowTop] = useState(undefined);
  function handlescroll() {
    setWindowTop(window.pageYOffset);
  }
  useEffect(() => {
    function watchScroll() {
      window.addEventListener('scroll', handlescroll);
    }
    watchScroll();
    return () => {
      window.removeEventListener('scroll', handlescroll);
    };
  });
  const router = useRouter();

  const handleRoute = () => {
    if (mobile) {
      window.scroll({
        top: 0,
      });
      setTimeout(() => {
        router.push('/contact');
      }, 300);
    } else {
      router.push('/contact');
    }
  };

  return (
    <>
      {' '}
      <div className={styles.about__showcaseHero}>
        <Image
          src='/ur-flower.jpg'
          height={100}
          width={100}
          loading='eager'
          className={styles.about__showcaseImage}
        />
      </div>
      <div className={styles.about__whyTag}>
        <h1 className={styles.about__whyTagTitle}>
          URBAN <br /> ROOTS{' '}
        </h1>
        <div className={styles.about__whyTagBtn} onClick={handleRoute}>
          <span className='btn btn-dark draw-border'>
            {' '}
            <small>Contact us Today!</small>
          </span>
        </div>
        <h1 className={styles.about__whyTagCaption}>
          Landscape <br /> Contractors
        </h1>

        <ContactCarousel styles={styles} showcase={showcase} />
      </div>
    </>
  );
};

export default AboutShowcase;
