const articles = [
  {
    tag: "Race Result",
    title: "Jay Vine Takes Home Tour Down Under",
    excerpt:
      "Congrats to @jay_vine3 on the win for TDU hopefully the kangaroo did not hurt you that much 🤕 On the real note, congratulations to Jay Vine for the home win in Tour down under.",
    date: "Jan 27, 2026",
  },
  {
    tag: "Technology",
    title: "Lidl-Trek Kit Reveal",
    excerpt:
      "Is it hot 🔥 or nah? Lidl-Trek has unveiled their 2026 season kit. Will their season be as good as their kit?",
    date: "Dec 25, 2025",
  },
  {
    tag: "Behind The Scene",
    title: "Shocking Transfers of 2026",
    excerpt:
      "IT HAS BEEN CONFIRMED! These riders are confirmed to change their teams at the end of this season:",
    date: "Dec 8, 2025",
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
              href="https://instagram.com/pelotoneer"
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
