import React from 'react';

const ListBlock = ({ title, items = [], level = 2 }) => {
  const HeadingTag = `h${level}`;

  return (
    <section className="mb-8">
      {title && <HeadingTag className="text-xl">{title}</HeadingTag>}
      <ul className="list-disc pl-6 space-y-2">
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </section>
  );
};

export default ListBlock;
