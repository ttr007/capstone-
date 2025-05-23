import React from 'react';

const typeToClass = {
  info: {
    className: 'alert alert-info',
    emoji: '💡',
  },
  warning: {
    className: 'alert alert-warning',
    emoji: '⚠️',
  },
  success: {
    className: 'alert alert-success',
    emoji: '✅',
  },
  danger: {
    className: 'alert alert-danger',
    emoji: '❌',
  },
  example: {
    className: 'alert alert-secondary',
    emoji: '📝',
  }
};

const CalloutBlock = ({ type = 'info', title, description }) => {
  const { className, emoji } = typeToClass[type] || typeToClass.info;

  return (
    <div className={`${className} mt-3 mb-4`} role="alert">
      {title ? (
        <div className="d-flex align-items-center mb-1">
          <span className="me-2" style={{ fontSize: '1.2rem' }}>{emoji}</span>
          <span className="h3 mb-0">{title}</span>
        </div>
      ) : (
        <div className="d-flex align-items-start mb-1">
          <span className="me-2" style={{ fontSize: '1.2rem' }}>{emoji}</span>
          <p className="mb-0">{description}</p>
        </div>
      )}
      {title && <p className="mb-0 ms-4">{description}</p>}
    </div>
  );
};

export default CalloutBlock;
