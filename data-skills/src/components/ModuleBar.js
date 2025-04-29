import React, { useState } from 'react';

const ModuleBar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      style={{
        position: 'fixed',
        top: '95px', // Adjust vertical positioning as needed
        right: collapsed ? '0px' : '200px', // Keep the bar inside the screen boundary
        width: collapsed ? '50px' : '200px', // Adjust width based on collapsed state
        height: 'calc(100% - 50px)', // Take up full screen height, accounting for the top margin
        backgroundColor: '#2c3e50', // Color of the bar
        zIndex: 1000, // Keep it on top of other content
        transition: 'right 0.3s, width 0.3s', // Smooth transition when collapsing/expanding
        boxShadow: '2px 0px 5px rgba(0, 0, 0, 0.1)', // Optional shadow for depth
      }}
    >
      {/* Toggle button to expand or collapse the bar */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        style={{
          position: 'absolute',
          top: '20px',
          right: collapsed ? '-20px' : '-40px', // Keeps the button inside the bar when collapsed
          backgroundColor: '#16a085',
          border: 'none',
          padding: '10px',
          cursor: 'pointer',
          color: 'white',
          borderRadius: '50%',
        }}
      >
        {collapsed ? '▶' : '◁'}
      </button>
      
      {/* The content inside the module bar */}
      <div style={{ padding: '20px', color: 'white', visibility: collapsed ? 'hidden' : 'visible' }}>
        <h3>Modules</h3>
        <ul>
          <li>Representativeness</li>
          <li>Change Over Time</li>
          <li>Relationships</li>
          <li>Patterns and Variability</li>
          <li>Uncertainty</li>
          <li>Drawing Conclusions</li>
        </ul>
      </div>
    </div>
  );
};

export default ModuleBar;
