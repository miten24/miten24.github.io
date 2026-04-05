import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageCircle } from 'lucide-react';
import { FiLinkedin } from 'react-icons/fi';
import SparklesBackground from './Sparkles';

const PREFILL       = encodeURIComponent('Hii Miten, I came across your portfolio and would like to connect with you regarding ...');
const EMAIL_HREF    = `mailto:mitenshah24@gmail.com?subject=${encodeURIComponent("Let's Connect — Portfolio")}&body=${PREFILL}`;
const WHATSAPP_HREF = `https://wa.me/917874393172?text=${PREFILL}`;
const LINKEDIN_HREF = 'https://linkedin.com/in/mitenshah24';

const Contact = () => (
  <div style={{ background: '#0A0A0A', minHeight: '100vh', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '5rem 2rem 4rem' }}>
    <SparklesBackground count={20} color1="#3B82F6" color2="#60A5FA" style={{ opacity: 0.35 }}/>

    <div style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: '900px' }}>

      {/* Heading */}
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 data-magnify style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontWeight: 900, color: '#FFFFFF', lineHeight: 1.1, marginBottom: '0.75rem' }}>
          Let's <span style={{ color: '#60A5FA' }}>Connect.</span>
        </h2>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', color: '#525252' }}>
          Available for product roles, consulting, and collaboration.
        </p>
      </motion.div>

      {/* ── Business card ── */}
      <motion.div
        initial={{ opacity: 0, y: 32, scale: 0.97 }}
        animate={{ opacity: 1, y: 0,  scale: 1 }}
        transition={{ delay: 0.15, duration: 0.65, ease: 'easeOut' }}
        style={{
          background: 'linear-gradient(135deg, #111111 0%, #0F1520 100%)',
          border: '1px solid rgba(96,165,250,0.22)',
          borderRadius: '12px',
          padding: 'clamp(2rem, 5vw, 3rem)',
          boxShadow: '0 0 60px rgba(59,130,246,0.08), 0 20px 60px rgba(0,0,0,0.5)',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: '2.5rem',
          marginBottom: '2.5rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Top gradient accent bar */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(to right, #1D4ED8, #3B82F6, #60A5FA, #3B82F6, #1D4ED8)' }}/>

        {/* Background dot-grid art */}
        <svg style={{ position: 'absolute', right: 0, bottom: 0, opacity: 0.04, pointerEvents: 'none' }} width="220" height="200" viewBox="0 0 220 200" fill="none">
          {Array.from({ length: 6 }, (_, i) =>
            Array.from({ length: 5 }, (_, j) => (
              <rect key={`${i}-${j}`} x={i * 38} y={j * 42} width="30" height="34" rx="3" stroke="#60A5FA" strokeWidth="1"/>
            ))
          )}
        </svg>

        {/* Headshot */}
        <div style={{ flexShrink: 0 }}>
          <div style={{
            width: 'clamp(96px, 14vw, 136px)',
            height: 'clamp(96px, 14vw, 136px)',
            borderRadius: '50%',
            border: '2px solid rgba(96,165,250,0.45)',
            boxShadow: '0 0 30px rgba(59,130,246,0.18)',
            overflow: 'hidden',
            background: 'linear-gradient(135deg, #1E3A5F, #0F1520)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}>
            {/* Fallback monogram always rendered first; image overlays it */}
            <span style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '2.2rem', fontWeight: 900, color: '#3B82F6', position: 'absolute' }}>MS</span>
            <img
              src="/Miten.JPG"
              alt="Miten Shah"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', position: 'relative', zIndex: 1 }}
              onError={e => { e.target.style.display = 'none'; }}
            />
          </div>
        </div>

        {/* Text details */}
        <div style={{ flex: 1, minWidth: '200px' }}>
          <h3 data-magnify style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 900, color: '#FFFFFF', marginBottom: '0.3rem', lineHeight: 1.1 }}>
            Miten Shah
          </h3>
          <p style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.7rem', color: '#3B82F6', letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: '1.75rem' }}>
            Product Manager
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {[
              { icon: <Mail size={14}/>,         label: 'mitenshah24@gmail.com',          href: 'mailto:mitenshah24@gmail.com' },
              { icon: <Phone size={14}/>,        label: '+91-7874393172',                  href: 'tel:+917874393172' },
              { icon: <FiLinkedin size={14}/>,   label: 'linkedin.com/in/mitenshah24',    href: LINKEDIN_HREF },
            ].map(({ icon, label, href }) => (
              <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" data-hover
                style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: '#A3A3A3', textDecoration: 'none', fontFamily: 'Inter, sans-serif', fontSize: '0.85rem', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#60A5FA'}
                onMouseLeave={e => e.currentTarget.style.color = '#A3A3A3'}
              >
                <span style={{ color: '#3B82F6', flexShrink: 0 }}>{icon}</span>
                {label}
              </a>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ── Connect CTAs ── */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.6 }}
        style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>

        <motion.a data-hover href={EMAIL_HREF}
          whileHover={{ backgroundColor: '#60A5FA', boxShadow: '0 0 28px rgba(96,165,250,0.35)' }}
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.55rem', padding: '0.85rem 2rem', background: '#3B82F6', color: '#FFFFFF', borderRadius: '4px', fontFamily: 'Inter, sans-serif', fontSize: '0.82rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none', transition: 'all 0.2s' }}>
          <Mail size={16}/>
          Connect via Email
        </motion.a>

        <motion.a data-hover href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer"
          whileHover={{ borderColor: '#34D399', color: '#6EE7B7', backgroundColor: 'rgba(52,211,153,0.06)' }}
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.55rem', padding: '0.85rem 2rem', background: 'transparent', color: '#34D399', border: '1px solid rgba(52,211,153,0.4)', borderRadius: '4px', fontFamily: 'Inter, sans-serif', fontSize: '0.82rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none', transition: 'all 0.2s' }}>
          <MessageCircle size={16}/>
          Connect via WhatsApp
        </motion.a>
      </motion.div>

    </div>
  </div>
);

export default Contact;
