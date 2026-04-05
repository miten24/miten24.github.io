import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const SECTIONS = [
  { id: 'about',          num: '01', title: 'ABOUT',          desc: 'Who I am' },
  { id: 'experience',     num: '02', title: 'EXPERIENCE',     desc: 'Where I\'ve worked' },
  { id: 'education',      num: '03', title: 'EDUCATION',      desc: 'Academic journey' },
  { id: 'certifications', num: '04', title: 'CERTIFICATIONS', desc: 'Professional certs' },
  { id: 'projects',       num: '05', title: 'PROJECTS',       desc: 'What I\'ve built' },
  { id: 'skills',         num: '06', title: 'SKILLS',         desc: 'Tools & expertise' },
  { id: 'community',      num: '07', title: 'COMMUNITY',      desc: 'Leadership & impact' },
  { id: 'contact',        num: '08', title: 'CONTACT',        desc: "Let's connect" },
];

const Card = ({ section, index, onNavigate }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rx = ((y - cy) / cy) * -6;
    const ry = ((x - cx) / cx) * 6;
    card.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(8px)`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
    }
  };

  const isOdd = index % 2 !== 0;

  return (
    <motion.div
      layoutId={`card-${section.id}`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.07, duration: 0.5, ease: 'easeOut' }}
      style={{ marginTop: isOdd ? '5rem' : '0', flexShrink: 0 }}
      className="snap-start"
    >
      <div
        ref={cardRef}
        data-hover
        onClick={() => onNavigate(section.id)}
        onMouseMove={handleMouseMove}
        style={{
          width: 'clamp(200px, 22vw, 280px)',
          height: 'clamp(270px, 30vw, 380px)',
          background: '#111111',
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: '4px',
          padding: '2rem 1.75rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          transition: 'border-color 0.25s ease, box-shadow 0.25s ease, transform 0.1s ease',
          position: 'relative',
          overflow: 'hidden',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = 'rgba(96,165,250,0.45)';
          e.currentTarget.style.boxShadow = '0 0 40px rgba(96,165,250,0.1), 0 0 80px rgba(59,130,246,0.05)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
          e.currentTarget.style.boxShadow = 'none';
          e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
        }}
      >
        {/* Corner accent */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: 60,
            height: 60,
            background: 'linear-gradient(225deg, rgba(59,130,246,0.08) 0%, transparent 70%)',
            borderBottomLeftRadius: '100%',
          }}
        />

        {/* Top: Number */}
        <div>
          <span
            style={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: '0.7rem',
              color: '#3B82F6',
              letterSpacing: '0.1em',
            }}
          >
            {section.num}
          </span>
        </div>

        {/* Middle: Title */}
        <div>
          <h3
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
              fontWeight: 700,
              color: '#FFFFFF',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              lineHeight: 1.2,
              marginBottom: '0.6rem',
            }}
          >
            {section.title}
          </h3>
          <p
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '0.75rem',
              color: '#525252',
              letterSpacing: '0.05em',
            }}
          >
            {section.desc}
          </p>
        </div>

        {/* Bottom: Arrow */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            color: '#3B82F6',
            fontSize: '0.7rem',
            fontFamily: 'Inter, sans-serif',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}
        >
          <span>View</span>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 6h8M7 3l3 3-3 3" stroke="#3B82F6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </motion.div>
  );
};

const CardGrid = ({ onNavigate }) => {
  return (
    <div className="card-grid-scroll no-scrollbar" style={{ position: 'relative', zIndex: 10, paddingTop: '1rem' }}>
      {SECTIONS.map((section, index) => (
        <Card
          key={section.id}
          section={section}
          index={index}
          onNavigate={onNavigate}
        />
      ))}
      {/* Right padding spacer */}
      <div style={{ flexShrink: 0, width: '2rem' }} />
    </div>
  );
};

export default CardGrid;
export { SECTIONS };
