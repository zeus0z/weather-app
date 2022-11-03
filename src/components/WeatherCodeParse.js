

const WeatherCodeParse = ({ code }) => {



    switch (code) {
        case 0:
            return ("Céus Limpos");
            break;

        case 1:
            return ('Predominantemente Limpo')
            break;
        case 2:
            return ('Parcialmente Nublado')
            break;
        case 3:
            return ('Nublado')
            break;

        case 45:
        case 48:
            return ('Névoa');
            break;

        case 51:
        case 53:
        case 55:
            return ('Garoa');
            break;

        case 56:
        case 57:
            return ('Garoa Gelada');
            break;


        case 61:
        case 63:
        case 65:
            return ('Chuva');
            break;

        case 66:
        case 67:
            return ('Chuva Gelada');
            break;

        case 71:
        case 73:
        case 75:
        case 77:
            return ('Neve');
            break;

        case 80:
        case 81:
        case 82:
            return ('Pancadas de Chuva');
            break;

        case 85:
        case 86:
            return ('Nevasca');
            break;

        case 95:
        case 96:
        case 99:
            return ('Trovoadas');
            break;

        default:
            console.log('Código invalido');
    }
}

export default WeatherCodeParse