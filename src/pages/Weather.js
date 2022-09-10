import React, { useEffect, useState } from 'react'
import axios from 'axios';
import CurrentDayWeather from '../components/CurrentDayWeather';
import NextDaysForecast from '../components/NextDaysForecast';

const Weather = () => {

  const [IS_LOADING, setLoading] = useState(true);
  // const [ERROR, setError] = useState(false);

  const [LONGITUDE, setLongitude] = useState();
  const [LATITUDE, setLatitude] = useState();
  const [METEOROLOGIC_DATA, setMeteorologicData] = useState();
  const [TEMPERATURE_UNIT, setTemperatureUnit] = useState('celsius');
  const [CURRENT_TEMPERATURE, setCurrentTemp] = useState();
  const [CURRENT_MAX_TEMP, setCurrentMaxTemp] = useState();
  const [CURRENT_MIN_TEMP, setCurrentMinTemp] = useState();
  const [CURRENT_WEATHER_CODE, setCurrentWeatherCode] = useState();






  const getLatitudeAndLongitude = () => {
    navigator.geolocation.getCurrentPosition((position) => {


      setLatitude((position.coords.latitude).toFixed(1));
      setLongitude((position.coords.longitude).toFixed(1));
      console.log("LOCALIZAÇÃO OBTIDA");
    })
  }


  const fetchApi = async () => {

    await getLatitudeAndLongitude();

    let URL = `https://api.open-meteo.com/v1/forecast?latitude=${LATITUDE}&longitude=${LONGITUDE}&daily=weathercode,temperature_2m_max,temperature_2m_min,windspeed_10m_max&current_weather=true&temperature_unit=${TEMPERATURE_UNIT}&timezone=America%2FSao_Paulo`
    // URL provida pelo site, sem meus template literals:
    // let URL ='https://api.open-meteo.com/v1/forecast?latitude=-14.89&longitude=-40.85&daily=weathercode,temperature_2m_max,temperature_2m_min,windspeed_10m_max&current_weather=true&temperature_unit=celsius&timezone=America%2FSao_Paulo';
    const result = await axios(URL);

    setMeteorologicData(result.data);
    setCurrentTemp(result.data.current_weather.temperature);
    setCurrentMaxTemp(result.data.daily.temperature_2m_max[0]);
    setCurrentMinTemp(result.data.daily.temperature_2m_min[0]);
    setCurrentWeatherCode(result.data.current_weather.weathercode);
    setLoading(false);


    console.log("Use Effect Realizado");
  }


  useEffect(() => {
    fetchApi()
  }, [LATITUDE, LONGITUDE, TEMPERATURE_UNIT])




  if (IS_LOADING) {
    return <div className='loading'>LOADING WEATHER...</div>
  } else

    return (
      <>
       <NextDaysForecast />
        <CurrentDayWeather
          temp={CURRENT_TEMPERATURE}
          max={CURRENT_MAX_TEMP}
          min={CURRENT_MIN_TEMP}
          weatherCode={CURRENT_WEATHER_CODE} />

        
         
        
      </>


    )
}



export default Weather