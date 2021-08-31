import './App.css';
import styled from "styled-components";
import {useState} from "react";
import SearchArea from "./SearchArea";
import WeatherArea from "./WeatherArea";

function App() {
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);

  return (
      <Wrapper>
        <SearchArea
            setWeather={setWeather}
            setLoading={setLoading}
        />
        <WeatherArea
            weather={weather}
            loading={loading}
        />
      </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default App;
