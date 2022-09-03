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


      setLatitude((position.coords.latitude).toFixed(1));
      setLongitude((position.coords.longitude).toFixed(1));
      console.log("LOCALIZAÇÃO OBTIDA");


      // setLatitude(JSON.stringify(position.coords.latitude));
      // setLongitude(JSON.stringify(position.coords.longitude));
      // console.log("LOCALIZAÇÃO OBTIDA");


    })
  }

  /*
  ${LATITUDE}
  ${LONGITUDE}
  ${TEMPERATURE_UNIT}
  
  
  */



  const fetchApi = async () => {

    getLatitudeAndLongitude();

    let URL = `https://api.open-meteo.com/v1/forecast?latitude=${LATITUDE}&longitude=${LONGITUDE}&daily=weathercode,temperature_2m_max,temperature_2m_min,windspeed_10m_max&current_weather=true&temperature_unit=${TEMPERATURE_UNIT}&timezone=America%2FSao_Paulo`
    // URL provida pelo site, sem meus template literals:
    // let URL ='https://api.open-meteo.com/v1/forecast?latitude=-14.89&longitude=-40.85&daily=weathercode,temperature_2m_max,temperature_2m_min,windspeed_10m_max&current_weather=true&temperature_unit=celsius&timezone=America%2FSao_Paulo';
    const result = await axios(URL);

    setMeteorologicData(result.data);

    console.log(DAILY_DATA);
    console.log("Use Effect Realizado");
  }



  useEffect(() => { fetchApi() }, [LATITUDE, LONGITUDE, TEMPERATURE_UNIT])

  const log = () => {
    console.log(LATITUDE);
    console.log(typeof (LATITUDE));
  }


  return (
    <>

      <button onClick={log}> LOG </button>
      <button onClick={fetchApi}> Fetch Api </button>
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