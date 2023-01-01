import * as document from "document";
import { inbox } from "file-transfer";
import * as fs from "fs";

/*
 * Entry point for the watch app
 */
var weather;

// Event occurs when new file(s) are received
inbox.onnewfile = () => {
  console.log("New file!");
  let fileName;
  // If there is a file, move it from staging into the application folder
  fileName = inbox.nextFile();
  if (fileName) {
    console.log(`Received File: <${fileName}>`);
    weather = fs.readFileSync(fileName, "ascii");
    
    // Get Text Elements
    let hightoday = document.getElementById("hightoday");
    let lowtoday = document.getElementById("lowtoday");
      
    let forecast = document.getElementById("forecasttoday");
      
    let hightomorrow = document.getElementById("highday1");
    let lowtomorrow = document.getElementById("lowday1");
    let highday2 = document.getElementById("highday2");
    let lowday2 = document.getElementById("lowday2");
    let highday3 = document.getElementById("highday3");
    let lowday3 = document.getElementById("lowday3");
    
    // Get Image Elements
    let today = document.getElementById("today");
    let tomorrow = document.getElementById("tomorrow");
    let dayafter = document.getElementById("dayafter");
    let finalday = document.getElementById("finalday");
    
    try {
      hightoday.text = `${JSON.parse(weather)[0].temperature} F`;
      lowtoday.text = `${JSON.parse(weather)[1].temperature} F`;
      
      forecast.text = `${JSON.parse(weather)[0].shortForecast}`;
      
      hightomorrow.text = `${JSON.parse(weather)[2].temperature}`;
      lowtomorrow.text = `${JSON.parse(weather)[3].temperature}`;
      
      highday2.text = `${JSON.parse(weather)[4].temperature}`;
      lowday2.text = `${JSON.parse(weather)[5].temperature}`;
      
      highday3.text = `${JSON.parse(weather)[6].temperature}`;
      lowday3.text = `${JSON.parse(weather)[7].temperature}`;
    
      today.href = iconSelection(`${JSON.parse(weather)[0].shortForecast}`);
      tomorrow.href = iconSelection(`${JSON.parse(weather)[2].shortForecast}`);
      dayafter.href = iconSelection(`${JSON.parse(weather)[4].shortForecast}`);
      finalday.href = iconSelection(`${JSON.parse(weather)[6].shortForecast}`);
    } catch (error) {
      console.log(error);
      forecast.text = "Forecast unavailable.";
    }
  }

};

function iconSelection(forecastToday) {
  switch (forecastToday) {
    case "Areas Of Fog then Mostly Sunny":
      return "mostly_sunny.png";
      break;
    case "Areas Of Fog then Partly Sunny":
      return "mostly_sunny.png";
      break;
    case "Chance Rain Showers":
      return "chance_showers.png";
      break;
    case "Chance Snow Showers":
      return "chance_showers.png";
      break;
    case "Isolated Rain Showers":
      return "chance_showers.png";
      break;
    case "Mostly Clear":
      return "mostly_sunny.png";
      break;
    case "Mostly Cloudy":
      return "mostly_sunny.png";
      break;
    case "Mostly Sunny":
      return "mostly_sunny.png";
      break;
    case "Partly Sunny":
      return "mostly_sunny.png";
      break;
    case "Partly Sunny then Slight Chance Snow Showers":
      return "chance_showers.png";
      break;
    case "Scattered Rain Showers":
      return "chance_showers.png";
      break;
    case "Sunny":
      return "sunny.png";
      break;
    default:
      return "mostly_sunny.png";
  }
}