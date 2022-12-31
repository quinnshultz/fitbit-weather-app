import { geolocation } from "geolocation";
import { getForecast } from "/project/companion/remoteAccess.js"

/*
 * Entry point for the companion app
 */
console.log("Companion code started");

var current_location;

geolocation.getCurrentPosition(locationSuccess, locationError, {
  timeout: 60 * 1000
});

function locationSuccess(position) {
  current_location = position.coords.latitude + "," + position.coords.longitude
  console.log("Current location: " + current_location);
  getForecast(current_location);
}

function locationError(error) {
  console.log("Error: " + error.code, "Message: " + error.message);
}