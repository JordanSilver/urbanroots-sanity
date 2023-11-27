import React from 'react';
import { Card, Carousel, Row } from 'react-bootstrap';
import styles from '../styles/Home.module.scss';
const BlockContent = require('@sanity/block-content-to-react');
const ReviewCarousel = ({ clientReviews }) => {
  const highlight = (props) => {
    return (
      <span style={{ backgroundColor: props.mark.color }}>
        {props.children}
      </span>
    );
  };

  return (
    <Carousel
      className={styles.reviewCarousel}
      indicators={false}
      controls={false}
      fade
      interval={8000}
    >
      {clientReviews?.map((review, index) => (
        <Carousel.Item key={index}>
          <span className={styles.showcaseReviews}>
            <BlockContent
              // Array of portable text blocks
              blocks={review !== undefined && review.body}
              // Custom serializers for marks, blocks
              serializers={{ marks: { highlight } }}
              projectId='4nmjn7z4'
              dataset='production'
            />
            <small>{review.title}</small>
          </span>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ReviewCarousel;
