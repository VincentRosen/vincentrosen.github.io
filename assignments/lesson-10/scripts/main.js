    var firstTownInfo = document.querySelector('#firstTownInfo');
    var secondTownInfo = document.querySelector('#secondTownInfo');
    var thirdTownInfo = document.querySelector('#thirdTownInfo');
    var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
    var request = new XMLHttpRequest();
    
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    request.onload = function() {
        var localTowns = request.response;
        showInfo(localTowns);
    }

    function showInfo(jsonObj) {
        var towns = jsonObj['towns'];
      
        for (var i = 0; i < towns.length; i++) {
            var myDiv = document.createElement('div');
            var myTown = document.createElement('h1');
            myTown.className = 'townName';
            var myTownMotto = document.createElement('h3');
            myTownMotto.className = 'townMotto';
            var myTownFounded = document.createElement('h3');
            myTownFounded.className = 'townFounded';
            var myTownPopulation = document.createElement('h3');
            myTownPopulation.className = 'townPopulation';
            var myTownRainFall = document.createElement('h3');
            myTownRainFall.className = 'townRainFall';

            if (towns[i].name == 'Preston' || towns[i].name == 'Soda Springs' || towns[i].name == 'Fish Haven') {
                myTown.textContent = towns[i].name;
                myTownMotto.textContent = towns[i].motto;
                myTownFounded.textContent = 'Year Founded: ' + towns[i].yearFounded;
                myTownPopulation.textContent = 'Population: ' + towns[i].currentPopulation;
                myTownRainFall.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;

                myDiv.appendChild(myTown);
                myDiv.appendChild(myTownMotto);
                myDiv.appendChild(document.createElement("br"));
                myDiv.appendChild(myTownFounded);
                myDiv.appendChild(document.createElement("br"));
                myDiv.appendChild(myTownPopulation);
                myDiv.appendChild(document.createElement("br"));
                myDiv.appendChild(myTownRainFall);
                myDiv.appendChild(document.createElement("br"));

                if (towns[i].name == 'Preston') {
                    firstTownInfo.appendChild(myDiv);
                } else if (towns[i].name == 'Soda Springs') {
                    secondTownInfo.appendChild(myDiv);
                } else {
                    thirdTownInfo.appendChild(myDiv);
                }
            }
        }
    }