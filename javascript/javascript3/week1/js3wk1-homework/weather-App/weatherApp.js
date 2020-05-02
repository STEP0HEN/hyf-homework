
"Use strict"

const submitButton = document.querySelector("#submitButton")
const city = document.querySelector("#cityInput")
const cityName = document.querySelector(".cityNameOutput")
const temperatureOutput = document.querySelector(".temperatureOutput")
const weatherIconOutput = document.querySelector(".weatherIconOutput")
const windSpeedOutput = document.querySelector(".windSpeedOutput")
const howClowdyOutput = document.querySelector(".howClowdyOutput")
const sunriseOutput = document.querySelector(".sunriseOutput")
const sunsetOutput = document.querySelector(".sunsetOutput")


//Function to convert Unix timestamp to be used on sunrise & sunset
function timeConverter(UNIX_timestamp){
    const a = new Date(UNIX_timestamp * 1000);
    const hour = a.getHours();
    const min = a.getMinutes();
    const sec = a.getSeconds();
    const time = `${hour}:${min}:${sec}`;
    return time;
  }

const fetchWeatherData = () => {
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
    if(!city.value) {
        cityName.innerHTML = 'please enter valid city name'
}
}
submitButton.addEventListener("click",fetchWeatherData)
