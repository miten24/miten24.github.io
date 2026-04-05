import React from 'react';
import { motion } from 'framer-motion';
import SparklesBackground from './Sparkles';
import { skills } from '../data/portfolioData';

const CATEGORIES = [
  { key: 'product', label: 'Product Skills',       emoji: '🎯' },
  { key: 'tools',   label: 'Tools & Technologies', emoji: '⚙️' },
  { key: 'soft',    label: 'Soft Skills',           emoji: '💡' },
];

const Skills = () => (
  <div style={{ background: '#0A0A0A', minHeight: '100vh', position: 'relative' }}>
    <SparklesBackground count={20} color1="#3B82F6" color2="#60A5FA" style={{ opacity: 0.3 }}/>

    <div style={{ position: 'relative', zIndex: 1, padding: '7rem clamp(1rem, 4vw, 2rem) 5rem', maxWidth: '1040px', margin: '0 auto' }}>

      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 900, color: '#FFFFFF', lineHeight: 1.1 }}>
          Skills &<br /><span style={{ color: '#60A5FA' }}>Expertise.</span>
        </h2>
      </motion.div>

      {/* All categories shown at once */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        {CATEGORIES.map((cat, ci) => (
          <motion.div
            key={cat.key}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: ci * 0.12, duration: 0.5 }}
          >
            {/* Category label */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
              <span style={{ fontSize: '1.1rem' }}>{cat.emoji}</span>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.72rem', fontWeight: 700, color: '#525252', letterSpacing: '0.12em', textTransform: 'uppercase' }}>{cat.label}</span>
              <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.05)', marginLeft: '0.5rem' }}/>
            </div>

            {/* Skill chips */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {skills[cat.key]?.map((skill, i) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: ci * 0.12 + i * 0.04, duration: 0.3, type: 'spring', stiffness: 200 }}
                  data-hover
                  whileHover={{ scale: 1.07, borderColor: 'rgba(96,165,250,0.6)', color: '#BFDBFE', y: -2 }}
                  style={{ display: 'inline-flex', alignItems: 'center', padding: '0.5rem 1.1rem', background: 'rgba(59,130,246,0.07)', border: '1px solid rgba(96,165,250,0.18)', borderRadius: '9999px', color: '#93C5FD', fontFamily: 'Inter, sans-serif', fontSize: 'clamp(0.78rem, 1.4vw, 0.85rem)', fontWeight: 500, transition: 'all 0.2s', whiteSpace: 'nowrap' }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

export default Skills;
