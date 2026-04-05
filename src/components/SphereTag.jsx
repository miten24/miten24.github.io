import React from 'react';
import { motion } from 'framer-motion';

const SphereTag = ({ label, delay = 0, style = {} }) => {
  return (
    <motion.div
      animate={{ y: [0, -18, 0] }}
      transition={{
        duration: 4 + delay,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
      style={{ position: 'absolute', ...style }}
    >
      {/* Outer orbit rings */}
      <div className="relative" style={{ width: 120, height: 120 }}>
        <div className="orbit-ring" />
        <div className="orbit-ring-2" />

        {/* Sphere body */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '50%',
            background: 'radial-gradient(circle at 38% 38%, rgba(96,165,250,0.12) 0%, rgba(59,130,246,0.05) 60%, transparent 100%)',
            border: '1px solid rgba(96,165,250,0.25)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0.75rem',
          }}
        >
          {/* Inner highlight */}
          <div
            style={{
              position: 'absolute',
              top: '14%',
              left: '20%',
              width: '30%',
              height: '20%',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.06)',
              transform: 'rotate(-30deg)',
              pointerEvents: 'none',
            }}
          />

          {/* Label text */}
          <span
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '0.55rem',
              fontWeight: 600,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#A3A3A3',
              textAlign: 'center',
              lineHeight: 1.4,
              whiteSpace: 'pre-line',
              zIndex: 1,
            }}
          >
            {label}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default SphereTag;
