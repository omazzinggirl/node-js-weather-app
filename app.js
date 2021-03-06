const process = require('process')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const location_name = process.argv[2]

if(location_name){
    geocode(location_name, (error, geocodeResponse) => {
        if (error){
            return console.log('Error :: ', error)
        }
        forecast(geocodeResponse.latitude, geocodeResponse.longitude, (error, forecastResponse) => {
            if (error){
                return console.log('Error :: ', error)
            }
            console.log('Geocode Response :: ', geocodeResponse)
            console.log('Forecast Response :: ', forecastResponse)
        })
    })
}
else {
    console.log('Please provide a location name!')
}











// const weatherURL = 'http://api.weatherstack.com/current?access_key=e9976ce3f33c5dba146394e164769b16&query=22.3,73.2'

// request({ url: weatherURL, json: true }, (error, response) => {
//     if(error) {
//         console.log('Unable to connect to weather service!')
//     }
//     else if (response.body.error){
//         console.log(response.body.error.info)
//     }
//     else{
//         console.log(response.body.current)
//     }
// })

// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/california.json?access_token=pk.eyJ1IjoiMTIzb20xMjMiLCJhIjoiY2t1Z3J6a3kxMTEwczJvcnRpMDJ2MGdicSJ9.6DXGXieUVJNRYCbaJf1Bpg&limit=1'

// request({ url: geocodeURL, json: true}, (error, response) => {
//     if(error) {
//         console.log('Unable to connect to geocode service!')
//     }
//     else if(response.body.features.length == 0){
//         console.log('Please enter a correct location...')
//     }
//     else{    
//         const longitude = response.body.features[0].center[0];
//         const latitude = response.body.features[0].center[1];

//         console.log(longitude, latitude)
//     }
// })



















