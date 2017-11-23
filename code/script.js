// My api key is: a345d6bdc7e76fdc9f5de496e9687533
// Fetching weather information
fetch("http://api.openweathermap.org/data/2.5/weather?q=Stockholm,Sweden&units=metric&APPID=a345d6bdc7e76fdc9f5de496e9687533")
.then(
  (response) => {
    console.log(response)
    return response.json()
  }).then((json) => {
    console.log(json)
    console.log(json.name)
    // const cityName = json.name
    document.getElementById("cityHeading").innerHTML = json.name
    document.getElementById("celciusCondition").innerHTML = json.main.temp_max + "°, " + json.weather[0].description
    console.log(json)
  }
)
