//  api key
let key = "788870ed9010428281e170749231104";
let data;

const inputBox = document.getElementById("inputBox");
const countryName = document.getElementById("countryName");
const stateName = document.getElementById("stateName");
const cityName = document.getElementById("cityName");
const Humidity = document.getElementById("Humidity");
const windSpeed = document.getElementById("windSpeed");
const temperature = document.getElementById("temperature");
const logoImage = document.getElementById("logoImage");
const weatherStatus = document.getElementById("weatherStatus");

// get data

const getData = async (e) => {
  e.preventDefault();

  if (!inputBox.value) {
    alert("please enter the city name");
    return;
  }

  const city = inputBox.value;

  const fetchData = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}`
  );

  const orgData = await fetchData.json();

  data = orgData;
  console.log(data);
};
