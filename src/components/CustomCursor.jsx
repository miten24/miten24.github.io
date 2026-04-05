import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const CustomCursor = () => {
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  // Refs track live values without triggering re-renders
  const isHoveringRef = useRef(false);
  const isVisibleRef  = useRef(false);

  const [isHovering, setIsHovering] = useState(false);
  const [isVisible,  setIsVisible]  = useState(false);

  const springConfig = { stiffness: 280, damping: 22, mass: 0.5 };
  const ringX = useSpring(mouseX, springConfig);
  const ringY = useSpring(mouseY, springConfig);

  const dotLeft  = useTransform(mouseX, x => x - 4);
  const dotTop   = useTransform(mouseY, y => y - 4);
  const ringLeft = useTransform(ringX,  x => x - 22);
  const ringTop  = useTransform(ringY,  y => y - 22);

  useEffect(() => {
    // Single mousemove handler covers position + hover detection.
    // Previously, separate mouseover/mouseout listeners fired for every
    // child element the cursor passed through (can be 100s of times/s),
    // each running an expensive closest() DOM traversal.
    // Now: one closest() call per animation frame max.
    const onMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const hovering = !!e.target.closest('[data-hover]');
      if (hovering !== isHoveringRef.current) {
        isHoveringRef.current = hovering;
        setIsHovering(hovering);
      }

      if (!isVisibleRef.current) {
        isVisibleRef.current = true;
        setIsVisible(true);
      }
    };

    const onLeave = () => { isVisibleRef.current = false; setIsVisible(false); };
    const onEnter = () => { isVisibleRef.current = true;  setIsVisible(true);  };

    window.addEventListener('mousemove', onMove, { passive: true });
    document.documentElement.addEventListener('mouseleave', onLeave);
    document.documentElement.addEventListener('mouseenter', onEnter);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.documentElement.removeEventListener('mouseleave', onLeave);
      document.documentElement.removeEventListener('mouseenter', onEnter);
    };
  }, []); // empty deps — listeners attached once, never re-attached

  return (
    <>
      {/* White dot — direct follow */}
      <motion.div
        style={{
          position: 'fixed',
          left: dotLeft,
          top: dotTop,
          width: 8,
          height: 8,
          borderRadius: '50%',
          backgroundColor: '#ffffff',
          pointerEvents: 'none',
          zIndex: 9999,
          opacity: isVisible ? 1 : 0,
        }}
        animate={{ scale: isHovering ? 0 : 1 }}
        transition={{ duration: 0.15 }}
      />

      {/* Blue ring — spring lag */}
      <motion.div
        style={{
          position: 'fixed',
          left: ringLeft,
          top: ringTop,
          borderRadius: '50%',
          border: '1.5px solid #60A5FA',
          pointerEvents: 'none',
          zIndex: 9998,
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          width:  isHovering ? 64 : 44,
          height: isHovering ? 64 : 44,
          backgroundColor: isHovering ? 'rgba(96,165,250,0.12)' : 'transparent',
        }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
      />
    </>
  );
};

export default CustomCursor;
