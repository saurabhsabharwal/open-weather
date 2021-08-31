import React from 'react';
import styled from "styled-components";
import WeatherTile from "./WeatherTile";

const Weather = ({ weather }) => {
    return (
        <Wrapper>
            <WeatherTile temperature={true}>
                <Temperature>{ weather.main.temp }</Temperature><sup>&#176;C</sup>
            </WeatherTile>
            <OtherData>
                <WeatherTile>
                    <OtherDataWrapper>
                        <Title>Humidity</Title>
                        { weather.main.humidity }%
                    </OtherDataWrapper>
                </WeatherTile>
                <WeatherTile>
                    <OtherDataWrapper>
                        <Title>Wind speed</Title>
                        { weather.wind.speed }m/s
                    </OtherDataWrapper>
                </WeatherTile>
                <WeatherTile>
                    <OtherDataWrapper>
                        <Title>Visibility</Title>
                        { weather.visibility }m
                    </OtherDataWrapper>
                </WeatherTile>
            </OtherData>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  width: 100%;
  max-width: 400px;
`;

const OtherData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  margin-top: 16px;

  @media (min-width: 400px) {
    flex-direction: row;
  }
`;

const OtherDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h6`
  margin-bottom: 8px;
  margin-top: 0;
`;

const Temperature = styled.p`
  margin: unset;
  font-size: 24px;
  display: inline-block;
`;

export default Weather;
