import React from 'react';

const VideoBlock = ({ title, url }) => {
  return (
    <div className="mb-8">
      {title && <h2 className="fw-semibold mb-4">{title}</h2>}
      <iframe
        width="805"
        height="461"
        src={url}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="module-video"
      />
    </div>
  );
};

export default VideoBlock;