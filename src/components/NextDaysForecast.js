import { useState } from "react"
import "../styles/WeatherCards.component.css"
import WeatherCodeParse from "./WeatherCodeParse"
import WeatherCodeIcons from "./WeatherCodeIcons"


const NextDaysForecast = ({ weekDayNumber, day, weatherCode, min, max }) => {

    const WEEKDAYS = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
   


    
    return (
        <>
            <div className="next_days_cards">

                <div className="date">
                    <span className="weekDay">{WEEKDAYS[weekDayNumber]}  <br /> </span>
                    <span className="monthDay">{day}</span>
                </div>

                <div className="temps">
                    <div className="min_temp">
                        MIN <br /> {min}º
                    </div>
                    <div className="max_temp">
                        MAX <br /> {max}º
                    </div>
                </div>

                <div className="next_days_weather_condition">
                <WeatherCodeIcons code={weatherCode} iconSize={'2x'}/>
                    
                    <span className="parsed_weather_code"><WeatherCodeParse code={weatherCode} /></span> 
                </div>

            </div>
        </>
    )
}

export default NextDaysForecast