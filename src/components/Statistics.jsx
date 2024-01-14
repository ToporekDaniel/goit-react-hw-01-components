import styled from 'styled-components';

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const StatSection = styled.section`
  background-color: ${getRandomColor};
  padding: 10px;
`;

const StatList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 10px;
`;

const StatItem = styled.li`
  background-color: ${getRandomColor};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  color: white;
`;

export const Stats = ({ title, stats }) => {
  function createLi() {
    return stats.map(i => (
      <StatItem className="item">
        <span className="label">{i.label}</span>
        <span className="percentage">{i.percentage}</span>
      </StatItem>
    ));
  }

  return (
    <StatSection className="statistics">
      <h2 style={{ alignItems: 'center', display: 'flex' }} className="title">
        {title}
      </h2>
      <StatList className="stat-list">{createLi()}</StatList>
    </StatSection>
  );
};
