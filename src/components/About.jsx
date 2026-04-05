import React from 'react';
import { motion } from 'framer-motion';
import SparklesBackground from './Sparkles';
import { personalInfo } from '../data/portfolioData';

const About = () => (
  <div style={{ background: '#0A0A0A', minHeight: '100vh', position: 'relative' }}>
    <SparklesBackground count={20} color1="#3B82F6" color2="#60A5FA" style={{ opacity: 0.32 }}/>

    <div style={{ position: 'relative', zIndex: 1, padding: '7rem 2rem 5rem', maxWidth: '860px', margin: '0 auto' }}>

      {/* Page heading */}
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontWeight: 900, color: '#FFFFFF', lineHeight: 1.1 }}>
          Product Manager<br /><span style={{ color: '#60A5FA' }}>& Agile Leader.</span>
        </h2>
      </motion.div>

      {/* Bio paragraph */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.7 }}
        style={{ background: '#111111', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '8px', padding: 'clamp(1.5rem, 4vw, 2.5rem)', marginBottom: '2.5rem', borderLeft: '3px solid #3B82F6' }}
      >
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)', color: '#A3A3A3', lineHeight: 1.85 }}>
          {personalInfo.about}
        </p>
      </motion.div>

      {/* Three pillars — no stat badges */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
        {[
          { icon: '🎯', title: 'Product Leadership', desc: 'Driving user-focused outcomes through strategy, teamwork, and agile execution.' },
          { icon: '⚡', title: 'Agile Mindset',      desc: 'Leading iterative sprints with speed, flexibility, and clarity of purpose.' },
          { icon: '🌍', title: 'Global Perspective', desc: 'Blending insights from India, UK, and Norway to build inclusive, impactful products.' },
        ].map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 + i * 0.12, duration: 0.6 }}
            data-hover
            whileHover={{ borderColor: 'rgba(96,165,250,0.4)', boxShadow: '0 0 30px rgba(96,165,250,0.08)', y: -4 }}
            style={{ background: '#111111', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '8px', padding: '2rem 1.75rem', transition: 'all 0.25s' }}
          >
            <div style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>{card.icon}</div>
            <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', fontWeight: 700, color: '#FFFFFF', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>{card.title}</h3>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', color: '#525252', lineHeight: 1.65 }}>{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

export default About;
