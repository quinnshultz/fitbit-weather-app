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
      
      let hightoday = document.getElementById("hightoday");
      let lowtoday = document.getElementById("lowtoday");
      
      let forecast = document.getElementById("forecasttoday");
      
      let hightomorrow = document.getElementById("highday1");
      let lowtomorrow = document.getElementById("lowday1");
      let highday2 = document.getElementById("highday2");
      let lowday2 = document.getElementById("lowday2");
      let highday3 = document.getElementById("highday3");
      let lowday3 = document.getElementById("lowday3");
      
      hightoday.text = `${JSON.parse(weather)[0].temperature} F`;
      lowtoday.text = `${JSON.parse(weather)[1].temperature} F`;
      
      forecast.text = `${JSON.parse(weather)[0].shortForecast}`;
      
      hightomorrow.text = `${JSON.parse(weather)[2].temperature}`;
      lowtomorrow.text = `${JSON.parse(weather)[3].temperature}`;
      
      highday2.text = `${JSON.parse(weather)[4].temperature}`;
      lowday2.text = `${JSON.parse(weather)[5].temperature}`;
      
      highday3.text = `${JSON.parse(weather)[6].temperature}`;
      lowday3.text = `${JSON.parse(weather)[7].temperature}`;
    }

};
