import Head from 'next/head';
import client from '../studio.js';
import Link from 'next/link';
import React from 'react';
import GalleryHero from '../comps/GalleryHero';
import GalleryShowcase from '../comps/GalleryShowcase';
import RouteAnimation from '../comps/RouteAnimation';
import SocialCard from '../comps/SocialCard';
import TrustedPartners from '../comps/TrustedPartners';

import styles from '../styles/Gallery.module.scss';
import Meta from '../comps/Meta.js';

const Gallery = ({ mobile, gallery }) => {
  return (
    <>
      <RouteAnimation>
        <main>
          <GalleryHero styles={styles} />

          <GalleryShowcase styles={styles} mobile={mobile} gallery={gallery} />

          <SocialCard />
        </main>
      </RouteAnimation>
    </>
  );
};

export default Gallery;

export async function getStaticProps() {
  const gallery = await client.fetch(`*[_type == "gallery" ]`);

  return {
    props: { gallery }, // will be passed to the page component as props
    revalidate: 60,
  };
}
