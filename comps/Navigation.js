import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import styles from '../styles/Home.module.scss';
import { CloseButton, Offcanvas } from 'react-bootstrap';
import { motion, useScroll } from 'framer-motion';
import Footer from './Footer';

const Navigation = ({ mobile }) => {
  const [show, setShow] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [isWindowTop, setIsWindowTop] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { scrollY } = useScroll();

  const variants = {
    visible: { opacity: 1, y: 0 },

    hidden: { opacity: 1, y: -32 },
  };
  function update() {
    if (scrollY?.current < scrollY?.prev) {
      setHidden(false);
    } else if (scrollY?.current > 10 && scrollY?.current > scrollY?.prev) {
      setHidden(true);
    }
    if (scrollY?.current >= 50) {
      setIsWindowTop(false);
    } else {
      setIsWindowTop(true);
    }
  }
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    return scrollY.onChange(() => update());
  }, []);
  const scrollToServ = () => {
    window.scrollTo(0, 800);
  };
  useEffect(() => {
    return scrollY.onChange(() => update());
  }, []);

  return (
    <>
      <motion.nav
        variants={variants}
        animate={hidden ? 'hidden' : 'visible'}
        transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
        className={styles.navigation}
      >
        {/* <Image
          style={{ zIndex: '999' }}
          src='/ur-logo.jpg'
          width={mobile ? 110 : 100}
          height={mobile ? 90 : 100}
          quality={100}
          priority={true}
        /> */}
        <motion.div className={styles.UrbanRootsLogo}>
          URB
          <span className='bi bi-tree-fill' />N <span> ROOTS</span>
        </motion.div>
        {mobile && (
          <motion.div
            className={styles.buttonToTop}
            whileTap={{ scale: 1.3 }}
            style={{ cursor: 'pointer' }}
          >
            {!isWindowTop ? (
              <div onClick={scrollToTop}>
                <h3 className='bi bi-arrow-up-square m-0' />
              </div>
            ) : (
              <div onClick={scrollToServ}>
                <h3 className='bi bi-arrow-down-square m-0' />
              </div>
            )}
          </motion.div>
        )}
        <span className='col-auto d-flex justify-content-end gap-3'>
          {mobile ? (
            <motion.div
              whileTap={{ scale: 1.2 }}
              style={{ cursor: 'pointer' }}
              onClick={handleShow}
            >
              <i className='bi bi-list m-0' style={{ fontSize: '2rem' }} />
            </motion.div>
          ) : (
            <>
              <Link href='/about'>About</Link>
              <Link href='/gallery'>Gallery</Link>
              <Link href='/contact'>Contact</Link>
              {/* <Link href='/blog'>Blog</Link> */}
            </>
          )}
        </span>

        <Offcanvas
          className={styles.OffcanvasNav}
          placement='end'
          show={show}
          onHide={handleClose}
        >
          <Offcanvas.Header>
            <Offcanvas.Title>
              <Image
                className={styles.OffCanvaHead}
                src='/urbanroots-logo.jpg'
                width={mobile ? 170 : 250}
                height={mobile ? 180 : 180}
                quality={100}
                priority={true}
                onClick={handleClose}
              />
            </Offcanvas.Title>{' '}
            <Footer />
          </Offcanvas.Header>
          <Offcanvas.Body className={styles.OffcanvasNavBody}>
            <span onClick={handleClose}>
              <Link href='/'>Home</Link>
            </span>
            <span onClick={handleClose}>
              <Link href='/about'>About</Link>
            </span>
            <span onClick={handleClose}>
              <Link href='/gallery'>Gallery</Link>
            </span>
            <span onClick={handleClose}>
              <Link href='/contact'>Contact</Link>
            </span>
            {/* 
            <span onClick={handleClose}>
              <Link href='/blog'>Blog</Link>
            </span> */}
          </Offcanvas.Body>
          <motion.div>
            <CloseButton variant='black' onClick={handleClose} />
          </motion.div>
        </Offcanvas>
      </motion.nav>
    </>
  );
};

export default Navigation;
