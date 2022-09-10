import React from 'react'

const WeatherCodeParse = ({code}) => {



    switch (code) {
        case 0:
            return("Céus Limpos");
            break;

        case 1 :
            return('Predominantemente Limpo')
            break;
        case 2 :
            return('Parcialmente Nublado')
            break;
        case 3:
            return('Nublado')
            break;

        case 45:
            return('Névoa');
            break;
        case 48:
            return('depositing rime fog');
            break;

        case 51 || 53 || 55:
            return('Drizzle: Light, moderate, and dense intensity');
            break;

        case 56 || 57:
            return('Freezing Drizzle: Light and dense intensity');
            break;

        case 61 || 63 || 65:
            return('Rain: Slight, moderate and heavy intensity');
            break;

        case 66 || 67:
            return('Freezing Rain: Light and heavy intensity');
            break;

        case 71 || 73 || 75:
            return('Snow fall: Slight, moderate, and heavy intensity');
            break;

        case 77:
            return('Snow grains');
            break;

        case 80 || 81 || 82:
            return('Rain showers: Slight, moderate, and violent');
            break;

        case 85 || 86:
            return('Snow showers slight and heavy');
            break;

        case 95:
            return('Thunderstorm: Slight or moderate');
            break;

        case 96 || 99:
            return('Thunderstorm with slight and heavy hail');
            break;

        default:
            console.log('Código invalido');


    }

   

}

export default WeatherCodeParse