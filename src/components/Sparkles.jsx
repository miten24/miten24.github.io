import React, { useEffect, useRef } from 'react';

/* ─── Sparkle star shape ─────────────────────────────────── */
const STAR_PATH = 'M12 3L13.5 9.5L20 12L13.5 14.5L12 21L10.5 14.5L4 12L10.5 9.5Z';

const randomBetween = (min, max) => Math.random() * (max - min) + min;

/**
 * SparklesBackground – renders animated sparkle particles as an absolutely-
 * or fixed-positioned full-cover overlay. Pass `fixed` for global use.
 */
const SparklesBackground = ({
  count = 24,
  color1 = '#3B82F6',
  color2 = '#60A5FA',
  fixed = false,
  style = {},
}) => {
  const containerRef = useRef(null);
  const particlesRef = useRef([]);
  const rafRef = useRef(null);
  const nextSpawnRef = useRef(Date.now());

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    /* ── create one particle ── */
    const spawn = () => {
      const el = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      const size = randomBetween(8, 18);
      const x = randomBetween(2, 98);
      const y = randomBetween(2, 98);
      const color = Math.random() > 0.5 ? color1 : color2;
      const lifespan = randomBetween(1400, 3000); // ms

      el.setAttribute('viewBox', '0 0 24 24');
      el.setAttribute('fill', color);
      el.setAttribute('width', size);
      el.setAttribute('height', size);

      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', STAR_PATH);
      el.appendChild(path);

      Object.assign(el.style, {
        position: 'absolute',
        left: `${x}%`,
        top: `${y}%`,
        transform: 'scale(0) rotate(0deg)',
        opacity: 0,
        pointerEvents: 'none',
        transition: `transform ${lifespan * 0.4}ms ease-out, opacity ${lifespan * 0.2}ms ease-out`,
        filter: `drop-shadow(0 0 4px ${color})`,
      });

      container.appendChild(el);
      const born = Date.now();

      /* fade in */
      requestAnimationFrame(() => {
        el.style.opacity = '0.85';
        el.style.transform = `scale(1) rotate(${randomBetween(-30, 30)}deg)`;
      });

      particlesRef.current.push({ el, born, lifespan });
    };

    /* ── animation loop ── */
    const tick = () => {
      const now = Date.now();

      /* cull dead particles */
      particlesRef.current = particlesRef.current.filter(({ el, born, lifespan }) => {
        const age = now - born;
        if (age > lifespan * 0.65) {
          el.style.opacity = '0';
          el.style.transform = `scale(0) rotate(90deg)`;
        }
        if (age > lifespan) {
          if (el.parentNode === container) container.removeChild(el);
          return false;
        }
        return true;
      });

      /* spawn new if below count */
      if (now > nextSpawnRef.current && particlesRef.current.length < count) {
        spawn();
        nextSpawnRef.current = now + randomBetween(120, 400);
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      particlesRef.current.forEach(({ el }) => {
        if (el.parentNode === container) container.removeChild(el);
      });
      particlesRef.current = [];
    };
  }, [count, color1, color2]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      style={{
        position: fixed ? 'fixed' : 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
        ...style,
      }}
    />
  );
};

export default SparklesBackground;
