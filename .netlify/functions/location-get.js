const axios = require('axios');
require('dotenv').config();

exports.handler = async (event, context) => {

    const params = JSON.parse(event.body);

    const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
    const URL = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${params.latitude},${params.longitude}&result_type=administrative_area_level_2|administrative_area_level_1&key=${API_KEY}`;



    try {
        const response = await axios.get(URL);
        return {
            statusCode: 200,
            body: JSON.stringify(response.data.results[0])
        }
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify(error)

        }
    }
}

