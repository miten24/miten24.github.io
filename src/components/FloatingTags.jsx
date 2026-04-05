import React from 'react';
import SphereTag from './SphereTag';

const FloatingTags = () => {
  const tags = [
    {
      label: 'Product\nManager',
      delay: 0,
      // left edge, vertically centred in the hero (below title, above cards)
      style: { left: '3%', top: '18%' },
    },
    {
      label: 'Agile\nStrategist',
      delay: 1.5,
      // right edge, near top — clear of the centred title
      style: { right: '3%', top: '10%' },
    },
    {
      label: 'Global\nMindset',
      delay: 3,
      // right side, lower — sits between CTA buttons and the card row
      style: { right: '4%', top: '58%' },
    },
  ];

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 5,
        overflow: 'visible',
      }}
    >
      {tags.map((tag) => (
        <SphereTag
          key={tag.label}
          label={tag.label}
          delay={tag.delay}
          style={tag.style}
        />
      ))}
    </div>
  );
};

export default FloatingTags;
