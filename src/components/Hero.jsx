import React from 'react';
import { motion } from 'framer-motion';
import { Download, ExternalLink } from 'lucide-react';
import CardGrid from './CardGrid';
import FloatingTags from './FloatingTags';
import { personalInfo } from '../data/portfolioData';

const Hero = ({ onNavigate }) => {
  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        background: '#0A0A0A',
        overflow: 'hidden',
        paddingTop: '64px',
      }}
    >
      {/* ── Layer 0: Ghost "MITEN SHAH" background text ─── */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -52%)',
          zIndex: 0,
          whiteSpace: 'nowrap',
          pointerEvents: 'none',
          userSelect: 'none',
          textAlign: 'center',
          width: '100%',
        }}
      >
        <span
          className="text-stroke font-playfair"
          style={{
            fontSize: 'clamp(5rem, 20vw, 22rem)',
            fontWeight: 900,
            letterSpacing: '0.04em',
            lineHeight: 0.88,
            display: 'block',
          }}
        >
          MITEN
        </span>
        <span
          className="text-stroke font-playfair"
          style={{
            fontSize: 'clamp(5rem, 20vw, 22rem)',
            fontWeight: 900,
            letterSpacing: '0.04em',
            lineHeight: 0.88,
            display: 'block',
          }}
        >
          SHAH
        </span>
      </div>

      {/* ── Layer 5: Floating sphere tags ─────────────────── */}
      <FloatingTags />

      {/* ── Layer 10: Main content ─────────────────────────── */}
      <div style={{ position: 'relative', zIndex: 10 }}>
        {/* Hero text block */}
        <div
          style={{
            padding: '4rem 2rem 2rem',
            maxWidth: '860px',
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            style={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: '0.68rem',
              color: '#3B82F6',
              letterSpacing: '0.35em',
              textTransform: 'uppercase',
              marginBottom: '1.25rem',
            }}
          >
            Portfolio — 2026
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
              fontWeight: 900,
              color: '#FFFFFF',
              lineHeight: 1.05,
              letterSpacing: '0.02em',
              marginBottom: '1.25rem',
            }}
          >
            {personalInfo.name}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '0.5rem 0.75rem',
              marginBottom: '2.5rem',
            }}
          >
            {['Product Manager', 'Agile Strategist', 'Global Mindset'].map((tag, i) => (
              <span key={tag} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: 'clamp(0.65rem, 1.3vw, 0.85rem)',
                    fontWeight: 500,
                    color: '#A3A3A3',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                  }}
                >
                  {tag}
                </span>
                {i < 2 && (
                  <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#3B82F6', flexShrink: 0, display: 'inline-block' }} />
                )}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem' }}
          >
            <motion.a
              data-hover
              href="/MitenShah.pdf"
              download="MitenShah.pdf"
              whileHover={{ backgroundColor: '#60A5FA', boxShadow: '0 0 24px rgba(96,165,250,0.35)' }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.7rem 1.75rem',
                background: '#3B82F6',
                color: '#FFFFFF',
                borderRadius: '3px',
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.78rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                transition: 'all 0.2s',
              }}
            >
              <Download size={14} />
              Download CV
            </motion.a>

            <motion.a
              data-hover
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ borderColor: '#60A5FA', color: '#93C5FD', backgroundColor: 'rgba(96,165,250,0.06)' }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.7rem 1.75rem',
                background: 'transparent',
                color: '#60A5FA',
                border: '1px solid rgba(96,165,250,0.4)',
                borderRadius: '3px',
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.78rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                transition: 'all 0.2s',
              }}
            >
              <ExternalLink size={14} />
              View LinkedIn
            </motion.a>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem', marginBottom: '1.5rem' }}
        >
          <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.58rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#525252' }}>
            Scroll cards to explore
          </span>
          <motion.div animate={{ x: [0, 8, 0] }} transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 7h8M8 4l3 3-3 3" stroke="#525252" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
        </motion.div>

        {/* Card grid */}
        <CardGrid onNavigate={onNavigate} />

        <div style={{ height: '4rem' }} />
      </div>
    </section>
  );
};

export default Hero;
