import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Wordmark */}
        <a href="#" className="font-display text-xl text-foreground tracking-widest hover:text-primary transition-colors">
          PELOTONEER
        </a>

        {/* Nav links */}
        <ul className="hidden md:flex items-center gap-8">
          {["About", "Articles", "Subscribe"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="font-label text-muted-foreground hover:text-foreground transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile CTA */}
        <a
          href="#subscribe"
          className="md:hidden font-label text-primary border border-primary px-4 py-1.5 hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          Subscribe
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
