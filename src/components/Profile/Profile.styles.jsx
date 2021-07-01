import styled from '@emotion/styled';
import { colorsVars } from '../../utils/colors';

export const Container = styled.div`
  background-color: ${colorsVars.sectionBackgroundColor};
  width: 250px;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 35px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
`;

export const Description = styled.div`
  padding: 30px;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin-bottom: 30px;
`;

export const Name = styled.p`
  color: ${colorsVars.mainTextColor};
  margin-top: 0;
  margin-bottom: 15px;
  font-size: 20px;
  font-weight: 600;
`;

export const Tag = styled.p`
  color: ${colorsVars.secondaryTextColor};
  margin-top: 0;
  margin-bottom: 15px;
`;

export const Location = styled.p`
  margin: 0;
  color: ${colorsVars.secondaryTextColor};
`;

export const Stats = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  border-top: 1px solid ${colorsVars.borderColor};
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  height: 84px;
  width: 84px;

  align-items: center;
  justify-content: center;
  background-color: #f3f6f9;

  :not(:last-child) {
    border-right: 1px solid ${colorsVars.borderColor};
  }
`;

export const Label = styled.span`
  color: ${colorsVars.secondaryTextColor};
`;

export const Quantity = styled.span`
  color: ${colorsVars.mainTextColor};
  font-weight: 600;
`;
