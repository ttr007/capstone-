import React from 'react';

const ListBlock = ({ title, items = [] }) => {
  return (
    <section className="mb-8">
      {title && <h2 className=" text-xl">{title}</h2>}
      <ul className="list-disc pl-6 space-y-2">
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </section>
  );
};

export default ListBlock;