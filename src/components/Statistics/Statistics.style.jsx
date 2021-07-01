import styled from '@emotion/styled';
import { colorsVars } from '../../utils/colors';

export const StatisticsSection = styled.section`
  background-color: ${colorsVars.sectionBackgroundColor};
  height: fit-content;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
`;

export const TitleSection = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;

  text-transform: uppercase;
  font-weight: 600;
  font-size: 18px;
  color: ${colorsVars.secondaryTextColor};
`;

export const StatsList = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
`;

export const StatsListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 60px;

  background-color: ${colorsVars.randomColor};
`;

export const LabelSection = styled.span`
  color: ${colorsVars.sectionBackgroundColor};
`;

export const PercentageSection = styled.span`
  color: ${colorsVars.sectionBackgroundColor};
`;
