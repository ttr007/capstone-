import React from 'react';

export default function AdditionalSourcesBlock({ title = "Additional Sources", sources = [] }) {
  return (
    <div className="my-4">
      <h3 className="h5 text-primary mb-3">{title}</h3>
      <ul className="ms-3">
        {sources.map((source, idx) => (
          <li key={idx} className="mb-2">
            <a
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary text-decoration-none"
              onMouseOver={e => e.currentTarget.classList.add('text-decoration-underline')}
              onMouseOut={e => e.currentTarget.classList.remove('text-decoration-underline')}
            >
              {source.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
