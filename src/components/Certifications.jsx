import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { certifications } from '../data/portfolioData';

const Certifications = () => {
  return (
    <div style={{ background: '#0A0A0A', minHeight: '100vh', padding: '7rem 2rem 5rem' }}>
      <div style={{ maxWidth: '760px', margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ marginBottom: '4rem' }}>
          <p style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.65rem', color: '#3B82F6', letterSpacing: '0.35em', textTransform: 'uppercase', marginBottom: '1rem' }}>04 — Certifications</p>
          <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 900, color: '#FFFFFF', lineHeight: 1.1 }}>
            Professional<br /><span style={{ color: '#60A5FA' }}>Certifications.</span>
          </h2>
        </motion.div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
          {certifications.map((cert, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1, duration: 0.5 }}
              data-hover whileHover={{ borderColor: 'rgba(96,165,250,0.4)', boxShadow: '0 0 30px rgba(96,165,250,0.1)' }}
              style={{ background: '#111111', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '4px', padding: '2rem 1.75rem', textAlign: 'center', transition: 'all 0.2s' }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(96,165,250,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Award size={22} color="#60A5FA" />
                </div>
              </div>
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', fontWeight: 600, color: '#FFFFFF', lineHeight: 1.4 }}>{cert}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
