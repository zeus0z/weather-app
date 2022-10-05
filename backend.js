const PORT = 8000;
const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();
const app = express();
app.use(cors());


app.get('/location', (req, res) => {

    const lat= req.query.lat;
    const lng= req.query.lng;
    

    const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
    const URL = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&result_type=administrative_area_level_2|administrative_area_level_1&key=${API_KEY}`;

    axios(URL)
        .then(response => {
            res.json(response.data.results[0].formatted_address)
            
        })
        .catch(error => console.log(error))

        console.log('Latitude :'+lat+' e Longitude: '+lng)
  
})



app.listen(PORT, () => console.log(`Server running on port  ${PORT}`));