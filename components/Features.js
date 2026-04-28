export default function Features() {
  const items = [
    { title: 'Real-time Telemetry', desc: 'Live metrics and alerts from your devices.' },
    { title: 'Secure Connectivity', desc: 'Encrypted links and role-based access.' },
    { title: 'Predictive Maintenance', desc: 'Reduce downtime with analytics.' }
  ]

  return (
    <section id="features" className="features">
      <div className="container">
        <h2>Key Capabilities</h2
        <div className="grid">
          {items.map((it) => (
            <div key={it.title} className="card">
              <h3>{it.title}</h3>
              <p>{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
