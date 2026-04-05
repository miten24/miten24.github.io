import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SparklesBackground from './Sparkles';
import { skills } from '../data/portfolioData';

const CATEGORIES = [
  { key: 'product', label: 'Product Skills',       emoji: '🎯' },
  { key: 'tools',   label: 'Tools & Technologies', emoji: '⚙️' },
  { key: 'soft',    label: 'Soft Skills',           emoji: '💡' },
];

const Skills = () => {
  const [active, setActive] = useState('product');

  return (
    <div style={{ background: '#0A0A0A', minHeight: '100vh', position: 'relative' }}>
      <SparklesBackground count={16} color1="#3B82F6" color2="#60A5FA" style={{ opacity: 0.28 }}/>

      <div style={{ position: 'relative', zIndex: 1, padding: '7rem 2rem 5rem', maxWidth: '1040px', margin: '0 auto' }}>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ marginBottom: '3rem' }}>
          <h2 data-magnify style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontWeight: 900, color: '#FFFFFF', lineHeight: 1.1 }}>
            Skills &<br /><span style={{ color: '#60A5FA' }}>Expertise.</span>
          </h2>
        </motion.div>

        {/* Category tabs */}
        <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
          {CATEGORIES.map(cat => (
            <motion.button
              key={cat.key}
              data-hover
              onClick={() => setActive(cat.key)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.6rem 1.25rem',
                background: active === cat.key ? '#3B82F6' : 'rgba(59,130,246,0.08)',
                border: active === cat.key ? '1px solid #3B82F6' : '1px solid rgba(96,165,250,0.18)',
                borderRadius: '30px',
                color: active === cat.key ? '#FFFFFF' : '#A3A3A3',
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.8rem',
                fontWeight: 600,
                letterSpacing: '0.06em',
                transition: 'all 0.2s',
              }}
            >
              <span>{cat.emoji}</span>
              {cat.label}
              <span style={{
                background: active === cat.key ? 'rgba(255,255,255,0.2)' : 'rgba(96,165,250,0.15)',
                borderRadius: '20px',
                padding: '0.1rem 0.45rem',
                fontSize: '0.65rem',
                fontFamily: '"JetBrains Mono", monospace',
                fontWeight: 700,
              }}>
                {skills[cat.key]?.length || 0}
              </span>
            </motion.button>
          ))}
        </div>

        {/* Skills display — two-panel layout */}
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,280px)', gap: '2.5rem', alignItems: 'start' }}>

          {/* Skill chips */}
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {skills[active]?.map((skill, i) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.04, duration: 0.3, type: 'spring', stiffness: 200 }}
                  data-hover
                  whileHover={{ scale: 1.07, borderColor: 'rgba(96,165,250,0.6)', color: '#BFDBFE', y: -2 }}
                  style={{ display: 'inline-flex', alignItems: 'center', padding: '0.45rem 1rem', background: 'rgba(59,130,246,0.07)', border: '1px solid rgba(96,165,250,0.18)', borderRadius: '9999px', color: '#93C5FD', fontFamily: 'Inter, sans-serif', fontSize: '0.82rem', fontWeight: 500, transition: 'all 0.2s', whiteSpace: 'nowrap' }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: category info */}
          <motion.div initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.5 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', position: 'sticky', top: '4rem' }}>

            {CATEGORIES.map(cat => (
              <div key={cat.key}
                style={{ background: active === cat.key ? 'rgba(59,130,246,0.1)' : '#111111', border: active === cat.key ? '1px solid rgba(96,165,250,0.35)' : '1px solid rgba(255,255,255,0.06)', borderRadius: '8px', padding: '1.25rem 1.5rem', transition: 'all 0.25s' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '1.1rem' }}>{cat.emoji}</span>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.78rem', fontWeight: 700, color: active === cat.key ? '#FFFFFF' : '#525252', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{cat.label}</span>
                </div>
                <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '1.6rem', fontWeight: 700, color: active === cat.key ? '#60A5FA' : '#525252', lineHeight: 1 }}>
                  {skills[cat.key]?.length || 0}
                  <span style={{ fontSize: '0.7rem', marginLeft: '0.35rem', color: '#525252', fontWeight: 400 }}>skills</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
