import React from 'react';

const ParaBlock = ({ title, subhead, items = [] }) => {
  return (
    <section className="mb-8">
      {title && <h2 className="text-xl">{title}</h2>}
        {items.map((item, idx) => (
          <p key={idx}>{item}</p>
        ))}
    </section>
  );
};

export default ParaBlock;