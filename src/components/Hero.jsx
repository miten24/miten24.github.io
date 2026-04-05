import React from 'react';
import { motion } from 'framer-motion';
import { Download, ExternalLink } from 'lucide-react';
import CardGrid from './CardGrid';
import FloatingTags from './FloatingTags';
import SparklesBackground from './Sparkles';
import SparklesCore from './SparklesCore';
import { personalInfo } from '../data/portfolioData';

/* ── Scroll the card grid container to the right ── */
const scrollCards = () => {
  const grid = document.querySelector('.card-grid-scroll');
  if (grid) grid.scrollBy({ left: 320, behavior: 'smooth' });
};

const Hero = ({ onNavigate }) => (
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
    {/* ── Background sparkle particles ─────────────────────── */}
    <SparklesBackground count={36} color1="#3B82F6" color2="#60A5FA" style={{ zIndex: 0, opacity: 0.5 }} />

    {/* ── Subtle radial glow behind text ───────────────────── */}
    <div
      aria-hidden
      style={{
        position: 'absolute',
        top: '32%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '65vw',
        height: '42vh',
        background: 'radial-gradient(ellipse at center, rgba(59,130,246,0.09) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 1,
      }}
    />

    {/* ── Floating sphere tags ──────────────────────────────── */}
    <FloatingTags />

    {/* ── Main content ──────────────────────────────────────── */}
    <div style={{ position: 'relative', zIndex: 10 }}>

      {/* Hero text block */}
      <div
        style={{
          padding: '4rem 2rem 0',
          maxWidth: '860px',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        {/* Portfolio label */}
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
          Portfolio
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontSize: 'clamp(2.8rem, 7vw, 6rem)',
            fontWeight: 900,
            color: '#FFFFFF',
            lineHeight: 1.05,
            letterSpacing: '0.02em',
            marginBottom: 0,
            position: 'relative',
            zIndex: 2,
          }}
        >
          {personalInfo.name}
        </motion.h1>

        {/* ── Aceternity-style SparklesCore beneath title ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          style={{ position: 'relative', width: '100%', height: '120px', margin: '0 auto' }}
        >
          {/* gradient line accents (matches aceternity) */}
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', top: 0 }}>
            <div style={{ position: 'absolute', left: '15%', right: '15%', top: 0, height: '1px', background: 'linear-gradient(to right, transparent, #3B82F6, transparent)', filter: 'blur(0.5px)' }}/>
            <div style={{ position: 'absolute', left: '15%', right: '15%', top: 0, height: '2px', background: 'linear-gradient(to right, transparent, #3B82F6, transparent)', filter: 'blur(3px)' }}/>
            <div style={{ position: 'absolute', left: '35%', right: '35%', top: 0, height: '1px', background: 'linear-gradient(to right, transparent, #60A5FA, transparent)', filter: 'blur(0.5px)' }}/>
            <div style={{ position: 'absolute', left: '35%', right: '35%', top: 0, height: '3px', background: 'linear-gradient(to right, transparent, #60A5FA, transparent)', filter: 'blur(4px)' }}/>
          </div>

          {/* Canvas particle field */}
          <SparklesCore
            id="hero-sparkles"
            background="transparent"
            minSize={0.4}
            maxSize={1.1}
            particleDensity={900}
            particleColor="#FFFFFF"
            speed={0.9}
            style={{ position: 'absolute', inset: 0 }}
          />

          {/* Radial mask — fades to black toward edges/bottom */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse 70% 60% at 50% 0%, transparent 30%, #0A0A0A 100%)',
            pointerEvents: 'none',
          }}/>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}
        >
          <motion.a
            data-hover
            href="/MitenShah.pdf"
            download="MitenShah.pdf"
            whileHover={{ backgroundColor: '#60A5FA', boxShadow: '0 0 24px rgba(96,165,250,0.35)' }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.7rem 1.75rem', background: '#3B82F6', color: '#FFFFFF', borderRadius: '3px', fontFamily: 'Inter, sans-serif', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none', transition: 'all 0.2s' }}
          >
            <Download size={14} /> Download CV
          </motion.a>

          <motion.a
            data-hover
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ borderColor: '#60A5FA', color: '#93C5FD', backgroundColor: 'rgba(96,165,250,0.06)' }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.7rem 1.75rem', background: 'transparent', color: '#60A5FA', border: '1px solid rgba(96,165,250,0.4)', borderRadius: '3px', fontFamily: 'Inter, sans-serif', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none', transition: 'all 0.2s' }}
          >
            <ExternalLink size={14} /> View LinkedIn
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll hint — scrolls card grid horizontally */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.75 }}
        onClick={scrollCards}
        data-hover
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem', margin: '0 auto 1.25rem', background: 'transparent', border: 'none', padding: '0.5rem 1rem' }}
      >
        <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.58rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#525252' }}>
          Scroll to explore
        </span>
        <motion.div animate={{ x: [0, 8, 0] }} transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M3 7h8M8 4l3 3-3 3" stroke="#525252" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </motion.button>

      {/* Card grid */}
      <CardGrid onNavigate={onNavigate} />

      <div style={{ height: '4rem' }} />
    </div>
  </section>
);

export default Hero;
