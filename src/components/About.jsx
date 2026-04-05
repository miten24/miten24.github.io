import React from 'react';
import { motion } from 'framer-motion';
import SparklesBackground from './Sparkles';
import { personalInfo } from '../data/portfolioData';

const About = () => (
  <div style={{ background: '#0A0A0A', minHeight: '100vh' }}>

    {/* ── Screen 1: Hero with headshot ── */}
    <div style={{ position: 'relative', height: '100vh', overflow: 'hidden', display: 'flex', alignItems: 'flex-end' }}>

      {/* Headshot full-bleed */}
      <img
        src="/Miten.JPG"
        alt="Miten Shah"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', filter: 'grayscale(10%) brightness(0.68)' }}
        onError={e => { e.target.style.display = 'none'; }}
      />

      {/* Gradient overlays */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(10,10,10,0.2) 0%, rgba(10,10,10,0.35) 40%, rgba(10,10,10,0.92) 80%, #0A0A0A 100%)' }}/>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(10,10,10,0.8) 0%, transparent 60%)' }}/>

      {/* Subtle sparkles overlay */}
      <SparklesBackground count={12} color1="#3B82F6" color2="#60A5FA" style={{ opacity: 0.3 }}/>

      {/* Text overlay */}
      <div style={{ position: 'relative', zIndex: 2, padding: '3rem 3.5rem', maxWidth: '680px' }}>
        <motion.h2
          data-magnify
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: 'clamp(2.5rem, 5vw, 5rem)', fontWeight: 900, color: '#FFFFFF', lineHeight: 1.05, marginBottom: '1.25rem' }}
        >
          Product Manager<br /><span style={{ color: '#60A5FA' }}>& Agile Leader.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)', color: '#A3A3A3', lineHeight: 1.7, maxWidth: '500px' }}
        >
          Driven by curiosity, impact, and a user-first mindset.
        </motion.p>
      </div>
    </div>

    {/* ── Screen 2: About content ── */}
    <div style={{ position: 'relative', padding: '5rem 2rem 5rem', maxWidth: '1000px', margin: '0 auto' }}>
      <SparklesBackground count={10} color1="#3B82F6" color2="#60A5FA" style={{ opacity: 0.25 }}/>

      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ background: '#111111', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '8px', padding: '2.5rem', marginBottom: '3rem', borderLeft: '3px solid #3B82F6' }}
        >
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)', color: '#A3A3A3', lineHeight: 1.85, textAlign: 'left' }}>
            {personalInfo.about}
          </p>
        </motion.div>

        {/* Three pillars */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
          {[
            {
              icon: '🎯',
              title: 'Product Leadership',
              desc: 'Driving user-focused outcomes through strategy, teamwork, and agile execution.',
              stat: '4+', statLabel: 'Years Building',
            },
            {
              icon: '⚡',
              title: 'Agile Mindset',
              desc: 'Leading iterative sprints with speed, flexibility, and clarity of purpose.',
              stat: '10+', statLabel: 'Products Shipped',
            },
            {
              icon: '🌍',
              title: 'Global Perspective',
              desc: 'Blending insights from India, UK, and Norway to build inclusive, impactful products.',
              stat: '3', statLabel: 'Continents',
            },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              data-hover
              whileHover={{ borderColor: 'rgba(96,165,250,0.4)', boxShadow: '0 0 30px rgba(96,165,250,0.08)', y: -4 }}
              style={{ background: '#111111', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '8px', padding: '2.25rem 2rem', transition: 'all 0.25s', position: 'relative', overflow: 'hidden' }}
            >
              <div style={{ position: 'absolute', top: 0, right: 0, padding: '0.75rem 1rem', borderBottomLeftRadius: '8px', background: 'rgba(59,130,246,0.08)', border: '1px solid rgba(96,165,250,0.12)', borderTopColor: 'transparent', borderRightColor: 'transparent' }}>
                <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '1.1rem', fontWeight: 700, color: '#60A5FA', lineHeight: 1 }}>{card.stat}</div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.58rem', color: '#525252', letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: '2px' }}>{card.statLabel}</div>
              </div>
              <div style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>{card.icon}</div>
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', fontWeight: 700, color: '#FFFFFF', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>{card.title}</h3>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', color: '#525252', lineHeight: 1.65 }}>{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default About;
