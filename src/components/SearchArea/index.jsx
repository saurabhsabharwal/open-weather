import React, {useState} from 'react';
import styled from 'styled-components';
import CityForm from './CityForm';
import getWeather from '../../utils/getWeather';
import {Container} from '../Container';

const SearchArea = ({
    setWeather,
    setLoading,
}) => {
    const [city, setCity] = useState('');
    const [error, setError] = useState('');

    const validateCity = () => {
      return city === '';
    };

    const handleSubmit = () => {
        if (validateCity()) {
            return;
        }

        setLoading(true);

        getWeather(city)
            .then((response) => {
                if (response.success) {
                    setWeather(response.data);
                    setError(false);
                } else {
                    setWeather({});
                    setError(response.error);
                }
            })
            .catch((ex) => {
                setWeather({});
                setError(ex);
            })
            .finally(() => {
                setLoading(false);
            })
    };

    return (
        <Wrapper>
            <Container>
                <Title>Search for weather details</Title>
                <CityForm
                    city={city}
                    handleChange={setCity}
                    handleSubmit={handleSubmit}
                    error={error}
                />
            </Container>
        </Wrapper>
    )
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #f2f2f2;
  padding: 60px 0;
`;

const Title = styled.h4`
  margin-bottom: 16px;
`;

export default SearchArea;
