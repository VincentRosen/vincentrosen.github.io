let requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.send();

request.onload = function() {
    let prestonData = JSON.parse(request.responseText);

    for(let i = 0; i < prestonData.towns.length; i++) {
        if (prestonData.towns[i].name == 'Preston') {
            if(prestonData.towns[i].events.length > 0) {
                for(let j = 0; j < prestonData.towns[i].events.length; j++) {
                    document.getElementById('preston-events').innerHTML += '* ' + prestonData.towns[i].events[j] + '<br />';
                }
            }
            else {
                document.getElementById('preston-events').innerHTML = "Nothing going on right now in Preston...";
            }
            break;
        }
    }
}