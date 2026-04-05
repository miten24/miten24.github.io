import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, ChevronDown, ChevronUp, Briefcase } from 'lucide-react';
import SparklesBackground from './Sparkles';
import { experiences } from '../data/portfolioData';

const Experience = () => {
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll ? experiences : experiences.filter(e => e.featured);

  /* ── Quick stats derived from data ── */
  const companies  = [...new Set(experiences.map(e => e.company))].length;
  const locations  = [...new Set(experiences.map(e => e.location))].length;

  return (
    <div style={{ background: '#0A0A0A', minHeight: '100vh', position: 'relative' }}>
      <SparklesBackground count={18} color1="#3B82F6" color2="#60A5FA" style={{ opacity: 0.28 }}/>

      <div style={{ position: 'relative', zIndex: 1, padding: '7rem 2rem 5rem', maxWidth: '1040px', margin: '0 auto' }}>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ marginBottom: '2.5rem' }}>
          <h2 data-magnify style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontWeight: 900, color: '#FFFFFF', lineHeight: 1.1, marginBottom: '2rem' }}>
            Professional<br /><span style={{ color: '#60A5FA' }}>Experience.</span>
          </h2>

          {/* Stats bar */}
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            {[
              { label: 'Companies',  value: companies },
              { label: 'Locations',  value: locations },
              { label: 'Domains',    value: '3' },
            ].map(s => (
              <div key={s.label} style={{ background: 'rgba(59,130,246,0.08)', border: '1px solid rgba(96,165,250,0.18)', borderRadius: '6px', padding: '0.75rem 1.25rem', display: 'flex', flexDirection: 'column', gap: '0.25rem', minWidth: '90px' }}>
                <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '1.4rem', fontWeight: 700, color: '#60A5FA', lineHeight: 1 }}>{s.value}</span>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.62rem', color: '#525252', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{s.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Two-column layout: timeline | extra info */}
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0, 300px)', gap: '2.5rem', alignItems: 'start' }}>

          {/* Timeline */}
          <div>
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', left: '1rem', top: 0, bottom: 0, width: '1px', background: 'linear-gradient(to bottom, #3B82F6, rgba(59,130,246,0.05))' }}/>
              {displayed.map((exp, i) => (
                <motion.div key={exp.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1, duration: 0.5 }}
                  style={{ position: 'relative', paddingLeft: '3rem', marginBottom: '2rem' }}>
                  <div style={{ position: 'absolute', left: '0.625rem', top: '1.5rem', width: '0.75rem', height: '0.75rem', borderRadius: '50%', background: '#3B82F6', border: '2px solid #0A0A0A', boxShadow: '0 0 12px rgba(59,130,246,0.5)', zIndex: 1 }}/>
                  <motion.div data-hover whileHover={{ borderColor: 'rgba(96,165,250,0.4)', boxShadow: '0 0 30px rgba(96,165,250,0.07)' }}
                    style={{ background: '#111111', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '6px', padding: '1.75rem', transition: 'all 0.2s' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.6rem' }}>
                      <Calendar size={11} color="#525252"/>
                      <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.68rem', color: '#525252' }}>{exp.duration}</span>
                    </div>
                    <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.05rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.2rem' }}>{exp.role}</h3>
                    <h4 style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', fontWeight: 600, color: '#3B82F6', marginBottom: '0.5rem' }}>{exp.company}</h4>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '1.1rem' }}>
                      <MapPin size={11} color="#525252"/>
                      <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.78rem', color: '#525252' }}>{exp.location}</span>
                    </div>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                      {exp.achievements.map((ach, j) => (
                        <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                          <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#3B82F6', flexShrink: 0, marginTop: '0.45rem' }}/>
                          <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', color: '#A3A3A3', lineHeight: 1.65 }}>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {experiences.some(e => !e.featured) && (
              <div style={{ textAlign: 'center', paddingLeft: '3rem', marginTop: '0.5rem' }}>
                <motion.button data-hover onClick={() => setShowAll(!showAll)}
                  whileHover={{ borderColor: '#60A5FA', backgroundColor: 'rgba(96,165,250,0.06)' }}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.65rem 1.5rem', background: '#111111', border: '1px solid rgba(96,165,250,0.3)', borderRadius: '4px', color: '#60A5FA', fontFamily: 'Inter, sans-serif', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', transition: 'all 0.2s' }}>
                  {showAll ? <><ChevronUp size={14}/> Show Less</> : <><ChevronDown size={14}/> Show More</>}
                </motion.button>
              </div>
            )}
          </div>

          {/* Right panel: Key highlights */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.6 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', position: 'sticky', top: '4rem' }}>
            <div style={{ background: '#111111', border: '1px solid rgba(96,165,250,0.15)', borderRadius: '8px', padding: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
                <Briefcase size={14} color="#60A5FA"/>
                <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.6rem', color: '#3B82F6', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Domains</span>
              </div>
              {['AI & SaaS Products', 'Healthcare Tech', 'Industry 4.0', 'E-Commerce'].map((d, i) => (
                <div key={d} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: i < 3 ? '0.75rem' : 0 }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#3B82F6', flexShrink: 0 }}/>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.82rem', color: '#A3A3A3' }}>{d}</span>
                </div>
              ))}
            </div>

            <div style={{ background: '#111111', border: '1px solid rgba(96,165,250,0.15)', borderRadius: '8px', padding: '1.5rem' }}>
              <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.6rem', color: '#3B82F6', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>Impact Metrics</div>
              {[
                { metric: '30%', label: 'Pre-sales conversion' },
                { metric: '20%', label: 'Projected waste reduction' },
                { metric: '3+',  label: 'Enterprise clients secured' },
              ].map(({ metric, label }) => (
                <div key={label} style={{ marginBottom: '1rem', paddingBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                  <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '1.6rem', fontWeight: 700, color: '#60A5FA', lineHeight: 1 }}>{metric}</div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', color: '#525252', marginTop: '0.25rem' }}>{label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
