import React, { useEffect, useState } from 'react'
import axios from 'axios';
import CurrentDayWeather from '../components/CurrentDayWeather';
import NextDaysForecast from '../components/NextDaysForecast';

const Weather = () => {

  const [IS_LOADING, setLoading] = useState(true);
  const [LONGITUDE, setLongitude] = useState();
  const [LATITUDE, setLatitude] = useState();
  const [EXACT_LOCATION, setExactLocation] = useState('Impossível obter localização');
  const [METEOROLOGIC_DATA, setMeteorologicData] = useState();
  const [CURRENT_TEMPERATURE, setCurrentTemp] = useState();
  const [CURRENT_MAX_TEMP, setCurrentMaxTemp] = useState();
  const [CURRENT_MIN_TEMP, setCurrentMinTemp] = useState();
  const [CURRENT_WEATHER_CODE, setCurrentWeatherCode] = useState();
  const [NEXT_DAYS, setNextDays] = useState();
  const [NEXT_DAYS_WEATHER_CODES, setNextDaysWeatherCodes] = useState();
  const [NEXT_DAYS_MAX_TEMPS, setNextDaysMaxTemps] = useState();
  const [NEXT_DAYS_MIN_TEMPS, setNextDaysMinTemps] = useState();



  const date = new Date();
  const WEEK_DAY_NUMBER = date.getDay();
  const NEXT_DAYS_NUMBERS = [
    (WEEK_DAY_NUMBER + 1),
    (WEEK_DAY_NUMBER + 2),
    (WEEK_DAY_NUMBER + 3),
    (WEEK_DAY_NUMBER + 4),
    (WEEK_DAY_NUMBER + 5),
    (WEEK_DAY_NUMBER + 6)
  ];

  const getLocationName = () => {



    let requestUrl = 'http://localhost:8000/location';

    axios.get(requestUrl, {
      body: {
        lat: LATITUDE,
        lng: LONGITUDE
      }
    })
      .then((response) => {
        setExactLocation(response.data.results[0].formatted_address)
      })
      .catch((error) => console.log(error))

  }


  const getWeatherForecast = () => {

    let requestUrl = 'http://localhost:8000/weather';

    axios.get(requestUrl, {
      body: {
        lat: LATITUDE,
        lng: LONGITUDE
      }
    })
      .then((result) => {

        setMeteorologicData(result.data);
        setCurrentTemp(result.data.current_weather.temperature);
        setCurrentMaxTemp(result.data.daily.temperature_2m_max[0]);
        setCurrentMinTemp(result.data.daily.temperature_2m_min[0]);
        setCurrentWeatherCode(result.data.current_weather.weathercode);
        setNextDays(result.data.daily.time.slice(1));
        setNextDaysWeatherCodes(result.data.daily.weathercode);
        setNextDaysMaxTemps(result.data.daily.temperature_2m_max);
        setNextDaysMinTemps(result.data.daily.temperature_2m_min);

        console.log('Clima obtido')
        setLoading(false);
      })
      .catch(err => {
        console.log(err)
        console.log('Não foi possível obter a informação meteorológica')
      })





  }

  const getLatitudeAndLongitude = () => {

    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude((position.coords.latitude).toFixed(2));
      setLongitude((position.coords.longitude).toFixed(2));

      console.log("Latitude " + LATITUDE + " e Longitude " + LONGITUDE);

    }, (error) => {
      alert(`ERROR ${error.code}:
      ${error.message}`)

    })


  }



  if (IS_LOADING) {
    return <div className='loading'>LOADING...</div>
  } else

    return (

      <>
        <CurrentDayWeather
          location={EXACT_LOCATION}
          temp={CURRENT_TEMPERATURE}
          max={CURRENT_MAX_TEMP}
          min={CURRENT_MIN_TEMP}
          weatherCode={CURRENT_WEATHER_CODE}
          weekDayNumber={WEEK_DAY_NUMBER} />

        {NEXT_DAYS_NUMBERS.map(((item, index) => (
          <NextDaysForecast
            key={index}
            weekDayNumber={NEXT_DAYS_NUMBERS[index]}
            day={NEXT_DAYS[index]}
            weatherCode={NEXT_DAYS_WEATHER_CODES[index]}
            max={NEXT_DAYS_MAX_TEMPS[index]}
            min={NEXT_DAYS_MIN_TEMPS[index]} />
        )))}
      </>


    )
}



export default Weather