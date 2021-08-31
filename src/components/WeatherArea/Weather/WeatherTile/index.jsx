import React from 'react';
import styled from 'styled-components';

const WeatherTile = ({
    temperature = false,
    children,
}) => {
    return (
        <Wrapper temperature={temperature}>
            { children }
        </Wrapper>
    )
};

const Wrapper = styled.div`
  width: ${({temperature}) => temperature ? '100%' : 'auto'};
  padding: 20px;
  background-color: #a2d4ee;
  border-radius: 4px;
  text-align: center;
  margin-top: ${({temperature}) => temperature ? '0' : '8px'};

  @media (min-width: 400px) {
    margin-top: 0;
  }
`;

export default WeatherTile;
