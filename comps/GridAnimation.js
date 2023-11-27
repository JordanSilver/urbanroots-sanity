import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import React, { Component, useEffect } from 'react';

const GridAnimation = ({ children }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.5,
          ease: 'easeInOut',
        },
      });
    }
    if (!inView) {
      animation.start({
        opacity: 0,
        scale: 0.5,
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

export default GridAnimation;
