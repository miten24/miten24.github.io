import React from 'react';
import { Mail } from 'lucide-react';
import { FiLinkedin, FiGithub } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  return (
    <footer style={{ background: '#0A0A0A', borderTop: '1px solid rgba(255,255,255,0.04)', padding: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
      <p style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.65rem', color: '#525252', letterSpacing: '0.1em' }}>
        © 2026 Miten Shah — Built with purpose.
      </p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
        {[
          { icon: <FiLinkedin size={16} />, href: personalInfo.linkedin },
          { icon: <FiGithub size={16} />, href: personalInfo.github },
          { icon: <Mail size={16} />, href: `mailto:${personalInfo.email}` },
        ].map((item, i) => (
          <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" data-hover
            style={{ color: '#525252', transition: 'color 0.2s', textDecoration: 'none' }}
            onMouseEnter={e => e.currentTarget.style.color = '#60A5FA'}
            onMouseLeave={e => e.currentTarget.style.color = '#525252'}>
            {item.icon}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
