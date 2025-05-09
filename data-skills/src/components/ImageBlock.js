// ImageBlock.js
import React from 'react';

export default function ImageBlock({ src, alt = '', style = {} }) {
    return (
      <img
        src={src}
        alt={alt}
        style={{
          width: '100%',
          height: 'auto',
          display: 'block',
          ...style, // merge external styles
        }}
      />
    );
  }