import Head from 'next/head';
import client from '../studio.js';
import Link from 'next/link';
import React from 'react';
import ContactShowcase from '../comps/ContactShowcase';
import RouteAnimation from '../comps/RouteAnimation';
import SocialCard from '../comps/SocialCard';
import styles from '../styles/Contact.module.scss';

const Contact = ({ clientReviews }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>URBAN ROOTS LANDSCAPING</title>
      </Head>
      <RouteAnimation>
        <main>
          <ContactShowcase clientReviews={clientReviews} />
          <SocialCard />
        </main>
      </RouteAnimation>
    </div>
  );
};

export default Contact;

export async function getStaticProps() {
  const clientReviews = await client.fetch(`*[_type == "clientreviews" ]`);

  return {
    props: { clientReviews }, // will be passed to the page component as props
    revalidate: 60,
  };
}
