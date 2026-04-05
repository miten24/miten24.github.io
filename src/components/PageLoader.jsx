import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PageLoader = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const totalDuration = 1800; // ms
    const steps = 100;
    const interval = totalDuration / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += 1;
      setCount(current);
      if (current >= 100) {
        clearInterval(timer);
        setTimeout(() => {
          setVisible(false);
          setTimeout(onComplete, 500);
        }, 300);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="page-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="fixed inset-0 z-[9997] flex flex-col items-center justify-center"
          style={{ background: '#0A0A0A' }}
        >
          {/* Name */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-[#525252] tracking-[0.4em] uppercase mb-6"
            style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.7rem' }}
          >
            Miten Shah
          </motion.p>

          {/* Counter */}
          <div className="flex items-end gap-1">
            <motion.span
              style={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: 'clamp(4rem, 12vw, 8rem)',
                fontWeight: 300,
                color: '#FFFFFF',
                lineHeight: 1,
                letterSpacing: '-0.04em',
              }}
            >
              {String(count).padStart(2, '0')}
            </motion.span>
            <span
              style={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                fontWeight: 300,
                color: '#3B82F6',
                lineHeight: 1,
                marginBottom: '0.4em',
              }}
            >
              %
            </span>
          </div>

          {/* Label */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-[#525252] tracking-[0.3em] uppercase mt-4"
            style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.65rem' }}
          >
            Loading Portfolio
          </motion.p>

          {/* Progress bar */}
          <div
            className="absolute bottom-0 left-0 right-0"
            style={{ height: '2px', background: '#111111' }}
          >
            <motion.div
              style={{
                height: '100%',
                background: 'linear-gradient(90deg, #1D4ED8, #3B82F6, #60A5FA)',
                width: `${count}%`,
                transition: 'width 0.02s linear',
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;
