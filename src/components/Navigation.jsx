import React from 'react';
import { motion } from 'framer-motion';

const Navigation = ({ onNavigate }) => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 30,
        padding: '0 2rem',
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'rgba(10,10,10,0.75)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,0.04)',
      }}
    >
      {/* Logo / Name — click to go home */}
      <motion.button
        data-hover
        onClick={() => onNavigate && onNavigate(null)}
        whileHover={{ opacity: 0.75 }}
        style={{
          fontFamily: '"Playfair Display", Georgia, serif',
          fontSize: 'clamp(1rem, 2vw, 1.2rem)',
          fontWeight: 700,
          color: '#FFFFFF',
          letterSpacing: '0.02em',
          fontStyle: 'italic',
          background: 'transparent',
          border: 'none',
          padding: 0,
          transition: 'opacity 0.2s',
        }}
      >
        Miten Shah
      </motion.button>
    </motion.nav>
  );
};

export default Navigation;
