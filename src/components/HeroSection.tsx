import { useEffect, useRef } from "react";

const HeroSection = () => {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = lineRef.current;
    if (!el) return;
    el.style.width = "0%";
    const timeout = setTimeout(() => {
      el.style.transition = "width 1.4s cubic-bezier(0.16, 1, 0.3, 1)";
      el.style.width = "100%";
    }, 300);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background gradient mesh */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 60% 40%, hsl(47 96% 53% / 0.04) 0%, transparent 70%), radial-gradient(ellipse 60% 80% at 20% 80%, hsl(0 0% 10% / 0.8) 0%, transparent 70%)",
        }}
      />

      {/* Diagonal grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, hsl(40 20% 92%), hsl(40 20% 92%) 1px, transparent 1px, transparent 80px), repeating-linear-gradient(90deg, hsl(40 20% 92%), hsl(40 20% 92%) 1px, transparent 1px, transparent 80px)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-24">
        {/* Eyebrow */}
        <p className="font-label text-primary mb-6 tracking-[0.2em]">
          Cycling Intelligence Platform
        </p>

        {/* Headline */}
        <h1
          className="font-display text-foreground leading-[0.9] mb-8"
          style={{ fontSize: "clamp(4rem, 12vw, 10rem)" }}
        >
          The Race
          <br />
          <span className="text-primary">Behind</span>
          <br />
          The Race.
        </h1>

        {/* Animated divider line */}
        <div className="mb-10 h-[2px] bg-border overflow-hidden">
          <div ref={lineRef} className="h-full bg-primary" style={{ width: "0%" }} />
        </div>

        {/* Subtext */}
        <p className="text-muted-foreground text-lg max-w-lg mb-12 leading-relaxed" style={{ fontWeight: 300 }}>
          Race analysis. Tactical breakdowns. Performance insight.
          <br />
          Everything that happens between the start and the podium.
        </p>

        {/* CTA */}
        <a
          href="#subscribe"
          className="inline-block font-label bg-primary text-primary-foreground px-10 py-4 text-sm tracking-[0.18em] hover:bg-primary/90 transition-colors"
        >
          Join the Movement
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
