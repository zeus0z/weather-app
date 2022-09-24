import React from 'react'
import "../styles/WeatherCards.component.css"
import WeatherCodeIcons from './WeatherCodeIcons';
import WeatherCodeParse from './WeatherCodeParse'




const CurrentDayWeather = ({weekDayNumber, location, temp, max, min, weatherCode }) => {

    let date = new Date();
    let d = date.getDate();
    let months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    let m = months[date.getMonth()];
    let a = date.getFullYear();

    const WEEKDAYS = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado","Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta"];


    


    return (
        <div className="current_day_card">

            <div className="weather_text_info">
                <div className="card_header">
                    <div className="cidade_estado">{location}</div>
                    <div className="data_exata">{WEEKDAYS[weekDayNumber]}, {d} de {m} de {a}</div>
                </div>

                <div className="card_body">

                    <div className="temps">
                        <div className="current_temp">{temp}º</div>
                        <div className="max_min_temps">
                            <span className='max_temp'>Máxima: {max}º </span><br />
                            <span className='min_temp'> Mínima: {min}º</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="weather_condition">
            <WeatherCodeIcons code={weatherCode} iconSize={'5x'}/>
            
                <span><WeatherCodeParse code={weatherCode} /></span>
            </div>

        </div>
    )
}

export default CurrentDayWeather