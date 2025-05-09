import React, { useState } from 'react'; //import React Component
import ProgressBar from './ProgressBar';
import Header from './Header';
import VideoBlock from './VideoBlock';
import ModuleBar from './ModuleBar';

const ModulePage = ({ title, url, children }) => {
  const [moduleBarExpanded, setModuleBarExpanded] = useState(false);

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
      </main>
    </div>
  );
};

export default ModulePage;
