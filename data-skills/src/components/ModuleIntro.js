import React from 'react';

const ModuleIntro = ({ title, readTime, overview, toc, pdfUrl, downloadFileName }) => {
  const onButtonClick = () => {
    if (!pdfUrl) {
      alert("No PDF file provided.");
      return;
    }
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = downloadFileName || "summary.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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

        {/* Download button */}
        <button
          onClick={onButtonClick}
          type="button"
          className="download-button btn btn-link d-flex align-items-center mt-3"
          title={`Download ${title} Summary PDF`}
        >
          <i className="bi bi-download download-icon"></i>
          <span className="download-text">{`Download ${title} Summary PDF`}</span>
        </button>

        {/* Scoped CSS */}
        <style>{`
          .download-button {
            gap: 0.6rem;
            font-size: 1.6rem;
            color: #444;
            text-decoration: none;
            cursor: pointer;
            padding: 0;
            border: none;
            background: none;
            transition: color 0.3s ease;
          }

          .download-button .download-icon {
            font-size: 1.4rem;
            transition: color 0.3s ease;
          }

          .download-button:hover {
            color: #0d6efd;
            text-decoration: underline;
          }

          .download-button:hover .download-icon {
            color: #0d6efd;
          }
        `}</style>
      </div>

      {/* Right side */}
      <div style={{ flex: '1 1 35%', minWidth: '250px' }}>
        {toc}
      </div>
    </div>
  );
};

export default ModuleIntro;