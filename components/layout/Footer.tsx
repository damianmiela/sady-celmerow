export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary-900 py-6 text-center text-sm text-white/60">
      <div className="mx-auto max-w-content px-4">
        <p>
          &copy; {year} Sady Celmerów. Design by{' '}
          <a
            href="https://webdm.pl"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 transition-colors hover:text-white"
          >
            WebDM
          </a>
        </p>
      </div>
    </footer>
  );
}
