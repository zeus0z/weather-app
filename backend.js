const PORT = 8000;
const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();

app.use(cors());
/* método + caminho + callback com pedido e resposta

app.get('/', (req,res)=>{
    res.json('Olá Mundo')
} )

*/



app.get('/location', (req, res) => {

    const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
    const URL = `https://maps.googleapis.com/maps/api/geocode/json?latlng=-14.870118,-40.815821&result_type=administrative_area_level_2|administrative_area_level_1&key=${API_KEY}`;
    // const URL= 'https://maps.googleapis.com/maps/api/geocode/json?latlng='+LATITUDE+','+LONGITUDE+'&result_type=administrative_area_level_2|administrative_area_level_1&key'+{}';

    axios(URL)
        .then(response => {
            res.json(response.data.results[0].formatted_address)
        })
        .catch(error => console.log(error))

        console.log(req.query);


})

app.listen(PORT, () => console.log(`Server running on port  ${PORT}`));