import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Award } from 'lucide-react';
import { education } from '../data/portfolioData';

const Education = () => {
  return (
    <div style={{ background: '#0A0A0A', minHeight: '100vh', padding: '7rem 2rem 5rem' }}>
      <div style={{ maxWidth: '760px', margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ marginBottom: '4rem' }}>
          <p style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.65rem', color: '#3B82F6', letterSpacing: '0.35em', textTransform: 'uppercase', marginBottom: '1rem' }}>03 — Education</p>
          <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 900, color: '#FFFFFF', lineHeight: 1.1 }}>
            Academic<br /><span style={{ color: '#60A5FA' }}>Journey.</span>
          </h2>
        </motion.div>
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', left: '1rem', top: 0, bottom: 0, width: '1px', background: 'linear-gradient(to bottom, #60A5FA, rgba(96,165,250,0.05))' }} />
          {education.map((edu, i) => (
            <motion.div key={edu.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.15, duration: 0.5 }}
              style={{ position: 'relative', paddingLeft: '3rem', marginBottom: '2.5rem' }}>
              <div style={{ position: 'absolute', left: '0.625rem', top: '1.5rem', width: '0.75rem', height: '0.75rem', borderRadius: '50%', background: '#60A5FA', border: '2px solid #0A0A0A', boxShadow: '0 0 12px rgba(96,165,250,0.5)', zIndex: 1 }} />
              <motion.div data-hover whileHover={{ borderColor: 'rgba(96,165,250,0.35)', boxShadow: '0 0 30px rgba(96,165,250,0.07)' }}
                style={{ background: '#111111', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '4px', padding: '1.75rem', transition: 'all 0.2s' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.75rem' }}>
                  <Calendar size={11} color="#525252" />
                  <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.7rem', color: '#525252' }}>{edu.duration}</span>
                </div>
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.05rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.25rem' }}>{edu.degree}</h3>
                <h4 style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', fontWeight: 600, color: '#3B82F6', marginBottom: '0.75rem' }}>{edu.institution}</h4>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '1rem' }}>
                  <Award size={13} color="#60A5FA" />
                  <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.78rem', color: '#60A5FA', fontWeight: 500 }}>{edu.grade}</span>
                </div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.85rem', color: '#525252', lineHeight: 1.65 }}>
                  <span style={{ color: '#A3A3A3', fontWeight: 500 }}>Key Modules: </span>{edu.modules}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
