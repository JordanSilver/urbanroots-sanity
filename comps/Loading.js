import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import Image from 'next/image';

const Loading = ({ mobile }) => {
  const [top, setTop] = useState(undefined);
  const [left, setLeft] = useState(undefined);

  useEffect(() => {
    //  get top of the window
    const top = window.screenTop - window.innerHeight;
    const left = window.screenLeft / window.innerWidth;
    setTop(top);
    setLeft(left);
  }, []);

  return (
    <motion.div
      // fade in on load
      initial={{ scale: 1, y: 0 }}
      animate={{ scale: 0.3, y: top }}
      transition={{ duration: 0.4, delay: 3 }}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: '#121212',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2, delay: 0.5, ease: 'easeInOut' }}
      >
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 3 }}
        >
          <Image
            src='/tag-lng-drkmd.png'
            width={250}
            height={80}
            quality={100}
            priority={true}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Loading;
