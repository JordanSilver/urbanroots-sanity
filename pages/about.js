import Head from 'next/head';
import client from '../studio.js';
import Link from 'next/link';
import React from 'react';
import AboutShowcase from '../comps/AboutShowcase';
import RouteAnimation from '../comps/RouteAnimation';
import SocialCard from '../comps/SocialCard';
import ReviewCarousel from '../comps/ReviewCarousel';
import styles from '../styles/About.module.scss';
import TrustedPartners from '../comps/TrustedPartners';
import ContactConsultation from '../comps/ContactConsultation';
import WhyUR from '../comps/WhyUR.js';

const About = ({ mobile, showcase }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kitchen Cabinetry by The Ashworth Group</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <RouteAnimation>
        <main className='main'>
          <AboutShowcase styles={styles} mobile={mobile} showcase={showcase} />
          <WhyUR styles={styles} />

          <TrustedPartners />
          <ContactConsultation mobile={mobile} />
          <SocialCard />
        </main>
      </RouteAnimation>
    </div>
  );
};

export default About;

export async function getStaticProps() {
  const showcase = await client.fetch(`*[_type == "showcase" ]`);

  return {
    props: { showcase }, // will be passed to the page component as props
    revalidate: 60,
  };
}