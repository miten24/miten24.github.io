import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Award, Globe } from 'lucide-react';
import SparklesBackground from './Sparkles';
import { education } from '../data/portfolioData';

const Education = () => (
  <div style={{ background: '#0A0A0A', minHeight: '100vh', position: 'relative' }}>
    <SparklesBackground count={16} color1="#3B82F6" color2="#60A5FA" style={{ opacity: 0.28 }}/>

    <div style={{ position: 'relative', zIndex: 1, padding: '7rem 2rem 5rem', maxWidth: '1040px', margin: '0 auto' }}>

      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ marginBottom: '3rem' }}>
        <h2 data-magnify style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontWeight: 900, color: '#FFFFFF', lineHeight: 1.1 }}>
          Academic<br /><span style={{ color: '#60A5FA' }}>Journey.</span>
        </h2>
      </motion.div>

      {/* Two-column: timeline | world highlight */}
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0, 280px)', gap: '2.5rem', alignItems: 'start' }}>

        {/* Timeline */}
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', left: '1rem', top: 0, bottom: 0, width: '1px', background: 'linear-gradient(to bottom, #60A5FA, rgba(96,165,250,0.05))' }}/>
          {education.map((edu, i) => (
            <motion.div key={edu.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.15, duration: 0.5 }}
              style={{ position: 'relative', paddingLeft: '3rem', marginBottom: '2.5rem' }}>
              <div style={{ position: 'absolute', left: '0.625rem', top: '1.5rem', width: '0.75rem', height: '0.75rem', borderRadius: '50%', background: '#60A5FA', border: '2px solid #0A0A0A', boxShadow: '0 0 12px rgba(96,165,250,0.5)', zIndex: 1 }}/>
              <motion.div data-hover whileHover={{ borderColor: 'rgba(96,165,250,0.4)', boxShadow: '0 0 30px rgba(96,165,250,0.07)' }}
                style={{ background: '#111111', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '6px', padding: '1.75rem', transition: 'all 0.2s' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.7rem' }}>
                  <Calendar size={11} color="#525252"/>
                  <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.68rem', color: '#525252' }}>{edu.duration}</span>
                </div>
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.05rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.25rem' }}>{edu.degree}</h3>
                <h4 style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', fontWeight: 600, color: '#3B82F6', marginBottom: '0.75rem' }}>{edu.institution}</h4>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '1rem' }}>
                  <Award size={13} color="#60A5FA"/>
                  <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.78rem', color: '#60A5FA', fontWeight: 500 }}>{edu.grade}</span>
                </div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.85rem', color: '#525252', lineHeight: 1.65 }}>
                  <span style={{ color: '#A3A3A3', fontWeight: 500 }}>Key Modules: </span>{edu.modules}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Right panel */}
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.6 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', position: 'sticky', top: '4rem' }}>

          {/* Countries studied */}
          <div style={{ background: '#111111', border: '1px solid rgba(96,165,250,0.15)', borderRadius: '8px', padding: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
              <Globe size={14} color="#60A5FA"/>
              <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.6rem', color: '#3B82F6', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Countries</span>
            </div>
            {['🇮🇳 India', '🇬🇧 United Kingdom', '🇳🇴 Norway'].map((c, i) => (
              <div key={c} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: i < 2 ? '0.75rem' : 0 }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#60A5FA', flexShrink: 0 }}/>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.85rem', color: '#A3A3A3' }}>{c}</span>
              </div>
            ))}
          </div>

          {/* Quick stats */}
          {[
            { num: `${education.length}`, label: 'Degrees Earned' },
            { num: '3', label: 'Countries Studied In' },
          ].map(s => (
            <div key={s.label} style={{ background: 'rgba(59,130,246,0.07)', border: '1px solid rgba(96,165,250,0.14)', borderRadius: '8px', padding: '1.25rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '2rem', fontWeight: 700, color: '#60A5FA', lineHeight: 1 }}>{s.num}</span>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.72rem', color: '#525252', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </div>
);

export default Education;
