import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Loader2 } from 'lucide-react';
import { FiLinkedin, FiGithub } from 'react-icons/fi';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { personalInfo } from '../data/portfolioData';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error('Please fill in all fields.');
      return;
    }
    setLoading(true);
    try {
      const res = await fetch('https://portfolio-backend-mitenshah.vercel.app/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        toast.success('Message sent! I\'ll get back to you shortly.');
        setForm({ name: '', email: '', message: '' });
      } else {
        toast.error('Something went wrong. Please try again.');
      }
    } catch {
      toast.error('Unable to send. Please email me directly.');
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = {
    width: '100%',
    background: '#111111',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '3px',
    padding: '0.875rem 1rem',
    color: '#FFFFFF',
    fontFamily: 'Inter, sans-serif',
    fontSize: '0.9rem',
    outline: 'none',
    transition: 'border-color 0.2s',
  };

  return (
    <div style={{ background: '#0A0A0A', minHeight: '100vh', padding: '7rem 2rem 5rem' }}>
      <ToastContainer position="bottom-right" autoClose={4000} theme="dark" toastClassName="custom-toast" />
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ marginBottom: '4rem' }}>
          <p style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.65rem', color: '#3B82F6', letterSpacing: '0.35em', textTransform: 'uppercase', marginBottom: '1rem' }}>08 — Contact</p>
          <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 900, color: '#FFFFFF', lineHeight: 1.1 }}>
            Let's<br /><span style={{ color: '#60A5FA' }}>Connect.</span>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
          {/* Form */}
          <motion.form initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} onSubmit={handleSubmit}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {[
              { name: 'name', label: 'Full Name', type: 'text', placeholder: 'Your name' },
              { name: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com' },
            ].map(field => (
              <div key={field.name}>
                <label style={{ display: 'block', fontFamily: 'Inter, sans-serif', fontSize: '0.72rem', fontWeight: 600, color: '#525252', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>{field.label}</label>
                <input type={field.type} name={field.name} value={form[field.name]} onChange={handleChange} placeholder={field.placeholder}
                  data-hover style={inputStyle}
                  onFocus={e => e.target.style.borderColor = 'rgba(96,165,250,0.5)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'} />
              </div>
            ))}
            <div>
              <label style={{ display: 'block', fontFamily: 'Inter, sans-serif', fontSize: '0.72rem', fontWeight: 600, color: '#525252', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>Message</label>
              <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell me about your project or opportunity..." rows={5}
                data-hover style={{ ...inputStyle, resize: 'vertical' }}
                onFocus={e => e.target.style.borderColor = 'rgba(96,165,250,0.5)'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'} />
            </div>
            <motion.button type="submit" data-hover disabled={loading}
              whileHover={!loading ? { backgroundColor: '#60A5FA', boxShadow: '0 0 24px rgba(96,165,250,0.35)' } : {}}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '0.875rem 1.75rem', background: loading ? '#1D4ED8' : '#3B82F6', color: '#FFFFFF', borderRadius: '3px', fontFamily: 'Inter, sans-serif', fontSize: '0.82rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', border: 'none', transition: 'all 0.2s', opacity: loading ? 0.8 : 1 }}>
              {loading ? <><Loader2 size={15} style={{ animation: 'spin 1s linear infinite' }} /> Sending...</> : <><Send size={15} /> Send Message</>}
            </motion.button>
          </motion.form>

          {/* Contact info */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', color: '#A3A3A3', lineHeight: 1.75 }}>
              I'm always open to new opportunities, collaborations, and conversations. Feel free to reach out — I'll respond within 24 hours.
            </p>
            {[
              { icon: <Mail size={16} />, label: personalInfo.email, href: `mailto:${personalInfo.email}` },
              { icon: <FiLinkedin size={16} />, label: 'LinkedIn Profile', href: personalInfo.linkedin },
              { icon: <FiGithub size={16} />, label: 'GitHub Repos', href: personalInfo.github },
            ].map(link => (
              <motion.a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" data-hover
                whileHover={{ color: '#93C5FD', x: 4 }}
                style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#60A5FA', textDecoration: 'none', fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', transition: 'all 0.2s' }}>
                {link.icon}
                <span>{link.label}</span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
      <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
    </div>
  );
};

export default Contact;
