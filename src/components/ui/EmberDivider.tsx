export default function EmberDivider() {
  return (
    <div className="relative h-px max-w-5xl mx-auto" aria-hidden="true">
      <div
        className="absolute inset-0 animate-ember-line"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(220,38,38,0.6) 30%, rgba(251,191,36,0.9) 50%, rgba(220,38,38,0.6) 70%, transparent)",
          boxShadow: "0 0 12px rgba(234,88,12,0.5), 0 0 24px rgba(220,38,38,0.3)",
        }}
      />
    </div>
  );
}
