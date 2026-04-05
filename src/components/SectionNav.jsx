import React from 'react';
import { motion } from 'framer-motion';
import { SECTIONS } from './CardGrid';

const SectionNav = ({ activeSection, onNavigate }) => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 40,
        background: 'rgba(10,10,10,0.92)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        padding: '0 1rem',
        height: '52px',
        display: 'flex',
        alignItems: 'stretch',
      }}
    >
      {/* ── Home button ── */}
      <motion.button
        data-hover
        whileTap={{ scale: 0.95 }}
        onClick={() => onNavigate(null)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.35rem',
          color: '#60A5FA',
          background: 'transparent',
          border: 'none',
          paddingRight: '1rem',
          marginRight: '0.5rem',
          borderRight: '1px solid rgba(255,255,255,0.06)',
          flexShrink: 0,
          fontFamily: 'Inter, sans-serif',
          fontSize: '0.68rem',
          fontWeight: 600,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          whiteSpace: 'nowrap',
          transition: 'color 0.2s',
        }}
      >
        <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
          <path d="M9 11L5 7l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Home
      </motion.button>

      {/* ── Section links — flex-1 to fill remaining space ── */}
      {/*   Desktop: justify-content: space-evenly fills screen  */}
      {/*   Mobile:  overflowX: auto horizontal scroll           */}
      <div
        className="no-scrollbar"
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'stretch',
          overflowX: 'auto',
          /* Desktop: space links evenly across full width */
          justifyContent: 'space-evenly',
          minWidth: 0,
        }}
      >
        {SECTIONS.map((section) => {
          const isActive = activeSection === section.id;
          return (
            <motion.button
              key={section.id}
              data-hover
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate(section.id)}
              style={{
                position: 'relative',
                background: 'transparent',
                border: 'none',
                padding: '0 0.6rem',
                height: '100%',
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.62rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: isActive ? '#60A5FA' : '#525252',
                flexShrink: 0,
                transition: 'color 0.2s',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => { if (!isActive) e.currentTarget.style.color = '#A3A3A3'; }}
              onMouseLeave={e => { if (!isActive) e.currentTarget.style.color = '#525252'; }}
            >
              {section.title}
              {isActive && (
                <motion.div
                  layoutId="section-nav-indicator"
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: '0.6rem',
                    right: '0.6rem',
                    height: '2px',
                    background: '#3B82F6',
                    borderRadius: '1px 1px 0 0',
                  }}
                />
              )}
            </motion.button>
          );
        })}
      </div>
    </motion.nav>
  );
};

export default SectionNav;
