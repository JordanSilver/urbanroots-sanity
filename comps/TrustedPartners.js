import React from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';
import GridAnimation from './GridAnimation';
import CardAnimation from './CardAnimation';
const TrustedPartners = () => {
  return (
    <>
      <div className={styles.trusted__partners}>
        <h1 className={styles.trusted__partnersTitle}>Services</h1>

        <CardAnimation>
          <span
            style={{
              fontFamily: 'Roboto, sans-serif',
              fontSize: '3rem',
              fontWeight: '700',
              textShadow: '1px 0px 2px #fff',
              lineHeight: '1',
              margin: 'auto 0',
              width: 'min-content',
              height: 'fit-content',
              color: 'lightgreen',
            }}
          >
            <i>GREEN ROOF SPECIALIST</i>
          </span>
        </CardAnimation>
        <CardAnimation>
          <span
            style={{
              fontFamily: 'Roboto, sans-serif',
              fontSize: '3rem',
              fontWeight: '700',
              textShadow: '1px 0px 2px #fff',
              lineHeight: '1',
              margin: 'auto 0',
              width: 'min-content',
              height: 'fit-content',
              color: 'lightgreen',
            }}
          >
            <i>HARDSCAPING</i>
          </span>
        </CardAnimation>
        <CardAnimation>
          <span
            style={{
              fontFamily: 'Roboto, sans-serif',
              fontSize: '3rem',
              fontWeight: '700',
              textShadow: '1px 0px 2px #fff',
              lineHeight: '1',
              margin: 'auto 0',
              width: 'min-content',
              height: 'fit-content',
              color: 'lightgreen',
            }}
          >
            <i>PATIO CONSTRUCTION</i>
          </span>
        </CardAnimation>
        <CardAnimation>
          <span
            style={{
              fontFamily: 'Roboto, sans-serif',
              fontSize: '3rem',
              fontWeight: '700',
              textShadow: '1px 0px 2px #fff',
              lineHeight: '1',
              margin: 'auto 0',
              width: 'min-content',
              height: 'fit-content',
              color: 'lightgreen',
            }}
          >
            <i>INTERLOCK INSTALLATION</i>
          </span>
        </CardAnimation>
      </div>
    </>
  );
};

export default TrustedPartners;
