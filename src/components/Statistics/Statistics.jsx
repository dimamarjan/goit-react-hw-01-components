import {
  statisticsSection,
  titleSction,
  statsList,
  statsListItem,
  labelSection,
  percentageSection,
} from './Statistics.style';

export function Statistics(statisticData) {
  return (
    <statisticsSection>
      <titleSction></titleSction>
      <statsList>
        <statsListItem>
          <labelSection></labelSection>
          <percentageSection></percentageSection>
        </statsListItem>
      </statsList>
    </statisticsSection>
  );
}
