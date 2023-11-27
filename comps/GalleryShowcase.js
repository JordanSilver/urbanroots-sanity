import React, { useState, useEffect, useRef } from 'react';
import { Dropdown, Spinner, Overlay, Tooltip, Popover } from 'react-bootstrap';
import CardAnimation from './CardAnimation';
import { motion } from 'framer-motion';
import GalleryCarousel from './GalleryCarousel';
import Image from 'next/image';
import imageUrlBuilder from '@sanity/image-url';
import client from '../studio.js';

const GalleryShowcase = ({ styles, mobile, gallery }) => {
  function urlFor(source) {
    return imageUrlBuilder(client).image(source);
  }
  const [loading, setLoading] = useState(false);
  const [imageSet, setImageSet] = useState('');
  const [galleryImages, setGalleryImages] = useState([]);
  const [description, setDescription] = useState('');
  const [showDesc, setShowDesc] = useState(false);
  const targetDesc = useRef(null);

  return (
    <>
      <div className={styles.gallery__NavGrid}>
        {gallery.map((item) => (
          <motion.div
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.95 }}
            className={styles.gallery__NavGridItem}
            onClick={() => {
              setLoading(true);
              setShowDesc(false);
              setImageSet(item.title);
              setGalleryImages(item.images);
              setDescription(item.description);
              setTimeout(() => {
                setLoading(false);
              }, 1800);
            }}
          >
            <Image
              src={urlFor(item?.mainImage.asset).width(2400).url()}
              layout='fill'
              height={100}
              width={100}
            />
            <h2 className={styles.gallery__NavGridItemTitle}>{item.title}</h2>
          </motion.div>
        ))}
      </div>
      <div className={styles.gallery__showcaseWrap}>
        <h1 className={styles.gallery__showcaseTitle}>{imageSet}</h1>
        <h3 className={styles.gallery__showcaseInfo}>
          {description !== '' && (
            <>
              <i
                className={
                  showDesc ? 'bi bi-info-circle-fill' : 'bi bi-info-circle'
                }
                ref={targetDesc}
                onClick={() => setShowDesc(!showDesc)}
              ></i>
              <Overlay
                onClick={() => setShowDesc(false)}
                target={targetDesc.current}
                show={showDesc}
                placement='bottom'
              >
                <Popover id='popover-contained'>
                  <Popover.Header as='h3'>{imageSet}</Popover.Header>
                  <Popover.Body>
                    <strong>{description}</strong>
                  </Popover.Body>
                </Popover>
              </Overlay>
            </>
          )}
        </h3>
        <>
          <div>
            {loading && (
              <div className={styles.gallery__showcaseSpinner}>
                <h1>
                  <Spinner animation='border' role='status'>
                    <span className='visually-hidden'>Loading...</span>
                  </Spinner>
                </h1>
              </div>
            )}
            <GalleryCarousel
              mobile={mobile}
              galleryImages={galleryImages}
              styles={styles}
            />

            <hr />
          </div>
        </>
      </div>
    </>
  );
};

export default GalleryShowcase;
