let requestURL='https://byui-cit230.github.io/weather/data/towndata.json';let request=new XMLHttpRequest();request.open('GET',requestURL);request.send();request.onload=function(){let sodaspringsData=JSON.parse(request.responseText);for(let i=0;i<sodaspringsData.towns.length;i++){if(sodaspringsData.towns[i].name=='Soda Springs'){if(sodaspringsData.towns[i].events.length>0){for(let j=0;j<sodaspringsData.towns[i].events.length;j++){document.getElementById('soda-springs-events').innerHTML+='* '+sodaspringsData.towns[i].events[j]+'<br />'}}
else{document.getElementById('soda-springs-events').innerHTML="Nothing going on right now in Soda Springs..."}
break}}}