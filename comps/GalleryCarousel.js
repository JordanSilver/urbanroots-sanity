import ImageGallery from 'react-image-gallery';
import imageUrlBuilder from '@sanity/image-url';
import client from '../studio.js';

const GalleryCarousel = ({ mobile, galleryImages }) => {
  function urlFor(source) {
    return imageUrlBuilder(client).image(source);
  }

  const gallery = galleryImages.map((image) => {
    return {
      original: urlFor(image.asset).width(2400).url(),
      thumbnail: urlFor(image.asset).width(2400).url(),
    };
  });

  return (
    <>
      {galleryImages.length > 0 && (
        <ImageGallery
          items={gallery}
          lazyLoad={true}
          thumbnailPosition={mobile ? 'bottom' : 'left'}
          showNav={mobile ? false : true}
          showFullscreenButton={true}
          showPlayButton={true}
          autoPlay={false}
        />
      )}
    </>
  );
};

export default GalleryCarousel;
