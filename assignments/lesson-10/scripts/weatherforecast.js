let forecastRequest = new XMLHttpRequest();
let apiForecastURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=afc042a32bf29469be6f58a80a1be245';
forecastRequest.open('Get', apiForecastURL, true);
forecastRequest.send();

forecastRequest.onload = function() {
    let weatherData = JSON.parse(forecastRequest.responseText);
    var dayOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let dayCounter = 1;

    for(let i = 0; i < weatherData.list.length; i++) {
        let dateTime = weatherData.list[i].dt_txt;
        let dt = new Date(dateTime);

        if (dateTime.includes("18:00:00")) {
            if (dayCounter == 1) {
                document.getElementById('day-one').innerHTML = dayOfWeek[dt.getDay()];
                document.getElementById('day-one-weather').setAttribute('src', 'http://openweathermap.org/img/w/' + weatherData.list[i].weather[0].icon + '.png');
                document.getElementById('day-one-weather').setAttribute('alt', weatherData.list[i].weather[0].description);
                document.getElementById('day-one-temp').innerHTML = Math.floor(weatherData.list[i].main.temp) + ' &deg;F';
            }
            else if (dayCounter == 2) {
                document.getElementById('day-two').innerHTML = dayOfWeek[dt.getDay()];
                document.getElementById('day-two-weather').setAttribute('src', 'http://openweathermap.org/img/w/' + weatherData.list[i].weather[0].icon + '.png');
                document.getElementById('day-two-weather').setAttribute('alt', weatherData.list[i].weather[0].description);
                document.getElementById('day-two-temp').innerHTML = Math.floor(weatherData.list[i].main.temp) + ' &deg;F';
            }
            else if (dayCounter == 3) {
                document.getElementById('day-three').innerHTML = dayOfWeek[dt.getDay()];
                document.getElementById('day-three-weather').setAttribute('src', 'http://openweathermap.org/img/w/' + weatherData.list[i].weather[0].icon + '.png');
                document.getElementById('day-three-weather').setAttribute('alt', weatherData.list[i].weather[0].description);
                document.getElementById('day-three-temp').innerHTML = Math.floor(weatherData.list[i].main.temp) + ' &deg;F';
            }
            else if (dayCounter == 4) {
                document.getElementById('day-four').innerHTML = dayOfWeek[dt.getDay()];
                document.getElementById('day-four-weather').setAttribute('src', 'http://openweathermap.org/img/w/' + weatherData.list[i].weather[0].icon + '.png');
                document.getElementById('day-four-weather').setAttribute('alt', weatherData.list[i].weather[0].description);
                document.getElementById('day-four-temp').innerHTML = Math.floor(weatherData.list[i].main.temp) + ' &deg;F';
            }
            else if (dayCounter == 5) {
                document.getElementById('day-five').innerHTML = dayOfWeek[dt.getDay()];
                document.getElementById('day-five-weather').setAttribute('src', 'http://openweathermap.org/img/w/' + weatherData.list[i].weather[0].icon + '.png');
                document.getElementById('day-five-weather').setAttribute('alt', weatherData.list[i].weather[0].description);
                document.getElementById('day-five-temp').innerHTML = Math.floor(weatherData.list[i].main.temp) + ' &deg;F';
                break;
            }
            dayCounter++;
        }
    }
}