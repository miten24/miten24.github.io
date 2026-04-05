import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users } from 'lucide-react';
import { community } from '../data/portfolioData';

const Community = () => {
  return (
    <div style={{ background: '#0A0A0A', minHeight: '100vh', padding: '7rem 2rem 5rem' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ marginBottom: '4rem' }}>
          <p style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.65rem', color: '#3B82F6', letterSpacing: '0.35em', textTransform: 'uppercase', marginBottom: '1rem' }}>07 — Community</p>
          <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 900, color: '#FFFFFF', lineHeight: 1.1 }}>
            Community &<br /><span style={{ color: '#60A5FA' }}>Leadership.</span>
          </h2>
        </motion.div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.25rem' }}>
          {community.map((item, i) => (
            <motion.div key={item.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.12, duration: 0.5 }}
              data-hover whileHover={{ borderColor: 'rgba(96,165,250,0.35)', boxShadow: '0 0 30px rgba(96,165,250,0.08)', y: -4 }}
              style={{ background: '#111111', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '4px', padding: '1.75rem', transition: 'all 0.2s' }}>
              <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(96,165,250,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Users size={20} color="#60A5FA" />
              </div>
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.25rem' }}>{item.organization}</h3>
              <h4 style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.85rem', fontWeight: 600, color: '#3B82F6', marginBottom: '0.6rem' }}>{item.role}</h4>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '1rem' }}>
                <Calendar size={11} color="#525252" />
                <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.68rem', color: '#525252' }}>{item.duration}</span>
              </div>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', color: '#A3A3A3', lineHeight: 1.65 }}>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Community;
