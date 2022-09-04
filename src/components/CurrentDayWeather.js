import React from 'react'
import "../styles/CurrentDayWeather.component.css"
import WeatherCodeParse from './WeatherCodeParse'

const CurrentDayWeather = ({temp,max,min,weatherCode}) => {

    
    return (
        <div className="current_day_card">

            <div className="weather_text_info">
                <div className="card_header">
                    <div className="cidade_estado">Vitória da Conquista, BA, {weatherCode}</div>
                    <div className="data_exata"> Domingo, 3 de Setembro de 2022</div>
                </div>

                <div className="card_body">

                    <div className="temps">
                        <div className="current_temp">{temp}</div>
                        <div className="max_min_temps">
                            <span className='max_temp'>Máxima: {max} </span><br />
                            <span className='min_temp'> Mínima: {min}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="weather_condition">
                <img width="85px" src="https://cdn-icons-png.flaticon.com/512/116/116251.png" alt="" />
                <span><WeatherCodeParse code={weatherCode}/></span>
            </div>

        </div>
    )
}

export default CurrentDayWeather