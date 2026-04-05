import React from 'react';
import SphereTag from './SphereTag';

const FloatingTags = () => {
  const tags = [
    {
      label: 'Product\nManager',
      delay: 0,
      style: { left: '6%', top: '20%' },
    },
    {
      label: 'Agile\nStrategist',
      delay: 1.5,
      style: { right: '8%', top: '30%' },
    },
    {
      label: 'Global\nMindset',
      delay: 3,
      style: { left: '50%', bottom: '18%', transform: 'translateX(-50%)' },
    },
  ];

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 5,
        overflow: 'hidden',
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
