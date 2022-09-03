import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Weather = () => {

  // const [IS_LOADING, setLoading] = useState(true);
  // const [ERROR, setError] = useState(false);

  const [LONGITUDE, setLongitude] = useState();
  const [LATITUDE, setLatitude] = useState();
  const [METEOROLOGIC_DATA, setMeteorologicData] = useState();
  const [TEMPERATURE_UNIT, setTemperatureUnit] = useState('celsius');
  const [DAILY_DATA, setDailyData] = useState();

  



  const getLatitudeAndLongitude = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLongitude(JSON.stringify(position.coords.latitude));
      setLatitude(JSON.stringify(position.coords.longitude));
      console.log("LOCALIZAÇÃO OBTIDA");

    })
  }



  useEffect(() => {
    const fetchApi = async () => {

      await getLatitudeAndLongitude();

      let URL=`https://api.open-meteo.com/v1/forecast?latitude=${LATITUDE}&longitude=${LONGITUDE}&current_weather=true&temperature_unit=${TEMPERATURE_UNIT}&daily=temperature_2m_max,temperature_2m_min,weathercode,apparent_temperature_max,apparent_temperature_min,windspeed_10m_max&current_weather=true&timezone=America%2FSao_Paulo`
      
      const result = await axios(URL);

      setMeteorologicData(result.data);
      setDailyData(METEOROLOGIC_DATA.daily);
      console.log(DAILY_DATA);
      console.log("Use Effect Realizado");
    };
    fetchApi();
  },[LATITUDE, LONGITUDE])


  return (
    <>


      <br />
      <h2>Latitude:</h2> {LATITUDE && <p>{LATITUDE}</p>}
      <br />
      <h2>Longitude:</h2>{LONGITUDE && <p>{LONGITUDE}</p>}
      <br />

      <h2> Temperatura:</h2> {METEOROLOGIC_DATA && <p>{METEOROLOGIC_DATA.current_weather.temperature}</p>}






    </>
  )
}

export default Weather