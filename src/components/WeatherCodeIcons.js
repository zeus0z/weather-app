
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//Icons Import


import { faCloud } from '@fortawesome/free-solid-svg-icons'
import { faCloudBolt } from '@fortawesome/free-solid-svg-icons'
import { faSun } from '@fortawesome/free-solid-svg-icons'
import { faSmog } from '@fortawesome/free-solid-svg-icons'
import { faCloudRain } from '@fortawesome/free-solid-svg-icons'
import { faCloudShowersHeavy } from '@fortawesome/free-solid-svg-icons'
import { faCloudSun } from '@fortawesome/free-solid-svg-icons'
import { faSnowflake } from '@fortawesome/free-solid-svg-icons'
import { faCloudShowersWater } from '@fortawesome/free-solid-svg-icons'


//Assign Icons to constants
const cloud = <FontAwesomeIcon icon={faCloud} size='3x' />;
const bolt = <FontAwesomeIcon icon={faCloudBolt} size='3x' />;
const sun = <FontAwesomeIcon icon={faSun} size='3x' />;
const smog = <FontAwesomeIcon icon={faSmog} size='3x' />;
const cloudRain = <FontAwesomeIcon icon={faCloudRain} size='3x' />;
const rain = <FontAwesomeIcon icon={faCloudShowersHeavy} size='3x' />;
const cloudSun = <FontAwesomeIcon icon={faCloudSun} size='3x' />;
const snow = <FontAwesomeIcon icon={faSnowflake} size='3x' />;
const showers = <FontAwesomeIcon icon={faCloudShowersWater} size='3x' />;



const WeatherCodeIcons = ({ code }) => {


    switch (code) {
        case 0:
            return sun;
            break;

        case 1:
        case 2:

            return cloudSun;
            break;
        case 3:
            return cloud;
            break;

        case 45:
        case 48:
            return smog;
            break;

        case 51:
        case 53:
        case 55:
        case 56:
        case 57:

            //aqui é garoa
            return cloudRain
            break;

        case 61:
        case 63:
        case 65:
        case 66:
        case 67:
            // aqui é chuva
            return rain;
            break;


        case 71:
        case 73:
        case 75:
        case 77:
            return snow;
            break;

        case 80:
        case 81:
        case 82:
            return showers;
            break;

        case 85:
        case 86:
            return snow;
            break;

        case 95:
        case 96:
        case 99:
            return bolt;
            break;

        default:
            console.log('Código invalido');
    }
}





export default WeatherCodeIcons