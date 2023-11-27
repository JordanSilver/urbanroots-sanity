import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.scss';
import CardAnimation from '../comps/CardAnimation';
import TitleAnimation from '../comps/TitleAnimation';
import { Container } from 'react-bootstrap';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useRouter } from 'next/router';

const ContactConsultation = ({ mobile }) => {
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
      <div className={styles.request__consultation}>
        <div className={styles.req_consult_overlay}>
          <Image
            src='/certified.png'
            width={mobile ? 110 : 100}
            height={mobile ? 110 : 100}
            quality={100}
            priority={true}
          />
          <TitleAnimation>
            <div className={styles.cardContentLeft}>
              <span style={{ textShadow: '0px 2px 4px #000' }}>Request a </span>
              Quote
              <TitleAnimation className={styles.ActionBtn}>
                <button className='btn draw-border' onClick={handleRoute}>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {' '}
                    call us today
                  </motion.div>
                </button>
              </TitleAnimation>
            </div>
          </TitleAnimation>
          <Image
            src='/satisfy.png'
            width={mobile ? 110 : 100}
            height={mobile ? 90 : 100}
            quality={100}
            priority={true}
          />
        </div>
      </div>
    </>
  );
};

export default ContactConsultation;
