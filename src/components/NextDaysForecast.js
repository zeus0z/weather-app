import "../styles/WeatherCards.component.css"


const NextDaysForecast = () => {
    return (
        <>
            <div className="current_day_card">

                <div className="date">
                    <span className="day_of_the_week">SEG</span>
                    <span className="day_of_the_month">04/09</span>
                </div>

                <div className="min_max_temps">
                    <div className="min">
16º NOITE
                    </div>
                    <div className="max">
                        27º DIA
                    </div>
                </div>

                <div className="weather_condition">
                    <img width="85px" src="https://cdn-icons-png.flaticon.com/512/116/116251.png" alt="" />
                    <span>CHUVA</span>
                </div>

            </div>
        </>
    )
}

export default NextDaysForecast