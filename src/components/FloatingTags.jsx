import React from 'react';
import SphereTag from './SphereTag';

const FloatingTags = () => {
  const tags = [
    {
      label: 'Product\nManager',
      delay: 0,
      style: { left: '4%', top: '12%' },
    },
    {
      label: 'Agile\nStrategist',
      delay: 1.5,
      style: { right: '5%', top: '8%' },
    },
    {
      label: 'Global\nMindset',
      delay: 3,
      // moved from bottom-centre to top-centre so it stays visible above the card grid
      style: { left: '50%', top: '22%', transform: 'translateX(-50%)' },
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
