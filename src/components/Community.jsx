import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, TrendingUp } from 'lucide-react';
import SparklesBackground from './Sparkles';
import { community } from '../data/portfolioData';

const ACCENT_COLORS = ['#3B82F6', '#60A5FA', '#818CF8', '#A78BFA'];

const Community = () => (
  <div style={{ background: '#0A0A0A', minHeight: '100vh', position: 'relative' }}>
    <SparklesBackground count={16} color1="#3B82F6" color2="#60A5FA" style={{ opacity: 0.28 }}/>

    <div style={{ position: 'relative', zIndex: 1, padding: '7rem 2rem 5rem', maxWidth: '1040px', margin: '0 auto' }}>

      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ marginBottom: '3rem', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <h2 data-magnify style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontWeight: 900, color: '#FFFFFF', lineHeight: 1.1 }}>
          Community &<br /><span style={{ color: '#60A5FA' }}>Leadership.</span>
        </h2>
        <div style={{ background: 'rgba(59,130,246,0.09)', border: '1px solid rgba(96,165,250,0.18)', borderRadius: '8px', padding: '0.85rem 1.25rem', textAlign: 'center' }}>
          <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '1.8rem', fontWeight: 700, color: '#60A5FA', lineHeight: 1 }}>{community.length}</div>
          <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.6rem', color: '#525252', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '4px' }}>Roles</div>
        </div>
      </motion.div>

      {/* Full-width stacked cards with side accent */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {community.map((item, i) => (
          <motion.div key={item.id}
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.12, duration: 0.55 }}
            data-hover
            whileHover={{ borderColor: `${ACCENT_COLORS[i % ACCENT_COLORS.length]}55`, boxShadow: `0 0 30px ${ACCENT_COLORS[i % ACCENT_COLORS.length]}15` }}
            style={{ background: '#111111', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '8px', padding: '1.75rem 2rem', display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '1.75rem', alignItems: 'center', transition: 'all 0.22s', position: 'relative', overflow: 'hidden' }}
          >
            {/* Left colour bar */}
            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '3px', background: ACCENT_COLORS[i % ACCENT_COLORS.length], borderRadius: '3px 0 0 3px', opacity: 0.7 }}/>

            {/* Icon */}
            <div style={{ width: 52, height: 52, borderRadius: '50%', background: `${ACCENT_COLORS[i % ACCENT_COLORS.length]}18`, border: `1px solid ${ACCENT_COLORS[i % ACCENT_COLORS.length]}35`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Users size={22} color={ACCENT_COLORS[i % ACCENT_COLORS.length]}/>
            </div>

            {/* Content */}
            <div>
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: '0.5rem 1.5rem', marginBottom: '0.5rem' }}>
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.05rem', fontWeight: 700, color: '#FFFFFF' }}>{item.organization}</h3>
                <h4 style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.68rem', color: ACCENT_COLORS[i % ACCENT_COLORS.length], letterSpacing: '0.1em', textTransform: 'uppercase' }}>{item.role}</h4>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.9rem' }}>
                <Calendar size={11} color="#525252"/>
                <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.68rem', color: '#525252' }}>{item.duration}</span>
              </div>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', color: '#A3A3A3', lineHeight: 1.65 }}>{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Impact note */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
        style={{ marginTop: '3rem', background: 'rgba(59,130,246,0.06)', border: '1px solid rgba(96,165,250,0.15)', borderRadius: '8px', padding: '1.75rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <TrendingUp size={22} color="#60A5FA" style={{ flexShrink: 0 }}/>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', color: '#A3A3A3', lineHeight: 1.65 }}>
          Actively contributing to the PM community through mentorship, events, and cross-cultural collaboration across India, UK, and Norway.
        </p>
      </motion.div>
    </div>
  </div>
);

export default Community;
