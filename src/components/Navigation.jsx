import React from 'react';
import { motion } from 'framer-motion';
import { Download, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Navigation = () => {
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
      {/* Logo / Name */}
      <div
        style={{
          fontFamily: '"Playfair Display", Georgia, serif',
          fontSize: 'clamp(1rem, 2vw, 1.2rem)',
          fontWeight: 700,
          color: '#FFFFFF',
          letterSpacing: '0.02em',
          fontStyle: 'italic',
        }}
      >
        Miten Shah
      </div>

      {/* Right CTAs */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <motion.a
          data-hover
          href={personalInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ color: '#93C5FD' }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.72rem',
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#60A5FA',
            textDecoration: 'none',
            transition: 'color 0.2s',
          }}
        >
          <ExternalLink size={12} />
          LinkedIn
        </motion.a>

        <motion.a
          data-hover
          href="/MitenShah.pdf"
          download="MitenShah.pdf"
          whileHover={{ backgroundColor: '#60A5FA', boxShadow: '0 0 20px rgba(96,165,250,0.3)' }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.72rem',
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#FFFFFF',
            background: '#3B82F6',
            padding: '0.45rem 1rem',
            borderRadius: '3px',
            textDecoration: 'none',
            transition: 'all 0.2s',
          }}
        >
          <Download size={12} />
          CV
        </motion.a>
      </div>
    </motion.nav>
  );
};

export default Navigation;
