var d = new Date()
var dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var monthOfYear = ['January','February','March','April','May','June','July','August','September','October','November','December'];
var day = dayOfWeek[d.getDay()];
var date = d.getDate();
var month = monthOfYear[d.getMonth()];
var year = d.getFullYear();
document.getElementById('todaysDate').innerHTML = day + ', ' + date + ' ' + month + ' ' + year; 