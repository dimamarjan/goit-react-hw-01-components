import {
  StatisticsSection,
  TitleSection,
  StatsList,
  StatsListItem,
  LabelSection,
  PercentageSection,
} from './Statistics.style';

export function Statistics(statisticData) {
  return (
    <StatisticsSection>
      {statisticData.title ? (
        <TitleSection>{statisticData.title}</TitleSection>
      ) : (
        ''
      )}
      <StatsList>
        {statisticData.stats.map(element => (
          <StatsListItem key={element.id}>
            <LabelSection>{element.label}</LabelSection>
            <PercentageSection>{element.percentage}</PercentageSection>
          </StatsListItem>
        ))}
      </StatsList>
    </StatisticsSection>
  );
}
