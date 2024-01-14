export const Stats = ({ title, stats }) => {
  function createLi() {
    return stats.map(i => (
      <li class="item">
        <span class="label">{i.label}</span>
        <span class="percentage">{i.percentage}</span>
      </li>
    ));
  }

  return (
    <section class="statistics">
      <h2 class="title">{title}</h2>

      <ul class="stat-list">{createLi()}</ul>
    </section>
  );
};
