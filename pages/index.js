import Head from 'next/head';
import client from '../studio.js';
import styles from '../styles/Home.module.scss';
import RouteAnimation from '../comps/RouteAnimation';
import HeroShowcase from '../comps/HeroShowcase';
import TitleAnimation from '../comps/TitleAnimation';
import NavigationGrid from '../comps/NavigationGrid';
import CallToAction from '../comps/CallToAction';
import Footer from '../comps/Footer';
import ShowcaseReviews from '../comps/ShowcaseReviews';
import TrustedPartners from '../comps/TrustedPartners';
import ContactConsultation from '../comps/ContactConsultation';
import SocialCard from '../comps/SocialCard';
import GalleryFeature from '../comps/GalleryFeature.js';
import Meta from '../comps/Meta.js';

export default function Home({
  mobile,
  services,
  showcase,
  clientReviews,
  galleryFeat,
}) {
  return (
    <>
      <RouteAnimation>
        <main className={styles.main}>
          <HeroShowcase showcase={showcase} />
          <GalleryFeature
            mobile={mobile}
            galleryFeat={galleryFeat}
            styles={styles}
          />
          <TrustedPartners />
          <ContactConsultation mobile={mobile} />

          <NavigationGrid mobile={mobile} services={services} />
          {/* <ShowcaseReviews clientReviews={clientReviews} />
           */}

          <SocialCard />
        </main>
      </RouteAnimation>
    </>
  );
}

export async function getStaticProps() {
  const services = await client.fetch(`*[_type == "services" ]`);
  const showcase = await client.fetch(`*[_type == "showcase" ]`);
  const clientReviews = await client.fetch(`*[_type == "clientreviews" ]`);
  const galleryFeat = await client.fetch(
    `*[_type == "gallery" && featured == true ]`
  );

  return {
    props: { services, showcase, clientReviews, galleryFeat }, // will be passed to the page component as props
    revalidate: 60,
  };
}
