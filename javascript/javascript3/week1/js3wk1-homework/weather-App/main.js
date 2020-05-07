
"Use strict"

const submitButton = document.querySelector("#submit-button")
const city = document.querySelector("#city-input")
const cityName = document.querySelector(".city-name-output")
const temperatureOutput = document.querySelector(".temperature-output")
const weatherIconOutput = document.querySelector(".weather-icon-output")
const windSpeedOutput = document.querySelector(".windspeed-output")
const howClowdyOutput = document.querySelector(".how-clowdy-output")
const sunriseOutput = document.querySelector(".sunrise-output")
const sunsetOutput = document.querySelector(".sunset-output")


//Function to convert Unix timestamp to be used on sunrise & sunset
function timeConverter(UNIX_timestamp){
    const a = new Date(UNIX_timestamp * 1000);
    const hour = a.getHours();
    const min = a.getMinutes();
    const sec = a.getSeconds();
    const time = `${hour.toString().padStart(2,0)}:${min.toString().padStart(2,0)}:${sec.toString().padStart(2,0)}`;
    return time;
  }

const fetchWeatherData = () => {
    if(!city.value) {
        cityName.innerHTML = 'please enter valid city name'
} else {

    const weatherUrl =  `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=602668c30966286a5134f9422539b171`
    fetch (weatherUrl)
    .then(response => response.json())
    .then(weatherData => {
        
        const chosenCity = weatherData.name
        const temperature = weatherData.main.temp
        const weatherIconType = weatherData.weather[0].icon
        const windSpeed = weatherData.wind.speed
        const howClowdy = weatherData.weather[0].description
        const sunrise = timeConverter(weatherData.sys.sunrise);
        const sunset = timeConverter(weatherData.sys.sunset)
        
        
        cityName.innerHTML = chosenCity
        temperatureOutput.innerHTML =`${Math.floor(temperature - 273.15)} &deg`
        weatherIconOutput.src =`http://openweathermap.org/img/w/${weatherIconType}.png`
        windSpeedOutput.innerHTML = `wind speed : ${windSpeed} m/s`
        howClowdyOutput.innerHTML = howClowdy
        sunriseOutput.innerHTML = `sunrise : ${sunrise}`
        sunsetOutput.innerHTML = `Sunset : ${sunset}`
    })
}
}
submitButton.addEventListener("click",fetchWeatherData)
