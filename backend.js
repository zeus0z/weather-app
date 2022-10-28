const PORT = 8000;
const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();
const app = express();
app.use(cors());


app.get('/teste', (req, res) => {
    res.send('<h1> Server funcionando normalmente </h1>')
})

app.get('/weather', (req, res) => {

    //let lat = req.body.lat;
    //let lng = req.body.lng;
    let url = 'https://api.open-meteo.com/v1/forecast';



    axios.get(url, {

        params: {
            latitude: '-14.87',
            longitude: '-40.81',
            daily: ['weathercode','temperature_2m_max','temperature_2m_min','windspeed_10m_max'],
            timezone: 'auto',
            current_weather:'true',
            temperature_unit:'celsius'

        }
    })
        .then((response) => {
            let data = response.data;
            res.send(data);

        })
        .catch(error => console.log(error))





})

app.get('/location', (req, res) => {

    const lat = req.query.lat;
    const lng = req.query.lng;


    const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
    const URL = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&result_type=administrative_area_level_2|administrative_area_level_1&key=${API_KEY}`;

    axios(URL)
        .then(response => {
            res.json(response.data)

        })
        .catch(error => console.log(error))



})



app.listen(PORT, () => console.log(`Server running on port  ${PORT}`));