const statements = [
  { label: "01", text: "Beyond the highlights." },
  { label: "02", text: "Strategy. Decisions. Dynamics." },
  { label: "03", text: "Intelligence over noise." },
  { label: "04", text: "The peloton, decoded." },
];

const MissionStrip = () => (
  <section className="border-t border-b border-border bg-card">
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        {statements.map(({ label, text }) => (
          <div key={label} className="flex flex-col gap-3">
            <span className="font-label text-primary">{label}</span>
            <p className="font-display text-foreground leading-tight" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}>
              {text}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default MissionStrip;
