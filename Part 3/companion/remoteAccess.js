const API_URL = "https://api.weather.gov"

async function getForecast(currentLocation) {
  const forecasturl = API_URL + "/points/" + currentLocation
  console.log(forecasturl)
  var response = await fetch(forecasturl)
  var forecast = (await response.json()).properties.forecast  // Parse the returned object
  
  console.log("Current location forecast: " + forecast)

  response = await fetch(forecast)
  forecast = (await response.json()).properties.periods // Parse the returned object
  
  console.log("14 Days: " + JSON.stringify(forecast))
  return forecast
}

export { getForecast }