import styled from 'styled-components';

export const SectionWrap = styled.section`
  text-align: center;
  font-size: 20px;
  margin-top: 10px;
  color: #000000;
  padding: 30px;
`;

export const Title = styled.h2`
  font-size: 40px;
  color: rgb(47, 57, 102);
`;

export const FeedbackOptionsList = styled.ul`
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  font-size: 16px;
  color: #000000;
  background-color: #ffffff;
  border-radius: 5px;
  border: none;
  padding: 10px 20px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  text-transform: capitalize;

  &:hover {
    background-color: ${props => {
      if (props.children === 'good') {
        return 'rgb(174, 255, 167)';
      } else if (props.children === 'neutral') {
        return 'rgb(254, 255, 167)';
      } else if (props.children === 'bad') {
        return 'rgb(255, 167, 167)';
      } else {
        return 'rgb(167, 239, 255)';
      }
    }};
    cursor: pointer;
    transition: all 250ms linear;
    transform: scale(1.05);
    box-shadow: rgba(0, 0, 0, 0.3) 0px 20px 25px -5px,
      rgba(0, 0, 0, 0.1) 0px 10px 10px -5px;
  }
`;

export const NotificationText = styled.p`
  font-size: 20px;
  margin-top: 10px;
  color: #000000;
`;

export const StatisticTitle = styled.h3`
  margin-bottom: 10px;
  font-size: 30px;
  color: rgb(47, 57, 102);
`;

export const StatisticItem = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
  text-transform: capitalize;
`;

export const StatisticTotal = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const StatisticPercentage = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  color: rgb(55, 212, 112);
`;
