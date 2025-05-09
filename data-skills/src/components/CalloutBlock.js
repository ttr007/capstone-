// import React from 'react';

// const typeToClass = {
//   info: 'alert alert-info',
//   warning: 'alert alert-warning',
//   success: 'alert alert-success',
//   danger: 'alert alert-danger',
// };

// const CalloutBlock = ({ type = 'info', children }) => {
//   const className = typeToClass[type] || typeToClass.info;

//   return (
//     <div className={`${className} mt-3 mb-4`} role="alert">
//       {children}
//     </div>
//   );
// };

// export default CalloutBlock;
import React from 'react';

const typeToClass = {
  info: {
    className: 'alert alert-info',
    emoji: '💡', // Lightbulb emoji for info
  },
  warning: {
    className: 'alert alert-warning',
    emoji: '⚠️', // Warning sign emoji for warning
  },
  success: {
    className: 'alert alert-success',
    emoji: '✅', // Checkmark emoji for success
  },
  danger: {
    className: 'alert alert-danger',
    emoji: '❌', // Cross mark emoji for danger
  },
};

const CalloutBlock = ({ type = 'info', title, description }) => {
  const { className, emoji } = typeToClass[type] || typeToClass.info;

  return (
    <div className={`${className} mt-3 mb-4`} role="alert">
      <div className="d-flex align-items-start mb-1">
        <span className="me-2" style={{ fontSize: '1.2rem' }}>{emoji}</span>
        <strong className="fs-4">{title}</strong>
      </div>
      <p className="mb-0 ms-4">{description}</p>
    </div>
  );
};

export default CalloutBlock;