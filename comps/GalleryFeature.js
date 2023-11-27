import React, { useEffect, useState } from 'react';
import ImageGallery from 'react-image-gallery';
import GalleryCarousel from './GalleryCarousel';
import imageUrlBuilder from '@sanity/image-url';
import client from '../studio.js';

const GalleryFeature = ({ galleryFeat, mobile, styles }) => {
  function urlFor(source) {
    return imageUrlBuilder(client).image(source);
  }

  const [galleryImages, setGalleryImages] = useState([]);
  const [galleryTitle, setGalleryTitle] = useState('');
  useEffect(() => {
    setGalleryImages(galleryFeat[0].images);
    setGalleryTitle(galleryFeat[0].title);
  }, [galleryFeat]);

  const gallery = galleryImages.map((image) => {
    return {
      original: urlFor(image?.asset).width(2400).url(),
      thumbnail: urlFor(image?.asset).width(2400).url(),
    };
  });

  return (
    <div className={styles.featuredGallery} style={{ zIndex: '1' }}>
      <h1 className='text-white my-3 text-center'>Featured Gallery</h1>
      <h5 className='justify-self-start text-secondary'>{galleryTitle}</h5>
      <ImageGallery
        items={gallery}
        lazyLoad={true}
        thumbnailPosition={mobile ? 'bottom' : 'left'}
        showNav={mobile ? false : true}
        showFullscreenButton={true}
        showPlayButton={true}
        autoPlay={false}
      />

      <div className='text-center text-white mt-4'>
        <h3>
          <small>SEE MORE BELOW</small>
        </h3>
      </div>
    </div>
  );
};

export default GalleryFeature;
