const articles = [
  {
    tag: "Race Breakdown",
    title: "How Tadej Pogačar Controlled the Peloton for 80km",
    excerpt:
      "A frame-by-frame analysis of the UAE Team Emirates strategy at Liège–Bastogne–Liège. How they neutralized every attack before the final climb.",
    date: "Apr 21, 2025",
  },
  {
    tag: "Tactical Insight",
    title: "The Art of the Echelon: Wind, Angles, and Attrition",
    excerpt:
      "Why crosswind stages aren't just about suffering — they're chess matches played at 50km/h. We break down the geometry of the split.",
    date: "Mar 15, 2025",
  },
  {
    tag: "Performance Analysis",
    title: "Riding the Red Zone: When Breakaways Are Calculated Bets",
    excerpt:
      "Not all breakaways are desperate escapes. The data behind when teams send riders up the road — and why they're rarely surprised when it works.",
    date: "Feb 28, 2025",
  },
];

const FeaturedContent = () => (
  <section id="articles" className="py-28">
    <div className="max-w-7xl mx-auto px-6">
      {/* Section header */}
      <div className="flex items-end justify-between mb-14 border-b border-border pb-6">
        <div>
          <p className="font-label text-primary mb-2">Featured</p>
          <h2 className="font-display text-foreground" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
            Latest Breakdowns
          </h2>
        </div>
        <a href="#articles" className="hidden md:block font-label text-muted-foreground hover:text-foreground transition-colors">
          All Articles →
        </a>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
        {articles.map((article) => (
          <article
            key={article.title}
            className="group bg-card p-8 flex flex-col gap-6 hover:bg-card/80 transition-colors cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <span className="font-label text-primary">{article.tag}</span>
              <span className="font-label text-muted-foreground">{article.date}</span>
            </div>

            <h3
              className="font-display text-foreground leading-tight group-hover:text-primary transition-colors"
              style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.6rem)" }}
            >
              {article.title}
            </h3>

            <p className="text-muted-foreground text-sm leading-relaxed flex-1" style={{ fontWeight: 300 }}>
              {article.excerpt}
            </p>

            <a
              href="#"
              className="font-label text-foreground/40 group-hover:text-primary transition-colors self-start mt-auto"
            >
              Read More →
            </a>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedContent;
