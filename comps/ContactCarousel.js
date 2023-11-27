import React, { useEffect, useState } from 'react';
import { Carousel, Spinner } from 'react-bootstrap';
import Image from 'next/image';
import CardAnimation from './CardAnimation';
import imageUrlBuilder from '@sanity/image-url';
import client from '../studio.js';

const ContactCarousel = ({ showcase, styles }) => {
  function urlFor(source) {
    return imageUrlBuilder(client).image(source);
  }
  const [index, setIndex] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const images = [`/tag-v3-12.jpg`, `/tag-v3-11.jpg`, `/tag-v3-9.jpg`];

  return (
    <>
      <Carousel
        touch={false}
        indicators={false}
        controls={false}
        activeIndex={index}
        hoverpause={false}
        interval={2500}
        onSelect={handleSelect}
      >
        {showcase?.map((image, i) => (
          <Carousel.Item key={i}>
            <Image
              src={urlFor(image?.mainImage.asset).width(3000).url()}
              alt='First slide'
              height={200}
              width={200}
              quality={100}
              priority={true}
              layout='responsive'
              className={styles.about__WhyTagCarousel}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

export default ContactCarousel;
