import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import { useLocation, Link } from 'react-router-dom';
import Header from './Header';
import VideoBlock from './VideoBlock';
import ModuleBar from './ModuleBar';
import Footer from './Footer'

const modules = [
  { title: 'Sampling', icon: 'bi-house', time: '6 min read', link: '/sampling' },
  { title: 'Change Over Time', icon: 'bi-alarm', time: '5 min read', link: '/change-over-time' },
  { title: 'Relationships', icon: 'bi-table', time: '7 min read', link: '/relationships' },
  { title: 'Patterns and Variability', icon: 'bi-bar-chart', time: '5 min read', link: '/patterns-and-variability' },
  { title: 'Uncertainty', icon: 'bi-question-circle', time: '4 min read', link: '/uncertainty' },
  { title: 'Statistical Significance', icon: 'bi-clipboard-data', time: '5 min read', link: '/statistical-significance' },
  { title: 'Social Implications', icon: 'bi-people', time: '6 min read', link: '/social-implications' },
  { title: 'Skewing the Data', icon: 'bi-graph-up-arrow', time: '4 min read', link: '/skewing-the-data' }
];

const ModulePage = ({ title, url, children }) => {
  const [moduleBarExpanded, setModuleBarExpanded] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const currentIndex = modules.findIndex(mod => mod.link === currentPath);
  const nextModule = currentIndex >= 0 && currentIndex < modules.length - 1
    ? modules[currentIndex + 1]
    : null;
  const previousModule = currentIndex > 0 ? modules[currentIndex - 1] : null;

  return (
    <div
      style={{
        position: 'relative',
        overflowX: 'hidden'
      }}
    >
      <Header />
      <ModuleBar
        onExpand={() => setModuleBarExpanded(true)}
        onCollapse={() => setModuleBarExpanded(false)}
      />
      <main
        className="module-container"
        style={{
          paddingRight: moduleBarExpanded ? '260px' : '50px', // Match the offcanvas width exactly
          transition: 'padding-right 0.3s ease', // Smooth transition when expanding/collapsing
        }}
      >
        <ProgressBar />
        <div className="flex justify-between items-start gap-10">
          <div className="flex-1">
            <h1 className="module-title fw-bold">{title}</h1>
            <VideoBlock title="" url={url} />
          </div>
        </div>
        <div id="main-content">
          {children}
        </div>
        <div className="d-flex justify-content-between mt-5">
          {previousModule ? (
            <Link to={previousModule.link} className="btn btn-outline-secondary">
              ← {previousModule.title}
            </Link>
          ) : <div />}

          {nextModule && (
            <Link to={nextModule.link} className="btn btn-outline-secondary">
              Next: {nextModule.title} →
            </Link>
          )}
        </div>
            <Footer/>
      </main>
    </div>
  );
};

export default ModulePage;