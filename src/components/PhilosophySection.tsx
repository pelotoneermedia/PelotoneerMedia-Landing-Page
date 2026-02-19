const PhilosophySection = () => (
  <section
    id="about"
    className="relative py-32 overflow-hidden border-t border-border"
  >
    {/* Large background character */}
    <div
      className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
      aria-hidden="true"
    >
      <span
        className="font-display text-border/30 leading-none"
        style={{ fontSize: "clamp(12rem, 35vw, 32rem)", opacity: 0.12 }}
      >
        P
      </span>
    </div>

    {/* Accent bar */}
    <div className="absolute top-0 left-0 w-24 h-[3px] bg-primary" />

    <div className="relative max-w-5xl mx-auto px-6 text-center">
      <p className="font-label text-primary mb-8 tracking-[0.2em]">Philosophy</p>

      {/* Pull quote */}
      <blockquote
        className="font-display text-foreground leading-tight mb-12"
        style={{ fontSize: "clamp(2.2rem, 6vw, 5rem)" }}
      >
        "The peloton <br/> is not chaos
        <br />
        <span className="text-primary">It's harmony</span>"
      </blockquote>

      {/* Descriptor paragraph */}
      <p
        className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed"
        style={{ fontWeight: 300 }}
      >
        Pelotoneer is built for riders and fans who demand more from the sport. 
        We explain the system behind cycling. Every race has a logic. We find it.
      </p>
    </div>
  </section>
);

export default PhilosophySection;
