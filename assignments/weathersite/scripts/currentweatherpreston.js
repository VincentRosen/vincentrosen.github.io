let weatherRequest=new XMLHttpRequest();let apiURL='https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=afc042a32bf29469be6f58a80a1be245';weatherRequest.open('Get',apiURL,!0);weatherRequest.send();weatherRequest.onload=function(){let weatherData=JSON.parse(weatherRequest.responseText);document.getElementById('current-weather').innerHTML=weatherData.weather[0].main;document.getElementById('current-high-temp').innerHTML=Math.floor(weatherData.main.temp_max);document.getElementById('current-wind-speed').innerHTML=Math.floor(weatherData.wind.speed);let averageTemp=parseInt((weatherData.main.temp_max+weatherData.main.temp_min)/2);let windSpeed=parseInt(document.getElementById('current-wind-speed').innerHTML);let windChill=Math.floor(35.74+(0.6215*averageTemp)-(35.75*Math.pow(windSpeed,0.16))+(0.4275*averageTemp*Math.pow(windSpeed,0.16)));document.getElementById('current-wind-chill').innerHTML=windChill;document.getElementById('current-humidity').innerHTML=Math.floor(weatherData.main.humidity)}