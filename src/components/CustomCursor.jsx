import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const CustomCursor = () => {
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);
  const [isHovering, setIsHovering]   = useState(false);
  const [isOnText,   setIsOnText]     = useState(false);
  const [isVisible,  setIsVisible]    = useState(false);
  const rafRef = useRef(null);
  const posRef = useRef({ x: -200, y: -200 });

  const springConfig = { stiffness: 260, damping: 22, mass: 0.5 };
  const ringX = useSpring(mouseX, springConfig);
  const ringY = useSpring(mouseY, springConfig);

  const dotLeft  = useTransform(mouseX, x => x - 4);
  const dotTop   = useTransform(mouseY, y => y - 4);
  const ringLeft = useTransform(ringX,  x => x - (isOnText ? 52 : isHovering ? 32 : 22));
  const ringTop  = useTransform(ringY,  y => y - (isOnText ? 52 : isHovering ? 32 : 22));

  useEffect(() => {
    /* ── Text magnification via RAF ── */
    const applyMagnify = (cx, cy) => {
      const els = document.querySelectorAll('[data-magnify]');
      els.forEach(el => {
        const r = el.getBoundingClientRect();
        const elCx = r.left + r.width / 2;
        const elCy = r.top  + r.height / 2;
        const dist = Math.hypot(cx - elCx, cy - elCy);
        const range = 180;
        if (dist < range) {
          const factor = 1 - dist / range;
          const scale = 1 + 0.09 * factor * factor; // quadratic falloff — feels natural
          el.style.transform     = `scale(${scale.toFixed(4)})`;
          el.style.transformOrigin = 'center center';
        } else {
          el.style.transform = '';
        }
      });
    };

    const tick = () => {
      applyMagnify(posRef.current.x, posRef.current.y);
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    /* ── Event listeners ── */
    const handleMouseMove = (e) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (target.closest('[data-hover]'))  setIsHovering(true);
      // detect text-level elements for magnifying-glass ring expansion
      const tag = target.tagName;
      if (['H1','H2','H3','H4','P','SPAN','A','BUTTON','LI'].includes(tag)) {
        setIsOnText(true);
      }
    };

    const handleMouseOut = (e) => {
      if (e.target.closest('[data-hover]')) setIsHovering(false);
      const tag = e.target.tagName;
      if (['H1','H2','H3','H4','P','SPAN','A','BUTTON','LI'].includes(tag)) {
        setIsOnText(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove',  handleMouseMove, { passive: true });
    window.addEventListener('mouseover',  handleMouseOver, { passive: true });
    window.addEventListener('mouseout',   handleMouseOut,  { passive: true });
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);
    document.documentElement.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener('mousemove',  handleMouseMove);
      window.removeEventListener('mouseover',  handleMouseOver);
      window.removeEventListener('mouseout',   handleMouseOut);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
      document.documentElement.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const ringSize = isOnText ? 104 : isHovering ? 64 : 44;

  return (
    <>
      {/* White dot — direct follow */}
      <motion.div
        style={{
          position: 'fixed',
          left: dotLeft,
          top:  dotTop,
          width: 8,
          height: 8,
          borderRadius: '50%',
          backgroundColor: '#ffffff',
          pointerEvents: 'none',
          zIndex: 9999,
          opacity: isVisible ? 1 : 0,
          mixBlendMode: 'difference',
        }}
        animate={{ scale: isHovering || isOnText ? 0 : 1 }}
        transition={{ duration: 0.15 }}
      />

      {/* Blue ring — spring lag */}
      <motion.div
        style={{
          position: 'fixed',
          left: ringLeft,
          top:  ringTop,
          borderRadius: '50%',
          border: `${isOnText ? '1px' : '1.5px'} solid #60A5FA`,
          pointerEvents: 'none',
          zIndex: 9998,
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          width:  ringSize,
          height: ringSize,
          backgroundColor: isOnText
            ? 'rgba(96,165,250,0.06)'
            : isHovering
              ? 'rgba(96,165,250,0.12)'
              : 'transparent',
          boxShadow: isOnText
            ? '0 0 20px rgba(96,165,250,0.15) inset'
            : 'none',
        }}
        transition={{ duration: 0.22, ease: 'easeOut' }}
      />
    </>
  );
};

export default CustomCursor;
