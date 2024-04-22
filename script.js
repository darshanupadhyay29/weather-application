const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "2b092066admshbab10c5ee0574f2p1d15cfjsne6a60d83986f",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = (latitude, longitude) => {
  fetch(
    `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?lat=${latitude}&lon=${longitude}`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
     // Update HTML elements with weather information
      cityName.innerHTML = "Weather in " + response.city_name; // Update city name
      temp.innerHTML = response.temp;
      wind_speed.innerHTML = response.wind_speed;
      humidity.innerHTML = response.humidity;
      cloud_pct.innerHTML = response.cloud_pct;
    })
    .catch((err) => console.error(err));
};

// Function to get current location
const getCurrentLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        getWeather(latitude, longitude);
      },
      (error) => {
        console.error(error);
      }
    );
  } else {
    console.error("Geolocation is not supported by this browser.");
  }
};

// Event listener for button click to get weather for current location
btn.addEventListener("click", (e) => {
  e.preventDefault();
  getCurrentLocation();
});

// Call getCurrentLocation() initially to get weather for current location
getCurrentLocation();
