import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const WhyTAG = ({ styles }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.5,
          ease: 'easeInOut',
        },
      });
    }
    if (!inView) {
      animation.start({
        opacity: 0,
        x: -100,
        transition: {
          duration: 0.5,
          ease: 'easeInOut',
        },
      });
    }
  }, [animation, inView]);
  return (
    <motion.div className={styles.about__whyTagComp}>
      <h1
        className='text-center mt-3'
        style={{ textShadow: '1px 2px 1px black' }}
      >
        <strong>
          WHY CHOOSE <br />
          URBAN ROOTS
        </strong>
      </h1>

      <hr className='mx-5' />
      <div className={styles.about__whyTagGrid}>
        <div style={{ color: 'white' }} className='m-2 card p-3'>
          {' '}
          <h4 className='p-1'>
            <i
              className='bi bi-card-checklist'
              style={{
                fontSize: '3rem',
                color: 'lightblue',
                position: 'absolute',
                top: '.5rem',
                right: '1rem',
              }}
            ></i>{' '}
            <br />
            <strong>Professionalism </strong>
          </h4>
          <p className='justify'>
            We produce a higher level of hardscaping services.
          </p>
        </div>
        <div style={{ color: 'white' }} className='m-2 card p-3'>
          {' '}
          <h4 className='p-1'>
            <strong>
              <i
                className='bi bi-award-fill'
                style={{
                  fontSize: '3rem',
                  color: 'goldenrod',
                  position: 'absolute',
                  top: '.5rem',
                  right: '1rem',
                }}
              ></i>
              <br />
              Quality Assurance
            </strong>
          </h4>
          <p className='justify'>
            We offer quality that is second to none. We are committed to
            creating the best experience for our clients.
          </p>
        </div>

        <div style={{ color: 'white' }} className='m-2 card p-3'>
          <h4 className='p-1'>
            <i
              className='bi bi-file-person-fill'
              style={{
                fontSize: '3rem',
                color: 'firebrick',
                position: 'absolute',
                top: '.5rem',
                right: '1rem',
              }}
            ></i>{' '}
            <br />
            <strong>Customer Service </strong>
          </h4>
          <p className='justify'>
            We will help you answer any questions before and during painting.
          </p>
        </div>
        <div style={{ color: 'white' }} className='m-2 card p-3'>
          <h4 className='p-1'>
            <i
              className='bi bi-bucket-fill'
              style={{
                fontSize: '3rem',
                color: 'lightgreen',
                position: 'absolute',
                top: '.5rem',
                right: '1rem',
              }}
            ></i>{' '}
            <br />
            <strong>Trusted Brands</strong>
          </h4>
          <p className='justify'>
            We use only the highest quality products and services to ensure that
            our customers are happy.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default WhyTAG;
