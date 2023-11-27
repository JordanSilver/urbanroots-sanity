import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';
import RouteAnimation from '../comps/RouteAnimation';
import styles from '../styles/Social.module.scss';

const Social = ({ posts }) => {
  return (
    <div>
      <RouteAnimation>
        <div className={styles.container}>
          <h1>socials</h1>
          <div className=''></div>
        </div>
      </RouteAnimation>
    </div>
  );
};

export default Social;
