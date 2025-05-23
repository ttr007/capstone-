import React from 'react';

const ParaBlock = ({ title, subhead, level = 2, items = [] }) => {
  const HeadingTag = `h${level}`;

  return (
    <section className="mb-8">
      {title && <HeadingTag className={`text-${level === 1 ? '3xl' : level === 2 ? '2xl' : 'xl'}`}>
        {title}
      </HeadingTag>}
      {subhead && <p className="text-gray-600 italic mb-2">{subhead}</p>}
      {items.map((item, idx) => (
        <p key={idx}>{item}</p>
      ))}
    </section>
  );
};

export default ParaBlock;
