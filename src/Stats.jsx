export default function Stats() {
  return (
    <section className="stats">
      <Stat count={0} title={"Words"} />
      <Stat count={0} title={"Characters"} />
      <Stat count={280} title={"Instagram"} />
      <Stat count={2200} title={"Twitter"} />
    </section>
  );
}

function Stat({ count, title }) {
  return (
    <section className="stat">
      <span className="set__number">{count}</span>
      <h2 className="second-heading">{title}</h2>
    </section>
  );
}
