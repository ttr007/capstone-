import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const ModuleBar = () => {
  const modules = [
    { title: 'Sampling', icon: 'bi-house', time: '6 min read', link: 'sampling' },
    { title: 'Change Over Time', icon: 'bi-alarm', time: '5 min read', link: '/change-over-time' },
    { title: 'Relationships', icon: 'bi-table', time: '7 min read', link: '/relationships' },
    { title: 'Patterns and Variability', icon: 'bi-bar-chart', time: '5 min read', link: '/patterns-and-variability' },
    { title: 'Uncertainty', icon: 'bi-question-circle', time: '4 min read', link: '/uncertainty' },
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
        </ul>
      </div>
    </div>
  );
};

export default ModuleBar;
