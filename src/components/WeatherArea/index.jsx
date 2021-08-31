import React from 'react';
import styled from "styled-components";
import {Container} from "../Container";
import Loader from "../Loader";
import Weather from "./Weather";

const WeatherArea = ({
    weather,
    loading,
}) => {
    return (
        <>
            <Wrapper>
                <Container>
                    {
                        loading ? (
                            <Loader />
                        ) : (
                            weather?.main && (
                                <Weather weather={weather} />
                            )
                        )
                    }
                </Container>
            </Wrapper>
        </>
    );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 16px;
`;

export default WeatherArea;
