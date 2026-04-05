import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

/* ─── Section definitions (no numbers) ──────────────────────── */
export const SECTIONS = [
  { id: 'about',          title: 'ABOUT',          desc: 'Who I am' },
  { id: 'experience',     title: 'EXPERIENCE',      desc: "Where I've worked" },
  { id: 'education',      title: 'EDUCATION',       desc: 'Academic journey' },
  { id: 'certifications', title: 'CERTIFICATIONS',  desc: 'Professional certs' },
  { id: 'projects',       title: 'PROJECTS',        desc: "What I've built" },
  { id: 'skills',         title: 'SKILLS',          desc: 'Tools & expertise' },
  { id: 'community',      title: 'COMMUNITY',       desc: 'Leadership & impact' },
  { id: 'contact',        title: 'CONTACT',         desc: "Let's connect" },
];

/* ─── Section cover SVG art ──────────────────────────────────── */
const CoverArt = ({ id }) => {
  const map = {
    about: (
      <svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
        <defs>
          <radialGradient id={`ab-g-${id}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.22"/>
            <stop offset="100%" stopColor="#0A0A0A" stopOpacity="0"/>
          </radialGradient>
        </defs>
        <rect width="280" height="160" fill={`url(#ab-g-${id})`}/>
        <circle cx="140" cy="72" r="55" stroke="#3B82F6" strokeOpacity="0.2" strokeWidth="1" fill="none"/>
        <circle cx="140" cy="72" r="38" stroke="#60A5FA" strokeOpacity="0.35" strokeWidth="1" fill="none"/>
        <circle cx="140" cy="72" r="22" stroke="#93C5FD" strokeOpacity="0.45" strokeWidth="1.5" fill="#0D1117" fillOpacity="0.6"/>
        <circle cx="140" cy="61" r="10" fill="#3B82F6" fillOpacity="0.55"/>
        <path d="M118 92 Q140 77 162 92" stroke="#3B82F6" strokeOpacity="0.55" strokeWidth="2" fill="none" strokeLinecap="round"/>
        {[0,45,90,135,180,225,270,315].map(deg => {
          const r = deg * Math.PI / 180;
          return <line key={deg} x1={140+57*Math.cos(r)} y1={72+57*Math.sin(r)} x2={140+72*Math.cos(r)} y2={72+72*Math.sin(r)} stroke="#3B82F6" strokeOpacity="0.15" strokeWidth="1"/>;
        })}
      </svg>
    ),
    experience: (
      <svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
        {[{x:30,h:40},{x:65,h:65},{x:100,h:50},{x:135,h:90},{x:170,h:75},{x:205,h:110},{x:240,h:95}].map((b,i)=>(
          <React.Fragment key={i}>
            <rect x={b.x} y={150-b.h} width="22" height={b.h} fill="#3B82F6" fillOpacity={0.08+i*0.035} rx="2"/>
            <rect x={b.x} y={150-b.h} width="22" height="3" fill="#60A5FA" fillOpacity={0.45+i*0.05} rx="1"/>
          </React.Fragment>
        ))}
        <polyline points="41,110 76,85 111,100 146,60 181,75 216,40 251,55" stroke="#60A5FA" strokeWidth="1.5" fill="none" strokeOpacity="0.55" strokeLinecap="round" strokeLinejoin="round"/>
        {[[41,110],[146,60],[251,55]].map(([cx,cy],i)=>(
          <circle key={i} cx={cx} cy={cy} r="3.5" fill="#3B82F6" fillOpacity="0.75"/>
        ))}
        <line x1="20" y1="150" x2="265" y2="150" stroke="#3B82F6" strokeOpacity="0.12" strokeWidth="1"/>
      </svg>
    ),
    education: (
      <svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
        <path d="M140 130 L60 100 L60 52 L140 80 Z" fill="#111827" stroke="#3B82F6" strokeOpacity="0.4" strokeWidth="1"/>
        <path d="M140 130 L220 100 L220 52 L140 80 Z" fill="#0A0A0A" stroke="#60A5FA" strokeOpacity="0.35" strokeWidth="1"/>
        <line x1="140" y1="80" x2="140" y2="130" stroke="#60A5FA" strokeOpacity="0.55" strokeWidth="1.5"/>
        {[0,1,2,3].map(i=><line key={i} x1="75" y1={66+i*9} x2="132" y2={74+i*7} stroke="#3B82F6" strokeOpacity="0.22" strokeWidth="1"/>)}
        {[0,1,2,3].map(i=><line key={i} x1="148" y1={74+i*7} x2="210" y2={66+i*9} stroke="#60A5FA" strokeOpacity="0.18" strokeWidth="1"/>)}
        <polygon points="140,25 100,42 140,58 180,42" fill="#3B82F6" fillOpacity="0.45" stroke="#60A5FA" strokeWidth="1" strokeOpacity="0.55"/>
        <line x1="140" y1="42" x2="140" y2="58" stroke="#60A5FA" strokeOpacity="0.45" strokeWidth="1.5"/>
        {[-60,-30,0,30,60].map(deg=>{const r=(deg-90)*Math.PI/180;return <line key={deg} x1={140} y1={25} x2={140+28*Math.cos(r)} y2={25+28*Math.sin(r)} stroke="#3B82F6" strokeOpacity="0.12" strokeWidth="1"/>;})}
      </svg>
    ),
    certifications: (
      <svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
        <path d="M140 18 L192 38 L192 96 Q192 132 140 150 Q88 132 88 96 L88 38 Z" fill="#111827" stroke="#3B82F6" strokeWidth="1.5" strokeOpacity="0.45"/>
        <path d="M140 28 L182 46 L182 96 Q182 124 140 140 Q98 124 98 96 L98 46 Z" fill="none" stroke="#60A5FA" strokeWidth="1" strokeOpacity="0.25"/>
        <polygon points="140,54 145.5,70.5 163,70.5 149.5,80 154.5,96.5 140,87 125.5,96.5 130.5,80 117,70.5 134.5,70.5" fill="#3B82F6" fillOpacity="0.55" stroke="#60A5FA" strokeWidth="0.5" strokeOpacity="0.7"/>
        <path d="M114 150 L130 137 L140 147 L150 137 L166 150 L158 162 L140 154 L122 162 Z" fill="#3B82F6" fillOpacity="0.35"/>
        {[[45,25,3],[237,25,3],[45,135,2],[237,135,2]].map(([cx,cy,r],i)=><circle key={i} cx={cx} cy={cy} r={r} fill="#60A5FA" fillOpacity="0.35"/>)}
      </svg>
    ),
    projects: (
      <svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
        <rect x="28" y="18" width="224" height="136" rx="7" fill="#111827" stroke="#3B82F6" strokeWidth="1.5" strokeOpacity="0.35"/>
        <rect x="28" y="18" width="224" height="25" rx="7" fill="#3B82F6" fillOpacity="0.1"/>
        <circle cx="47" cy="31" r="4" fill="#F87171" fillOpacity="0.55"/>
        <circle cx="62" cy="31" r="4" fill="#FBBF24" fillOpacity="0.55"/>
        <circle cx="77" cy="31" r="4" fill="#34D399" fillOpacity="0.55"/>
        <rect x="92" y="25" width="118" height="12" rx="3" fill="#1E293B"/>
        {[0,1,2,3,4].map(i=>(
          <React.Fragment key={i}>
            <rect x="44" y={56+i*17} width={[62,88,72,46,80][i]} height="5" fill="#3B82F6" fillOpacity={0.12+(i%2)*0.1} rx="2"/>
            {i%2===0 && <rect x={44+[62,88,72,46,80][i]+8} y={56+i*17} width={[28,18,36,0,22][i]} height="5" fill="#60A5FA" fillOpacity="0.09" rx="2"/>}
          </React.Fragment>
        ))}
        <rect x="174" y="48" width="62" height="95" rx="3" fill="#3B82F6" fillOpacity="0.06" stroke="#60A5FA" strokeWidth="0.5" strokeOpacity="0.18"/>
      </svg>
    ),
    skills: (
      <svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
        {[[140,55],[100,78],[180,78],[100,122],[140,145],[180,122],[60,55],[220,55],[60,145],[220,145]].map(([cx,cy],i)=>{
          const pts=Array.from({length:6},(_,j)=>{const a=j*60*Math.PI/180-Math.PI/6;return `${cx+22*Math.cos(a)},${cy+22*Math.sin(a)}`;}).join(' ');
          return <polygon key={i} points={pts} fill="#3B82F6" fillOpacity={i===0?0.18:0.04} stroke="#60A5FA" strokeWidth="1" strokeOpacity={i===0?0.55:0.18}/>;
        })}
        {[[140,55,100,78],[100,78,100,122],[100,122,140,145],[140,145,180,122],[180,122,180,78],[180,78,140,55]].map(([x1,y1,x2,y2],i)=>(
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#3B82F6" strokeOpacity="0.15" strokeWidth="0.5"/>
        ))}
        <circle cx="140" cy="55" r="10" fill="#3B82F6" fillOpacity="0.28"/>
      </svg>
    ),
    community: (
      <svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
        {[[80,70],[140,45],[200,70]].map(([cx,cy],i)=>(
          <React.Fragment key={i}>
            <circle cx={cx} cy={cy-15} r="15" fill="#111827" stroke="#3B82F6" strokeWidth="1.5" strokeOpacity="0.45"/>
            <circle cx={cx} cy={cy-15} r="7" fill="#3B82F6" fillOpacity="0.38"/>
            <path d={`M${cx-20} ${cy+20} Q${cx} ${cy+8} ${cx+20} ${cy+20}`} stroke="#3B82F6" strokeOpacity="0.45" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          </React.Fragment>
        ))}
        <line x1="95" y1="55" x2="125" y2="40" stroke="#60A5FA" strokeOpacity="0.28" strokeWidth="1" strokeDasharray="4 3"/>
        <line x1="155" y1="40" x2="185" y2="55" stroke="#60A5FA" strokeOpacity="0.28" strokeWidth="1" strokeDasharray="4 3"/>
        {[0,1,2].map(i=>(
          <path key={i} d={`M30 ${108+i*14} Q70 ${101+i*14} 110 ${108+i*14} Q150 ${115+i*14} 190 ${108+i*14} Q230 ${101+i*14} 260 ${108+i*14}`} stroke="#3B82F6" strokeOpacity={0.14-i*0.04} strokeWidth="1" fill="none"/>
        ))}
        {[[50,130],[140,120],[230,130]].map(([cx,cy],i)=>(
          <circle key={i} cx={cx} cy={cy} r="4" fill="#3B82F6" fillOpacity="0.38"/>
        ))}
      </svg>
    ),
    contact: (
      <svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
        <rect x="52" y="42" width="176" height="110" rx="6" fill="#111827" stroke="#3B82F6" strokeWidth="1.5" strokeOpacity="0.45"/>
        <path d="M52 48 L140 102 L228 48" stroke="#60A5FA" strokeWidth="1.5" strokeOpacity="0.38" fill="none"/>
        <path d="M52 152 L108 108" stroke="#3B82F6" strokeOpacity="0.18" strokeWidth="1"/>
        <path d="M228 152 L172 108" stroke="#3B82F6" strokeOpacity="0.18" strokeWidth="1"/>
        <circle cx="208" cy="52" r="13" fill="#0A0A0A" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.45"/>
        <circle cx="208" cy="52" r="5" fill="#34D399" fillOpacity="0.75"/>
        {[[38,38,3],[252,33,2],[33,128,2],[253,128,3]].map(([cx,cy,r],i)=><circle key={i} cx={cx} cy={cy} r={r} fill="#3B82F6" fillOpacity="0.28"/>)}
        <path d="M28 23 Q140 0 258 23" stroke="#3B82F6" strokeOpacity="0.08" strokeWidth="1" fill="none"/>
      </svg>
    ),
  };
  return map[id] || null;
};

/* ─── Single card ────────────────────────────────────────────── */
const SectionCard = ({ section, index, onNavigate }) => {
  const cardRef = useRef(null);
  const isOdd   = index % 2 === 1;
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const r  = card.getBoundingClientRect();
    const rx = ((e.clientY - r.top)  / r.height - 0.5) * -10;
    const ry = ((e.clientX - r.left) / r.width  - 0.5) *  10;
    card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(6px) translateY(${isOdd ? '5rem' : '0'})`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = `translateY(${isOdd ? '5rem' : '0'})`;
    }
    setHovered(false);
  };

  return (
    <motion.div
      className="snap-start"
      style={{ flexShrink: 0 }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06, duration: 0.5, ease: 'easeOut' }}
    >
      <motion.div
        layoutId={`card-${section.id}`}
        ref={cardRef}
        data-hover
        onClick={() => onNavigate(section.id)}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          width: 'clamp(190px, 23vw, 260px)',
          height: 'clamp(270px, 36vw, 370px)',
          background: '#111111',
          border: hovered
            ? '1px solid rgba(96,165,250,0.45)'
            : '1px solid rgba(255,255,255,0.07)',
          borderRadius: '6px',
          marginTop: isOdd ? '5rem' : '0',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          transition: 'border-color 0.25s, box-shadow 0.25s',
          boxShadow: hovered
            ? '0 20px 60px rgba(59,130,246,0.14), 0 0 0 1px rgba(96,165,250,0.18)'
            : '0 4px 20px rgba(0,0,0,0.4)',
          willChange: 'transform',
        }}
      >
        {/* Cover art */}
        <div style={{ flex: '0 0 58%', background: '#0D0D0D', overflow: 'hidden', position: 'relative', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
          <div
            className="card-cover-img"
            style={{
              width: '100%',
              height: '100%',
              transform: hovered ? 'scale(1.05)' : 'scale(1)',
              opacity: hovered ? 1 : 0.72,
            }}
          >
            <CoverArt id={section.id} />
          </div>
          {/* Fade into card body */}
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%', background: 'linear-gradient(to bottom, transparent, #111111)', pointerEvents: 'none' }}/>
        </div>

        {/* Card body */}
        <div style={{ flex: 1, padding: '1.15rem 1.4rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <h3 data-magnify style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.76rem', fontWeight: 700, letterSpacing: '0.14em', color: '#FFFFFF', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
              {section.title}
            </h3>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.73rem', color: '#525252', lineHeight: 1.5 }}>
              {section.desc}
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.6rem', color: '#3B82F6', letterSpacing: '0.1em', textTransform: 'uppercase' }}>View</span>
            <motion.span animate={{ x: hovered ? 4 : 0 }} transition={{ duration: 0.2 }}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 6h8M7 3l3 3-3 3" stroke="#3B82F6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

/* ─── Grid container ─────────────────────────────────────────── */
const CardGrid = ({ onNavigate }) => (
  <div className="card-grid-scroll no-scrollbar" style={{ paddingBottom: '4rem' }}>
    {SECTIONS.map((section, i) => (
      <SectionCard key={section.id} section={section} index={i} onNavigate={onNavigate} />
    ))}
  </div>
);

export default CardGrid;
