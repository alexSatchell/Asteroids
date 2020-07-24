import styled from 'styled-components';
import { COLORS } from './../../styles/styles';

export const NEOContainer = styled.div`
  /* border: 1px solid black; */
  display: flex;
  justify-content: center;

  flex-direction: column;

  width: 30rem;

  padding: 2rem;
  border-radius: 0.5rem;

  -webkit-box-shadow: 0px -1px 15px 5px rgba(54, 54, 54, 0.08);
  -moz-box-shadow: 0px -1px 15px 5px rgba(54, 54, 54, 0.08);
  box-shadow: 0px -1px 15px 5px rgba(54, 54, 54, 0.08);

  transition: 0.2s ease-in-out;
`;

export const NEOContainerHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`;

export const AsteroidName = styled.h5`
  padding: 1rem;
  font-size: 2rem;
`;

export const AsteroidIcon = styled.div`
  font-size: 2rem;
  color: ${COLORS.blue};

  & > img {
    width: 6rem;
  }
`;

export const AsteroidMagnitude = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const HazardPotential = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const ApproachDate = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const Speed = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const Diameter = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const MissDistance = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const OfficialNasaReference = styled.a`
  font-size: 1.5rem;
  font-weight: bold;

  text-decoration: none;
  color: ${COLORS.blue};
  border-bottom: 0.15rem solid ${COLORS.yellow};
  transition: 0.3s ease-in-out;

  &:hover {
    color: ${COLORS.red};
  }
`;

export const Span = styled.span`
  font-weight: normal;
  display: block;
  margin-bottom: 0.5rem;
`;

export const Button = styled.button`
  font-size: 1.5rem;
  margin: 1rem;
  outline: none;
  border: none;
  background: ${COLORS.blue};
  color: white;
  border-radius: 0.2rem;
  height: 2rem;
  transition: 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    -webkit-box-shadow: 0px -1px 15px 5px rgba(4, 83, 119, 0.2);
    -moz-box-shadow: 0px -1px 15px 5px rgba(4, 83, 119, 0.2);
    box-shadow: 0px -1px 15px 5px rgba(4, 83, 119, 0.15);
  }

  &:active {
    -webkit-box-shadow: 0px -1px 15px 5px rgba(4, 83, 119, 0.2);
    -moz-box-shadow: 0px -1px 15px 5px rgba(4, 83, 119, 0.2);
    box-shadow: 0px -1px 5px 5px rgba(4, 83, 119, 0.1);
  }
`;

export const ButtonClose = styled.button`
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  width: 4rem;
`;

export const CloseIcon = styled.i`
  color: ${COLORS.red};
  font-size: 2rem;
`;
