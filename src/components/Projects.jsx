import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar, ChevronDown, ChevronUp } from 'lucide-react';
import SparklesBackground from './Sparkles';
import { projects } from '../data/portfolioData';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll ? projects : projects.filter(p => p.featured);

  return (
    <div style={{ background: '#0A0A0A', minHeight: '100vh', position: 'relative' }}>
      <SparklesBackground count={20} color1="#3B82F6" color2="#60A5FA" style={{ opacity: 0.3 }}/>

      <div style={{ position: 'relative', zIndex: 1, padding: '7rem clamp(1rem, 4vw, 2rem) 5rem', maxWidth: '1040px', margin: '0 auto' }}>

        {/* Header — no count box */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 900, color: '#FFFFFF', lineHeight: 1.1 }}>
            Featured<br /><span style={{ color: '#60A5FA' }}>Projects.</span>
          </h2>
        </motion.div>

        {/* Unified grid — same card format for all projects, no Featured tag */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(clamp(260px, 35vw, 340px), 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
          {displayed.map((project, i) => (
            <motion.div key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              data-hover
              whileHover={{ borderColor: 'rgba(96,165,250,0.4)', boxShadow: '0 0 30px rgba(96,165,250,0.09)', y: -4 }}
              style={{ background: '#111111', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '8px', padding: 'clamp(1.25rem, 3vw, 1.75rem)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', transition: 'all 0.22s', position: 'relative', overflow: 'hidden' }}
            >
              {/* Left accent bar */}
              <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '3px', background: 'linear-gradient(to bottom, #3B82F6, rgba(59,130,246,0.1))' }}/>

              <div style={{ paddingLeft: '0.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.75rem' }}>
                  <Calendar size={11} color="#525252"/>
                  <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.68rem', color: '#525252' }}>{project.duration}</span>
                </div>
                <h3 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: 'clamp(1rem, 2vw, 1.2rem)', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.75rem', lineHeight: 1.25 }}>{project.title}</h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(0.82rem, 1.5vw, 0.875rem)', color: '#A3A3A3', lineHeight: 1.7, marginBottom: '1.5rem' }}>{project.description}</p>
              </div>

              <motion.a href={project.link} target="_blank" rel="noopener noreferrer" data-hover
                whileHover={{ backgroundColor: '#60A5FA', boxShadow: '0 0 18px rgba(96,165,250,0.3)' }}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.5rem 1.1rem', background: '#3B82F6', color: '#FFFFFF', borderRadius: '3px', fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none', alignSelf: 'flex-start', transition: 'all 0.2s' }}>
                <ExternalLink size={13}/> View Project
              </motion.a>
            </motion.div>
          ))}
        </div>

        {projects.some(p => !p.featured) && (
          <div style={{ textAlign: 'center' }}>
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
