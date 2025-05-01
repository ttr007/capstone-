<<<<<<< HEAD
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const ModuleBar = () => {
  const modules = [
    { title: 'Representativeness', icon: 'bi-house', time: '6 min read', link: 'Representativeness' },
    { title: 'Change Over Time', icon: 'bi-alarm', time: '5 min read', link: '/' },
    { title: 'Relationships', icon: 'bi-table', time: '7 min read', link: '/' },
    { title: 'Patterns and Variability', icon: 'bi-bar-chart', time: '5 min read', link: '/' },
    { title: 'Uncertainty', icon: 'bi-question-circle', time: '4 min read', link: '/' },
    { title: 'Societal Implications', icon: 'bi-people', time: '6 min read', link: '/' },
    { title: 'Skewing the Data', icon: 'bi-graph-up-arrow', time: '4 min read', link: '/' },
    { title: 'Statistical Significance', icon: 'bi-clipboard-data', time: '5 min read', link: '/' },
  ];

  return (
    <div
      className="offcanvas offcanvas-end text-white module-list custom-offcanvas"
      tabIndex="-1"
      id="offcanvas"
      data-bs-keyboard="false"
      data-bs-backdrop="false"
      style={{
        width: '260px',
        backgroundColor: '#D3D3D3',
        top: '95px',
        height: 'auto',
        overflowY: 'auto',
        position: 'fixed',
        zIndex: 99,
      }}
    >
      <div className="offcanvas-header">
        <h6 className="offcanvas-title text-black d-none d-sm-block">Modules</h6>
        <button
          type="button"
          className="btn-close btn-close-white text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body px-0">
        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-start" id="menu">
          {modules.map((mod, i) => (
            <li className="nav-item" key={i} style={{ height: '80px', width: '100%' }}>
              <a href={mod.link} className="nav-link text-black d-flex align-items-center" style={{ height: '100%' }}>
                {/* Icon Container */}
                <div className="d-flex align-items-center justify-content-center me-3" style={{ width: '40px', height: '100%' }}>
                  <i className={`bi ${mod.icon}`} style={{ fontSize: '1.75rem', height: '100%', lineHeight: '1' }}></i>
                </div>

                {/* Text Container */}
                <div className="d-flex flex-column justify-content-center align-items-start" style={{ height: '100%' }}>
                  <span className="fw-semibold" style={{ lineHeight: '1.2', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
                    {mod.title}
                  </span>
                  <small className="text-light text-black" style={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
                    {mod.time}
                  </small>
                </div>
              </a>
            </li>
          ))}
=======
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
>>>>>>> 310386276008279bbdd7581b7aaccdf235554520
        </ul>
      </div>
    </div>
  );
};

export default ModuleBar;
<<<<<<< HEAD

=======
>>>>>>> 310386276008279bbdd7581b7aaccdf235554520
