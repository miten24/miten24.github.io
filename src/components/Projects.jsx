import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar, ChevronDown, ChevronUp, Zap } from 'lucide-react';
import SparklesBackground from './Sparkles';
import { projects } from '../data/portfolioData';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll ? projects : projects.filter(p => p.featured);

  return (
    <div style={{ background: '#0A0A0A', minHeight: '100vh', position: 'relative' }}>
      <SparklesBackground count={18} color1="#3B82F6" color2="#60A5FA" style={{ opacity: 0.28 }}/>

      <div style={{ position: 'relative', zIndex: 1, padding: '7rem 2rem 5rem', maxWidth: '1060px', margin: '0 auto' }}>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ marginBottom: '3rem', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <h2 data-magnify style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontWeight: 900, color: '#FFFFFF', lineHeight: 1.1 }}>
            Featured<br /><span style={{ color: '#60A5FA' }}>Projects.</span>
          </h2>
          <div style={{ display: 'flex', gap: '1rem' }}>
            {[
              { num: `${projects.filter(p=>p.featured).length}`, label: 'Featured' },
              { num: `${projects.length}`, label: 'Total' },
            ].map(s => (
              <div key={s.label} style={{ background: 'rgba(59,130,246,0.09)', border: '1px solid rgba(96,165,250,0.18)', borderRadius: '8px', padding: '0.85rem 1.25rem', textAlign: 'center' }}>
                <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '1.8rem', fontWeight: 700, color: '#60A5FA', lineHeight: 1 }}>{s.num}</div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.6rem', color: '#525252', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '4px' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Featured — large horizontal card */}
        {displayed.filter(p => p.featured).map((project, i) => (
          <motion.div key={project.id}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            data-hover
            whileHover={{ borderColor: 'rgba(96,165,250,0.45)', boxShadow: '0 0 40px rgba(96,165,250,0.1)' }}
            style={{ background: '#111111', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '8px', padding: '2rem', marginBottom: '1.5rem', display: 'grid', gridTemplateColumns: '1fr auto', gap: '2rem', alignItems: 'start', transition: 'all 0.22s', position: 'relative', overflow: 'hidden' }}
          >
            {/* Left accent */}
            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '3px', background: 'linear-gradient(to bottom, #3B82F6, rgba(59,130,246,0.1))' }}/>

            <div style={{ paddingLeft: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.75rem' }}>
                <Zap size={12} color="#3B82F6"/>
                <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.6rem', color: '#3B82F6', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Featured</span>
                <span style={{ marginLeft: '0.5rem', fontFamily: '"JetBrains Mono", monospace', fontSize: '0.62rem', color: '#525252' }}>{project.duration}</span>
              </div>
              <h3 data-magnify style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.75rem', lineHeight: 1.2 }}>{project.title}</h3>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', color: '#A3A3A3', lineHeight: 1.7, maxWidth: '600px' }}>{project.description}</p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.75rem', flexShrink: 0 }}>
              <motion.a href={project.link} target="_blank" rel="noopener noreferrer" data-hover
                whileHover={{ backgroundColor: '#60A5FA', boxShadow: '0 0 20px rgba(96,165,250,0.3)' }}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.55rem 1.25rem', background: '#3B82F6', color: '#FFFFFF', borderRadius: '4px', fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none', whiteSpace: 'nowrap', transition: 'all 0.2s' }}>
                <ExternalLink size={13}/> View
              </motion.a>
            </div>
          </motion.div>
        ))}

        {/* Non-featured — smaller grid */}
        {displayed.filter(p => !p.featured).length > 0 && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.25rem', marginBottom: '2.5rem' }}>
            {displayed.filter(p => !p.featured).map((project, i) => (
              <motion.div key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                data-hover
                whileHover={{ borderColor: 'rgba(96,165,250,0.35)', boxShadow: '0 0 30px rgba(96,165,250,0.08)', y: -4 }}
                style={{ background: '#111111', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '8px', padding: '1.75rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', transition: 'all 0.2s', minHeight: '200px' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.75rem' }}>
                    <Calendar size={11} color="#525252"/>
                    <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.68rem', color: '#525252' }}>{project.duration}</span>
                  </div>
                  <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.75rem', lineHeight: 1.3 }}>{project.title}</h3>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', color: '#A3A3A3', lineHeight: 1.65, marginBottom: '1.5rem' }}>{project.description}</p>
                </div>
                <motion.a href={project.link} target="_blank" rel="noopener noreferrer" data-hover
                  whileHover={{ backgroundColor: '#60A5FA' }}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.5rem 1.1rem', background: '#3B82F6', color: '#FFFFFF', borderRadius: '3px', fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none', alignSelf: 'flex-start', transition: 'all 0.2s' }}>
                  <ExternalLink size={13}/> View Project
                </motion.a>
              </motion.div>
            ))}
          </div>
        )}

        {projects.some(p => !p.featured) && (
          <div style={{ textAlign: 'center', marginTop: '0.5rem' }}>
            <motion.button data-hover onClick={() => setShowAll(!showAll)}
              whileHover={{ borderColor: '#60A5FA', backgroundColor: 'rgba(96,165,250,0.06)' }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.65rem 1.5rem', background: '#111111', border: '1px solid rgba(96,165,250,0.3)', borderRadius: '4px', color: '#60A5FA', fontFamily: 'Inter, sans-serif', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', transition: 'all 0.2s' }}>
              {showAll ? <><ChevronUp size={14}/> Show Less</> : <><ChevronDown size={14}/> Show All Projects</>}
            </motion.button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
