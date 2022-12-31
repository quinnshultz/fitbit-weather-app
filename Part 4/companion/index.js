import { geolocation } from "geolocation";
import { getForecast } from "/project/companion/remoteAccess.js"
import { outbox } from "file-transfer"

/*
 * Entry point for the companion app
 */
console.log("Companion code started");

var current_location;
var forecast;

geolocation.getCurrentPosition(locationSuccess, locationError, {
  timeout: 60 * 1000
});

async function locationSuccess(position) {
  current_location = position.coords.latitude + "," + position.coords.longitude
  console.log("Current location: " + current_location);
  forecast = JSON.stringify(await getForecast(current_location));
}

function locationError(error) {
  console.log("Error: " + error.code, "Message: " + error.message);
}

function sendFile() {
  console.log("Sending file...");
  let data = new Uint8Array(forecast.length)
  for (let counter = 0; counter < data.length; counter++) {
    data[counter] = forecast.charCodeAt(counter)
  }
  outbox.enqueue("forecast.txt", data)
}

setTimeout(sendFile, 2000)
