const myDescription = document.querySelector('#description');
const myTemperature = document.querySelector('#temperature');
const myGraphic = document.querySelector('#graphic');

const myDescription2 = document.querySelector('#description2');
const myTemperature2 = document.querySelector('#temperature2');
const myGraphic2 = document.querySelector('#graphic2');
const forecastday1 = document.querySelector("#day1");

const myDescription3 = document.querySelector('#description3');
const myTemperature3 = document.querySelector('#temperature3');
const myGraphic3 = document.querySelector('#graphic3');
const forecastday2 = document.querySelector("#day2");

const myDescription4 = document.querySelector('#description4');
const myTemperature4 = document.querySelector('#temperature4');
const myGraphic4 = document.querySelector('#graphic4');
const forecastday3 = document.querySelector("#day3");

const myKey = "4ba46795abf8ff493d1bb539c3ab46c5";
const myLat = 43.9274137
const myLon = -112.206110

const myURL = `//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLon}&appid=${myKey}&units=imperial`
const myURL2 = `//api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLon}&appid=${myKey}&units=imperial`

async function apiFetch() {
    try {
        const response = await fetch(myURL);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
            //       console.log(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error)
    }
}

function displayResults(data) {
    myDescription.innerHTML = data.weather[0].description
    myTemperature.innerHTML = `${data.main.temp.toFixed(1)}&deg;F`
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    myGraphic.setAttribute('SRC', iconsrc)
    myGraphic.setAttribute("alt", data.weather[0].description)
}

function displayForecast(data) {
    myDescription2.innerHTML = data.list[7].weather[0].description
    myTemperature2.innerHTML = `${data.list[7].main.temp.toFixed(1)}&deg;F`;
    const iconsrc2 = `https://openweathermap.org/img/wn/${data.list[6].weather[0].icon}@2x.png`;
    myGraphic2.setAttribute("src", iconsrc2);
    myGraphic2.setAttribute("alt", data.list[7].weather[0].description);

    myDescription3.innerHTML = data.list[15].weather[0].description
    myTemperature3.innerHTML = `${data.list[15].main.temp.toFixed(1)}&deg;F`;
    const iconsrc3 = `https://openweathermap.org/img/wn/${data.list[14].weather[0].icon}@2x.png`;
    myGraphic3.setAttribute("src", iconsrc3);
    myGraphic3.setAttribute("alt", data.list[15].weather[0].description);

    myDescription4.innerHTML = data.list[23].weather[0].description;
    myTemperature4.innerHTML = `${data.list[23].main.temp.toFixed(1)}&deg;F`;
    const iconsrc4 = `https://openweathermap.org/img/wn/${data.list[22].weather[0].icon}@2x.png`;
    myGraphic4.setAttribute("src", iconsrc4);
    myGraphic4.setAttribute("alt", data.list[23].weather[0].description);

}

function forecastdates() {
    const weekday = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];

    const currentDate = new Date();
    const today = currentDate.getDay();

    day1.innerHTML = `${weekday[(today + 1) % 7]}`;
    day2.innerHTML = `${weekday[(today + 2) % 7]}`;
    day3.innerHTML = `${weekday[(today + 3) % 7]}`;
}

async function forecastapiFetch() {
    try {
        const response = await fetch(myURL2);
        if (response.ok) {
            const data = await response.json();
            console.log(data); //Testing only
            displayForecast(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();
forecastapiFetch();
forecastdates();