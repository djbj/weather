// My api key is: a345d6bdc7e76fdc9f5de496e9687533
// Fetching weather information

const myFunction = () => {

  const fetchCity = "http://api.openweathermap.org/data/2.5/weather?q=" + document.getElementById("citySelection").value + "&units=metric&APPID=a345d6bdc7e76fdc9f5de496e9687533"

  fetch(fetchCity)
  .then(
    (response) => {
      return response.json()
    }).then((json) => {
      document.getElementById("cityHeading").innerHTML = json.name
      document.getElementById("celciusCondition").innerHTML = json.main.temp_max + "°, " + json.weather[0].description
      // Creating the url string for the weather image
      const urlWeatherImage = "url(" + "'" + "http://openweathermap.org/img/w/" + json.weather[0].icon + ".png" + "')"
      document.body.style.backgroundImage = urlWeatherImage
      const sunriseToday = new Date(json.sys.sunrise * 1000);
      const sunsetToday = new Date(json.sys.sunset * 1000)
      document.getElementById("sunrise").innerHTML = "Sunrise today at " + sunriseToday.toTimeString()
      document.getElementById("sunset").innerHTML = "Sunset today at " + sunsetToday.toLocaleTimeString()
    }
  )
}

window.onload = myFunction;
document.getElementById("citySelection").addEventListener("change", myFunction);
