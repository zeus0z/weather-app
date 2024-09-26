
/******************************************************/
/*                    WORK IN PROGRESS                */
/******************************************************/

import WeatherCodeIcons from "../components/WeatherCodeIcons"
import WeatherCodeParse from "../components/WeatherCodeParse"

const ClickedDay = ({ weekDayNumber, location, temp, max, min, weatherCode = 1 }) => {

  return (
    <main id='clicked_day'>

      <div className="local_data">
        <span className="cidade_estado">Vitória da Conquista, BA</span> <br />
        <span className="data_exata">Segundax de setembro de 200x</span>
      </div>

      <div className="weather_condition">
        <WeatherCodeIcons code={weatherCode} iconSize={'4x'} />
        <br/>
        <span><WeatherCodeParse code={weatherCode} /></span>
      </div>

      <div id="temp_and_weather_code">

        <div className="max_temp">Máxima de 10º</div>
        
        
        <div className="min_temp">Mínima de 5º</div>

      </div>

      <div id="specific_data">
        <span className="cidade_estado">Sensação Térmica: x</span><br />
        <span className="cidade_estado">Umidade do Ar: y</span><br />
        <span className="cidade_estado">Velocidade do Vento: z</span>

      </div>

    </main>
  )
}

export default ClickedDay