import { useEffect, useState } from 'react';
import ReviewCarousel from './ReviewCarousel';
import styles from '../styles/Home.module.scss';
import TitleAnimation from './TitleAnimation';
const ShowcaseReviews = ({ clientReviews }) => {
  return (
    <div
      style={{
        position: 'relative',
        height: '100%',
        width: '100%',
        textAlign: 'center',
        margin: '1rem',
      }}
    >
      <TitleAnimation>
        <span className={styles.reviewTitle}>A word from our clients</span>
      </TitleAnimation>

      <ReviewCarousel clientReviews={clientReviews} />
      <hr />
    </div>
  );
};

export default ShowcaseReviews;
