import { useState } from "react";

const CTASection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

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
          Intelligence,
          <br />
          Delivered.
        </h2>

        <p className="text-muted-foreground mb-12 text-lg" style={{ fontWeight: 300 }}>
          Race analysis and tactical breakdowns, straight to your inbox.
        </p>

        {submitted ? (
          <div className="border border-primary/40 bg-primary/5 px-8 py-6">
            <p className="font-label text-primary tracking-wider">You're in. Expect signal, not noise.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 bg-card border border-border px-5 py-4 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary transition-colors"
              style={{ fontFamily: "'Barlow', sans-serif" }}
            />
            <button
              type="submit"
              className="font-label bg-primary text-primary-foreground px-8 py-4 text-sm tracking-[0.15em] hover:bg-primary/90 transition-colors whitespace-nowrap"
            >
              Start Reading
            </button>
          </form>
        )}

        <p className="font-label text-muted-foreground mt-5 tracking-wider">
          No spam. Just signal.
        </p>
      </div>
    </section>
  );
};

export default CTASection;
