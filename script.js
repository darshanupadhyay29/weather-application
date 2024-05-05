
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "2b092066admshbab10c5ee0574f2p1d15cfjsne6a60d83986f",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

let apiEndPoint = "https://api.opencagedata.com/geocode/v1/json";
let apiKey = `693842e6ac394450b4d8655fff2c33fd`;

const getWeather = async (city) => {
  try {
    const response = await fetch(
      `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`,
      options
      );
      
       if (!response.ok) {
         // If response is not successful, throw an error
         throw new Error(`HTTP error! Status: ${response.status}`);
       }

      const weatherData = await response.json();
      
      console.log(weatherData);
      

    // Update HTML elements with weather information
    cityName.innerHTML = city;
    temp.innerHTML = weatherData.temp;
    wind_speed.innerHTML = weatherData.wind_speed;
    humidity.innerHTML = weatherData.humidity;
    cloud_pct.innerHTML = weatherData.cloud_pct;
  } catch (err) {
      console.error(err);
      if (err.message.includes("Status: 400")) {
        alert("City name is incorrect. Please enter a valid city name.");
      } else {
        // Handle other errors
        alert(
          "An error occurred while fetching weather data. Please try again later."
        );
      }
  }
};


const getWeather1 = async (latitude,longitude) => {
  try {
    const response = await fetch(
      `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?lat=${latitude}&lon=${longitude}`,
      options
    );
      const weatherData = await response.json();
      
      console.log(weatherData);
      let query = `${latitude},${longitude}`;
      let apiURL = `${apiEndPoint}?key=${apiKey}&q=${query}&pretty=1`;
      try {
          const res = await fetch(apiURL);
          const data = await res.json();
          var naam =data.results[0].components.city;
      } catch (error) {
          console.log(error);
      }
      

    // Update HTML elements with weather information
    cityName.innerHTML = naam;
    temp.innerHTML = weatherData.temp;
    wind_speed.innerHTML = weatherData.wind_speed;
    humidity.innerHTML = weatherData.humidity;
    cloud_pct.innerHTML = weatherData.cloud_pct;
  } catch (err) {
    console.error(err);
  }
};



//Function to get current location
const getCurrentLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        getWeather1(latitude, longitude);
      },
      (error) => {
          console.error(error);
          alert("Allow location access")
      }
    );
  } else {
    console.error("Geolocation is not supported by this browser.");
  }
};

// Event listener for button click to get weather for current location
btn.addEventListener("click", (e) => {
    e.preventDefault();
    const citiname = city.value;
  getWeather(citiname);
});



// Call getCurrentLocation() initially to get weather for current location
 getCurrentLocation();
