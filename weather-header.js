let apiurl = `https://api.openweathermap.org/data/2.5/weather?q=tooele&appid={f8b44de7b63b899bea52a029982c37e1}`
fetch(apiurl)
.then((response) => response.json())
.then((jsObject) => {
console.log(jsObject);

document.getElementById("five-city").textContent = jsObject.name;

document.getElementById("current-humid").textContent = jsObject.main.humidity;
document.getElementById("current-windSpeed").textContent = jsObject.wind.speed;
const descrip = jsObject.weather[0].description;
document.getElementById("current-desc").textContent = descrip;

let T = (document.getElementById("current-temp").textContent = Math.floor(jsObject.main.temp));

let W = (document.getElementById("current-windSpeed").textContent = 
Math.ceil(jsObject.wind.speed));
const wc = 35.74 + 0.6215 * T - 35.75 * W ** 0.16 + 0.4275 * T * W ** 0.16;
document.getElementById("current-windChill").textContent = Math.floor(wc);

});