import "../styles/WeatherCards.component.css"
import WeatherCodeParse from "./WeatherCodeParse"


const NextDaysForecast = ({day,weatherCode,min,max}) => {
    return (
        <>
            <div className="current_day_card">

                <div className="date">
                    <span className="day_of_the_week">Dia: {day}</span>
                    <span className="day_of_the_month"></span>
                </div>

                <div className="min_max_temps">
                    <div className="min"> NOITE: {min}

                    </div>
                    <div className="max">
                      DIA:  {max}
                    </div>
                </div>

                <div className="weather_condition">
                    <img width="45px" src="https://cdn-icons-png.flaticon.com/512/116/116251.png" alt="" />
                    <span><WeatherCodeParse code={weatherCode}/></span>
                </div>

            </div>
        </>
    )
}

export default NextDaysForecast