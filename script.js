let form = document.querySelector("form");
let input = document.querySelector("input");
let locationtemp = document.querySelector("#city-result");
let date = document.querySelector("#date");
let temp = document.querySelector("#city-tem");
let cond = document.querySelector("#weather-con");
let imgtemp = document.querySelector("#image");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    const val = input.value;
    getWeather(val);
});

async function getWeather(place) {
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=3b977c0058a34e56850163219241106&q=${place}`);
        const data = await response.json();
        console.log(data);
        let locationval = data.location.name;
        let currentDate = data.location.localtime;
        let currentTemp = data.current.temp_c;
        let currentcond = data.current.condition.text;
        let currentimg = data.current.condition.icon;
        updateDom(locationval, currentDate, currentTemp, currentcond, currentimg);
    } catch (err) {
        alert("No place found");
    }
}

function updateDom(locationval, currentDate, currentTemp, currentcond, currentimg) {
    locationtemp.innerText = locationval;
    date.innerText = currentDate;
    temp.innerText = `${currentTemp} °C`;
    cond.innerText = currentcond;
    imgtemp.src = "https:" + currentimg;
}
