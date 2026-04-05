import React, { useEffect, useRef } from 'react';

/**
 * SparklesCore — canvas-based particle field inspired by aceternity/sparkles.
 * Renders floating white (or coloured) particles that fade in/out, giving the
 * impression of a shimmer beneath the hero title.
 */
const SparklesCore = ({
  id = 'sparkles-canvas',
  background = 'transparent',
  minSize = 0.4,
  maxSize = 1.2,
  particleDensity = 600,
  particleColor = '#FFFFFF',
  speed = 1,
  className = '',
  style = {},
}) => {
  const canvasRef = useRef(null);
  const animRef   = useRef(null);
  const particles = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    /* ── Resize canvas to match CSS size ── */
    const resize = () => {
      canvas.width  = canvas.offsetWidth  || 640;
      canvas.height = canvas.offsetHeight || 160;
      initParticles();
    };

    /* ── Initialise particle pool ── */
    const initParticles = () => {
      const area  = canvas.width * canvas.height;
      const count = Math.round((area / 1000) * (particleDensity / 600));
      particles.current = Array.from({ length: Math.min(count, 500) }, () =>
        makeParticle(canvas.width, canvas.height, true)
      );
    };

    const makeParticle = (w, h, randomY = false) => ({
      x:         Math.random() * w,
      y:         randomY ? Math.random() * h : h + 2,
      size:      minSize + Math.random() * (maxSize - minSize),
      speedY:    speed * (0.15 + Math.random() * 0.25),
      life:      Math.random(),        // 0 → 1 → 0 opacity cycle
      lifeSpeed: speed * (0.003 + Math.random() * 0.005),
      rising:    Math.random() > 0.5,  // fade-in vs fade-out phase
    });

    /* ── Animation loop ── */
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Set shared state once per frame instead of save()/restore() per particle.
      // Cuts per-frame overhead by ~(2 × particleCount) canvas state operations.
      ctx.fillStyle = particleColor;

      particles.current.forEach((p, i) => {
        /* life cycle */
        if (p.rising) {
          p.life += p.lifeSpeed;
          if (p.life >= 1) { p.life = 1; p.rising = false; }
        } else {
          p.life -= p.lifeSpeed;
          if (p.life <= 0) {
            particles.current[i] = makeParticle(canvas.width, canvas.height);
            return;
          }
        }

        /* drift upward */
        p.y -= p.speedY;
        if (p.y < -4) {
          particles.current[i] = makeParticle(canvas.width, canvas.height);
          return;
        }

        /* draw — set alpha directly, no save/restore needed */
        ctx.globalAlpha = p.life * 0.85;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Reset alpha after the loop (one reset vs one per particle)
      ctx.globalAlpha = 1;

      animRef.current = requestAnimationFrame(draw);
    };

    resize();
    draw();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
      ro.disconnect();
    };
  }, [minSize, maxSize, particleDensity, particleColor, speed]);

  return (
    <canvas
      ref={canvasRef}
      id={id}
      className={className}
      style={{ background, width: '100%', height: '100%', display: 'block', ...style }}
    />
  );
};

export default SparklesCore;
