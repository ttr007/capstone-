import React from 'react';

export default function Footer() {
  return (
    <footer className="text-center text-muted py-4 mt-5 border-top small">
      <div>© {new Date().getFullYear()} Data Made Easy</div>
      <div className="mt-2">
        <a href="/contact" className="text-muted text-decoration-none me-3">Contact</a>
        <a href="/privacy" className="text-muted text-decoration-none">Privacy</a>
      </div>
    </footer>
  );
}
