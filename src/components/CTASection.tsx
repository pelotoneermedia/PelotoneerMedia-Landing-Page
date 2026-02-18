const CTASection = () => {

  return (
    <section
      id="subscribe"
      className="relative border-t border-border py-32 overflow-hidden"
    >
      {/* Yellow accent backdrop */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 70% at 50% 100%, hsl(47 96% 53% / 0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <p className="font-label text-primary mb-6 tracking-[0.2em]">Stay Ahead</p>

        <h2
          className="font-display text-foreground leading-tight mb-6"
          style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)" }}
        >
          Stay In
          <br />
          Touch
        </h2>

        <p className="text-muted-foreground mb-12 text-lg" style={{ fontWeight: 300 }}>
          Hottest Cycling news straight to your mailbox
        </p>
        
          <form action="https://formspree.io/f/mnjbznrg" method="POST" className="flex flex-col sm:flex-row gap-0 max-w-lg mx-auto">

            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              required
              className="flex-1 bg-card border border-border px-5 py-4 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary transition-colors"
            />

            <button
              type="submit"
              className="font-label bg-primary text-primary-foreground px-8 py-4 text-sm tracking-[0.15em] hover:bg-primary/90 transition-colors whitespace-nowrap"
            >
              Start Reading
            </button>
          </form>
        

        <p className="font-label text-muted-foreground mt-5 tracking-wider">
          No spam. Just signal.
        </p>
      </div>
    </section>
  );
};

export default CTASection;
