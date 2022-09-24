import React, { useEffect, useState } from 'react'
import axios from 'axios';
import CurrentDayWeather from '../components/CurrentDayWeather';
import NextDaysForecast from '../components/NextDaysForecast';


/*  TO-DO

Traduzir os tipos de clima
Adicionar ícones para cada clima
Fazer com que a propriedade src das imagens mude de acordo com o weather code

ADicionar opção para trocar para Fahrenheit



NextDaysForecast: centralizar o min-max até onde der sem atrapalhar o WeatherCode


*/


const Weather = () => {

  const [IS_LOADING, setLoading] = useState(true);
  // const [ERROR, setError] = useState(false);

  const [LONGITUDE, setLongitude] = useState();
  const [LATITUDE, setLatitude] = useState();
  const [EXACT_LOCATION,setExactLocation] =useState('Impossível obter localização');
  const [METEOROLOGIC_DATA, setMeteorologicData] = useState();
  const [TEMPERATURE_UNIT, setTemperatureUnit] = useState('celsius');
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

  const getLatitudeAndLongitude = () => {
    navigator.geolocation.getCurrentPosition((position) => {


      setLatitude((position.coords.latitude).toFixed(1));
      setLongitude((position.coords.longitude).toFixed(1));
      console.log("LOCALIZAÇÃO OBTIDA");
    })
  }


  //test
  console.log(WEEK_DAY_NUMBER);
  //----------





  const fetchApi = async () => {

    await getLatitudeAndLongitude();

    //let URL = `https://api.open-meteo.com/v1/forecast?latitude=${LATITUDE}&longitude=${LONGITUDE}&daily=weathercode,temperature_2m_max,temperature_2m_min,windspeed_10m_max&current_weather=true&temperature_unit=${TEMPERATURE_UNIT}&timezone=America%2FSao_Paulo`
    // URL provida pelo site, sem meus template literals:
    let URL = 'https://api.open-meteo.com/v1/forecast?latitude=-14.89&longitude=-40.85&daily=weathercode,temperature_2m_max,temperature_2m_min,windspeed_10m_max&current_weather=true&temperature_unit=celsius&timezone=America%2FSao_Paulo';
    const result = await axios(URL);

    setMeteorologicData(result.data);
    setCurrentTemp(result.data.current_weather.temperature);
    setCurrentMaxTemp(result.data.daily.temperature_2m_max[0]);
    setCurrentMinTemp(result.data.daily.temperature_2m_min[0]);
    setCurrentWeatherCode(result.data.current_weather.weathercode);
    setNextDays(result.data.daily.time.slice(1));
    setNextDaysWeatherCodes(result.data.daily.weathercode);
    setNextDaysMaxTemps(result.data.daily.temperature_2m_max);
    setNextDaysMinTemps(result.data.daily.temperature_2m_min);

    const GOOGLE_API_DATA = await axios('https://maps.googleapis.com/maps/api/geocode/json?latlng=-14.89,-40.85&result_type=administrative_area_level_2|administrative_area_level_1&key=AIzaSyDNS9i0ANU7BCFOwpBQ01E96PfI3ObZTdU');
    setExactLocation(GOOGLE_API_DATA.data.results[0].formatted_address);
    console.log(GOOGLE_API_DATA.data.results[0].formatted_address);

    setLoading(false);


    console.log("Use Effect Realizado");
  }


  useEffect(() => {
    fetchApi()
  }, [LATITUDE, LONGITUDE, TEMPERATURE_UNIT])




  if (IS_LOADING) {
    return <div className='loading'>LOADING teste...</div>
  } else

    return (
      <>
        <CurrentDayWeather
        location={EXACT_LOCATION}
          temp={CURRENT_TEMPERATURE}
          max={CURRENT_MAX_TEMP}
          min={CURRENT_MIN_TEMP}
          weatherCode={CURRENT_WEATHER_CODE} 
          weekDayNumber={WEEK_DAY_NUMBER}/>

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