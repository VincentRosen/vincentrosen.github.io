let averageTemp = parseInt(document.getElementById('average-temp').innerHTML);
let windSpeed = parseInt(document.getElementById('wind-speed').innerHTML);
let windChill = Math.floor(35.74 + (0.6215 * averageTemp) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * averageTemp * Math.pow(windSpeed, 0.16)));
document.getElementById('wind-chill').innerHTML = windChill;