import React from 'react';

const ParaBlock = ({ title, items = [] }) => {
  return (
    <section className="mb-8">
      {title && <h2 className="fw-semibold text-xl mb-4">{title}</h2>}
        {items.map((item, idx) => (
          <p key={idx}>{item}</p>
        ))}
    </section>
  );
};

export default ParaBlock;