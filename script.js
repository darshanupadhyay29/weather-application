// const weather = {
//     apiKey: "1f78fecdf25f9bbc6b757b5d3345bf52",
// };

// getWeatherData();

// function getWeatherData() {
//     navigator.geolocation.getCurrentPosition((success) => {
//         console.log(success);
        
//         let { latitude, longitude } = success.coords;
        
//         fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?lat=${latitude}&lon=${longitude}&appid=${weather.apiKey}`)
//         .then(res => res.json())
//         .then(data => {
//             console.log(data)
//         })
//     });
// };


// displayWeather : function() {
//     const { name } = data;
//     const { temp,pressure } = data.main;
//     const { speed } = data.wind;

//     console.log(name,temp,pressure,speed);
// }


const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '2b092066admshbab10c5ee0574f2p1d15cfjsne6a60d83986f',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com',
    }
};
const getWeather = (city) => {
    cityName.innerHTML = city

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            temp.innerHTML = response.temp
            wind_speed.innerHTML = response.wind_speed
            humidity.innerHTML = response.humidity
            cloud_pct.innerHTML = response.cloud_pct
        })
        .catch(err => console.error(err));
}



btn.addEventListener("click", (e) => {
    e.preventDefault()
    getWeather(city.value)
})
getWeather("Delhi")

    