import Stat from "./Stat";

export default function Stats() {
  return (
    <section className="stats">
      <Stat count={0} title={"Words"} />
      <Stat count={0} title={"Characters"} />
      <Stat count={0} title={"Instagram"} />
      <Stat count={0} title={"Twitter"} />
    </section>
  );
}
