import React, { useState } from 'react';
import { AnimatePresence, motion, LayoutGroup } from 'framer-motion';

import PageLoader from './components/PageLoader';
import CustomCursor from './components/CustomCursor';
import Navigation from './components/Navigation';
import SectionNav from './components/SectionNav';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Community from './components/Community';
import Contact from './components/Contact';
import Footer from './components/Footer';

const SECTION_MAP = {
  about:          About,
  experience:     Experience,
  education:      Education,
  certifications: Certifications,
  projects:       Projects,
  skills:         Skills,
  community:      Community,
  contact:        Contact,
};

function App() {
  const [loaded, setLoaded]           = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  const ActiveComponent = activeSection ? SECTION_MAP[activeSection] : null;

  return (
    <div style={{ background: '#0A0A0A', minHeight: '100vh' }}>
      {/* Custom cursor — always visible */}
      <CustomCursor />

      {/* Page preloader */}
      <AnimatePresence>
        {!loaded && <PageLoader onComplete={() => setLoaded(true)} />}
      </AnimatePresence>

      {/* Main site — renders after load */}
      {loaded && (
        <LayoutGroup>
          {/* Persistent top navigation (home & sections share it) */}
          {activeSection === null && <Navigation />}

          <AnimatePresence mode="wait">
            {activeSection === null ? (
              /* ── Home view ─────────────────────────────── */
              <motion.div
                key="home"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
              >
                <Hero onNavigate={setActiveSection} />
                <Footer />
              </motion.div>
            ) : (
              /* ── Section view ──────────────────────────── */
              <motion.div
                key={activeSection}
                layoutId={`card-${activeSection}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                style={{
                  position: 'fixed',
                  inset: 0,
                  background: '#0A0A0A',
                  zIndex: 50,
                  overflowY: 'auto',
                  overflowX: 'hidden',
                }}
              >
                <SectionNav
                  activeSection={activeSection}
                  onNavigate={setActiveSection}
                />

                {/* Section content */}
                <ActiveComponent />
                <Footer />
              </motion.div>
            )}
          </AnimatePresence>
        </LayoutGroup>
      )}
    </div>
  );
}

export default App;
