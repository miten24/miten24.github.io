import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';

const About = () => {
  return (
    <div style={{ background: '#0A0A0A', minHeight: '100vh' }}>
      <div
        style={{
          position: 'relative',
          height: '100vh',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'flex-end',
        }}
      >
        <img
          src="/headshot.jpg"
          alt="Miten Shah"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center top',
            filter: 'grayscale(15%) brightness(0.72)',
          }}
          onError={(e) => { e.target.style.display = 'none'; }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(10,10,10,0.25) 0%, rgba(10,10,10,0.45) 40%, rgba(10,10,10,0.92) 80%, #0A0A0A 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(10,10,10,0.75) 0%, transparent 65%)' }} />
        <div style={{ position: 'relative', zIndex: 1, padding: '3rem 3rem', maxWidth: '700px' }}>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}
            style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.65rem', color: '#3B82F6', letterSpacing: '0.35em', textTransform: 'uppercase', marginBottom: '1rem' }}>
            01 — About
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7 }}
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 900, color: '#FFFFFF', lineHeight: 1.05, marginBottom: '1.25rem' }}>
            Product Manager<br /><span style={{ color: '#60A5FA' }}>& Agile Leader.</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.6 }}
            style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(0.85rem, 1.5vw, 1rem)', color: '#A3A3A3', lineHeight: 1.7, maxWidth: '520px' }}>
            Driven by curiosity, impact, and a user-first mindset.
          </motion.p>
        </div>
      </div>

      <div style={{ padding: '5rem 2rem 5rem', maxWidth: '800px', margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
          style={{ background: '#111111', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '4px', padding: '2.5rem', marginBottom: '3rem' }}>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)', color: '#A3A3A3', lineHeight: 1.8, textAlign: 'center' }}>
            {personalInfo.about}
          </p>
        </motion.div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
          {[
            { icon: '🎯', title: 'Product Leadership', desc: 'Driving user-focused outcomes through strategy, teamwork, and agile execution.' },
            { icon: '⚡', title: 'Agile Mindset', desc: 'Leading iterative sprints with speed, flexibility, and clarity of purpose.' },
            { icon: '🌍', title: 'Global & Data-Driven', desc: 'Blending insights from India, UK, and Norway to build inclusive, impactful products.' },
          ].map((card, i) => (
            <motion.div key={card.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }} data-hover
              whileHover={{ borderColor: 'rgba(96,165,250,0.35)', boxShadow: '0 0 30px rgba(96,165,250,0.08)' }}
              style={{ background: '#111111', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '4px', padding: '2rem 1.75rem', transition: 'all 0.2s' }}>
              <div style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>{card.icon}</div>
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.78rem', fontWeight: 700, color: '#FFFFFF', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>{card.title}</h3>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', color: '#525252', lineHeight: 1.65 }}>{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
