import React, { useEffect, useState } from 'react';
import { Card, Carousel, Spinner } from 'react-bootstrap';
import Image from 'next/image';
import imageUrlBuilder from '@sanity/image-url';
import client from '../studio.js';

const ShowcaseCarousel = ({ setPictureInx, showcase }) => {
  function urlFor(source) {
    return imageUrlBuilder(client).image(source);
  }
  const [index, setIndex] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setPictureInx(selectedIndex);
  };

  useEffect(() => {
    setWindowHeight(window.innerHeight);
    setWindowWidth(window.innerWidth);
    window.addEventListener('resize', () => {
      setWindowHeight(window.innerHeight);
      setWindowWidth(window.innerWidth);
    });
  }, []);

  return (
    <Carousel
      touch={false}
      indicators={false}
      activeIndex={index}
      onSelect={handleSelect}
    >
      {showcase?.map((image, i) => (
        <Carousel.Item key={i}>
          <Image
            src={urlFor(image?.mainImage.asset).width(2400).url()}
            alt='First slide'
            height={windowHeight}
            width={windowWidth}
            quality={100}
            priority={true}
            layout='responsive'
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ShowcaseCarousel;
