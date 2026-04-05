import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/portfolioData';

const CATEGORIES = [
  { key: 'product', label: 'Product Skills', num: '01' },
  { key: 'tools',   label: 'Tools & Technologies', num: '02' },
  { key: 'soft',    label: 'Soft Skills', num: '03' },
];

const Skills = () => {
  return (
    <div style={{ background: '#0A0A0A', minHeight: '100vh', padding: '7rem 2rem 5rem' }}>
      <div style={{ maxWidth: '760px', margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ marginBottom: '4rem' }}>
          <p style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.65rem', color: '#3B82F6', letterSpacing: '0.35em', textTransform: 'uppercase', marginBottom: '1rem' }}>06 — Skills</p>
          <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 900, color: '#FFFFFF', lineHeight: 1.1 }}>
            Skills &<br /><span style={{ color: '#60A5FA' }}>Expertise.</span>
          </h2>
        </motion.div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {CATEGORIES.map((cat, ci) => (
            <motion.div key={cat.key} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: ci * 0.15, duration: 0.5 }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', marginBottom: '1.25rem' }}>
                <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.65rem', color: '#525252' }}>{cat.num}</span>
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', fontWeight: 700, color: '#FFFFFF', letterSpacing: '0.12em', textTransform: 'uppercase' }}>{cat.label}</h3>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                {skills[cat.key].map((skill, si) => (
                  <motion.div key={skill} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: ci * 0.1 + si * 0.04, duration: 0.3, type: 'spring', stiffness: 200 }}
                    data-hover whileHover={{ scale: 1.07, borderColor: 'rgba(96,165,250,0.5)', color: '#BFDBFE' }}
                    style={{ display: 'inline-flex', alignItems: 'center', padding: '0.375rem 0.875rem', background: 'rgba(59,130,246,0.07)', border: '1px solid rgba(96,165,250,0.18)', borderRadius: '9999px', color: '#93C5FD', fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', fontWeight: 500, transition: 'all 0.2s', whiteSpace: 'nowrap' }}>
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
};

export default Skills;
