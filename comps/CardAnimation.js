import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import React, { Component, useEffect } from 'react';

const CardAnimation = ({ children }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,
        transition: {
          type: 'spring',
          stiffness: 100,
          duration: 0.5,
          ease: 'easeInOut',
        },
      });
    }
    if (!inView) {
      animation.start({
        opacity: 0,
        y: 100,
        transition: {
          duration: 0.5,
          ease: 'easeInOut',
        },
      });
    }
  }, [animation, inView]);

  return (
    <motion.div ref={ref} animate={animation}>
      {children}
    </motion.div>
  );
};

export default CardAnimation;
