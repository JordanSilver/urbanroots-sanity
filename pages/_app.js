import '../styles/globals.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { useEffect, useState } from 'react';
import { SSRProvider } from 'react-bootstrap';
import { ThemeProvider } from 'next-themes';
import { AnimatePresence } from 'framer-motion';
// import SimpleReactLightbox from 'simple-react-lightbox';

import Navigation from '../comps/Navigation';

const MyApp = ({ Component, pageProps }) => {
  const [width, setWidth] = useState(null);

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap');
    window.addEventListener('onload', () => {
      setWidth(window.innerWidth);
    });
    window.addEventListener('resize', () => setWidth(window.innerWidth));
  }, []);

  const mobile = width <= 640;

  return (
    <>
      <SSRProvider>
        {/* <SimpleReactLightbox> */}
        <ThemeProvider>
          <Navigation mobile={mobile} />
          <AnimatePresence
            mode='wait'
            initial={false}
            onExitComplete={() => window.scrollTo(0, 0)}
          >
            <Component {...pageProps} mobile={mobile} />
          </AnimatePresence>
        </ThemeProvider>
        {/* </SimpleReactLightbox> */}
      </SSRProvider>
    </>
  );
};

export default MyApp;
