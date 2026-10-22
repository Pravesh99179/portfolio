type Step = { label: string; title: string; body: string };

export default function Sequence({ steps }: { steps: Step[] }) {
  return (
    <ol className="sequence">
      {steps.map((s) => (
        <li key={s.label} className="sequence-step">
          <span className="sequence-label">{s.label}</span>
          <span className="sequence-marker" aria-hidden="true" />
          <div className="sequence-body">
            <h4>{s.title}</h4>
            <p>{s.body}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
