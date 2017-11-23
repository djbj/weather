// My api key is: a345d6bdc7e76fdc9f5de496e9687533
// Fetching weather information
fetch("http://api.openweathermap.org/data/2.5/weather?q=Stockholm,Sweden&units=metric&APPID=a345d6bdc7e76fdc9f5de496e9687533")
.then(
  (response) => {
    //console.log(response)
    return response.json()
  }).then((json) => {
    console.log(json)
    console.log(json.name)
    // const cityName = json.name
    document.getElementById("cityHeading").innerHTML = json.name
    document.getElementById("celciusCondition").innerHTML = json.main.temp_max + "°, " + json.weather[0].description
    console.log(json)
    console.log(json.weather[0].icon)
    const urlWeatherImage = "url(" + "'" + "http://openweathermap.org/img/w/" + json.weather[0].icon + ".png" + "')"
    console.log(urlWeatherImage)
    // <img src="smiley.gif">
    //const imageGenerator = "<img src=\""+urlWeatherImage+"\">"
    //console.log(imageGenerator)
    // document.getElementById("weatherImage").innerHTML = imageGenerator
    //console.log(urlWeatherImage)
    //const tag = document.getElementsByTagName("h3")[0].style.background-image: url("urlWeatherImage");
    document.body.style.backgroundImage = urlWeatherImage

    const sunriseToday = new Date(json.sys.sunrise * 1000);
    const sunsetToday = new Date(json.sys.sunset * 1000)

    document.getElementById("sunrise").innerHTML = "Sunrise today at " + sunriseToday.toTimeString()
    document.getElementById("sunset").innerHTML = "Sunset today at " + sunsetToday.toLocaleTimeString()
    // document.body.style.backgroundImage = "url('img_tree.png')";
    // console.log(tag)
    // console.log("Sunrise in milliseconds": json.sys.sunrise * 1000))


    console.log(sunriseToday.toTimeString() + ":" + sunriseToday.getMinutes() + "hello")
    console.log(sunsetToday)
    // document.write(myDate.toGMTString()+"<br>"+myDate.toLocaleString());

    console.log(sunriseToday.toTimeString())

  }



)
