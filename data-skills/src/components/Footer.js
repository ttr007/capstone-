export default function Footer() {
  return (
    <footer className="text-center text-muted py-4 mt-5 border-top small">
      <div>© {new Date().getFullYear()} Think Tank</div>
      <div className="mt-2">
        <a href="https://ischool.uw.edu/capstone" className="text-muted text-decoration-none me-3" target="_blank" rel="noopener noreferrer">
          More Information
        </a>
      </div>
    </footer>
  );
}
