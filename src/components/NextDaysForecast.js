import "../styles/WeatherCards.component.css"
import WeatherCodeParse from "./WeatherCodeParse"


const NextDaysForecast = ({day,weatherCode, min, max }) => {

    


    return (
        <>
            <div className="next_days_cards">

                <div className="date">
                    <span className="weekDay">DAY <br /> </span>
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
                    <img src="https://cdn-icons-png.flaticon.com/512/116/116251.png" alt="weather_icon" />
                    <span className="parsed_weather_code"><WeatherCodeParse code={weatherCode} /></span>
                </div>

            </div>
        </>
    )
}

export default NextDaysForecast