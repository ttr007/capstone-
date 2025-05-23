import React from 'react';

const ModuleIntro = ({ title, readTime, overview, toc }) => {
  return (
    <div
      className="d-flex flex-wrap justify-content-between align-items-start"
      style={{ gap: '2rem' }}
    >
      {/* Left side */}
      <div style={{ flex: '1 1 60%' }}>
        <p className="text-muted">
          <i className="bi bi-clock me-1"></i> {readTime}
        </p>
        {overview}
      </div>

      {/* Right side */}
      <div style={{ flex: '1 1 35%', minWidth: '250px'}}>
        {toc}
      </div>
    </div>
  );
};

export default ModuleIntro;
