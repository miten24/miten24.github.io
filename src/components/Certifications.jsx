import React from 'react';
import { motion } from 'framer-motion';
import { Award, Shield, BookOpen, Cpu, BarChart2, Users } from 'lucide-react';
import SparklesBackground from './Sparkles';
import { certifications } from '../data/portfolioData';

/* Map cert name → icon based on keywords */
const pickIcon = (name) => {
  const n = name.toLowerCase();
  if (n.includes('agile') || n.includes('scrum') || n.includes('product')) return <Cpu size={22} color="#60A5FA"/>;
  if (n.includes('data') || n.includes('analytic'))  return <BarChart2 size={22} color="#60A5FA"/>;
  if (n.includes('lead') || n.includes('manage'))    return <Users size={22} color="#60A5FA"/>;
  if (n.includes('learn') || n.includes('google') || n.includes('course')) return <BookOpen size={22} color="#60A5FA"/>;
  if (n.includes('secur') || n.includes('aws'))      return <Shield size={22} color="#60A5FA"/>;
  return <Award size={22} color="#60A5FA"/>;
};

const Certifications = () => (
  <div style={{ background: '#0A0A0A', minHeight: '100vh', position: 'relative' }}>
    <SparklesBackground count={16} color1="#3B82F6" color2="#60A5FA" style={{ opacity: 0.28 }}/>

    <div style={{ position: 'relative', zIndex: 1, padding: '7rem 2rem 5rem', maxWidth: '1060px', margin: '0 auto' }}>

      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ marginBottom: '3rem', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <h2 data-magnify style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontWeight: 900, color: '#FFFFFF', lineHeight: 1.1 }}>
          Professional<br /><span style={{ color: '#60A5FA' }}>Certifications.</span>
        </h2>
        <div style={{ background: 'rgba(59,130,246,0.09)', border: '1px solid rgba(96,165,250,0.2)', borderRadius: '8px', padding: '1rem 1.5rem', textAlign: 'center' }}>
          <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '2.2rem', fontWeight: 700, color: '#60A5FA', lineHeight: 1 }}>{certifications.length}</div>
          <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.65rem', color: '#525252', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '4px' }}>Certifications</div>
        </div>
      </motion.div>

      {/* Masonry-style grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.25rem' }}>
        {certifications.map((cert, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.07, duration: 0.5 }}
            data-hover
            whileHover={{ borderColor: 'rgba(96,165,250,0.45)', boxShadow: '0 0 30px rgba(96,165,250,0.1)', y: -4 }}
            style={{ background: '#111111', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '8px', padding: '1.75rem', transition: 'all 0.22s', position: 'relative', overflow: 'hidden' }}
          >
            {/* Top accent bar */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(to right, #1D4ED8, #60A5FA)', opacity: 0.6 }}/>

            <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(96,165,250,0.22)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
              {pickIcon(cert)}
            </div>

            <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', fontWeight: 600, color: '#FFFFFF', lineHeight: 1.4, marginBottom: '0.5rem' }}>{cert}</h3>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginTop: '1rem' }}>
              <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#3B82F6' }}/>
              <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.6rem', color: '#525252', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Verified</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

export default Certifications;
