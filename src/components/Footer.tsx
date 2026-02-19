const Footer = () => (
  <footer className="border-t border-border bg-card">
    <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
      {/* Brand */}
      <div className="flex flex-col gap-2">
        <span className="font-display text-foreground tracking-widest text-lg">PELOTONEER</span>
        <p className="font-label text-muted-foreground tracking-wider">
          The race behind the race.
        </p>
      </div>

      {/* Links */}
      <nav className="flex flex-wrap gap-8">
        {["About", "Articles", "Subscribe"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="font-label text-muted-foreground hover:text-foreground transition-colors"
          >
            {item}
          </a>
        ))}
      </nav>

      {/* Social placeholders */}
      <div className="flex gap-6">
        {[
          { name: "X", url: "https://x.com/pelotoneer" },
          { name: "Instagram", url: "https://instagram.com/pelotoneer" },
].map((platform) => (
  <a
    key={platform.name}
    href={platform.url}
    target="_blank"
    rel="noopener noreferrer"
    className="font-label text-muted-foreground hover:text-primary transition-colors"
    aria-label={platform.name}
  >
    {platform.name}
  </a>
))}

      </div>
    </div>

    <div className="border-t border-border max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
      <p className="font-label text-muted-foreground/50 text-xs">
        © 2025 Pelotoneer. All rights reserved.
      </p>
      <p className="font-label text-muted-foreground/50 text-xs">
        Built for the serious fan.
      </p>
    </div>
  </footer>
);

export default Footer;
