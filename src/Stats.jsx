export default function Stats({ stats }) {
  return (
    <section className="stats">
      <Stat count={stats.numberOfWords} title={"Words"} />
      <Stat count={stats.numberOfCharacters} title={"Characters"} />
      <Stat count={stats.numberOfInstagramCharacters} title={"Instagram"} />
      <Stat count={stats.numberOfFacebookCharacters} title={"Twitter"} />
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
