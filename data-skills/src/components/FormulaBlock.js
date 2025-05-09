import React from 'react';

const FormulaBlock = ({ children }) => (
  <div className="border rounded bg-light p-3 mb-4">
    <pre className="mb-0"><code>{children}</code></pre>
  </div>
);

export default FormulaBlock;