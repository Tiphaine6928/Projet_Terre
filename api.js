const apiKey = ;
const apiURL = "https://restcountries.com/v3.1/all?fields=name,flags";
;
const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");

async function checkData(country) {
    const response =  await fetch (apiUrl + country + `&appiid=${apiKey}`);
    let data = await response.json();
    document.querySelector(".info-popup").innerHTML = data.flag;
    //etc//
}

searchButton, addEventListener("click"), () => {
    checkData(searchBox.value);
}

checkData();                        


async function fetchCountryDataSearch(countryName) {
    const apiUrl = "https://restcountries.com/v3.1/name/";
    try {
        const response = await fetch(`${apiURL}${countryName}?fields=name,flags`);
        if (!response.ok) throw new Error('Country not found');
        let data = await response.json();


    }
}

<div class="weather-popup" style="position: absolute; top: 10px; right: 10px; background: white; padding: 10px; display: none;">
  <h3>Météo</h3>
  <p id="weather-data"></p>
</div>

async function fetchWeatherData(countryName) {
    const apiKey = '62fa436d5950ece867f81767b004ca78'; // Remplace par ta clé API OpenWeatherMap
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${countryName}&appid=${apiKey}&units=metric`;
    try {
      const response = await fetch(apiURL);
      if (!response.ok) throw new Error('Weather data not found');
      let data = await response.json();
      const weatherDescription = data.weather[0].description;
      const temperature = data.main.temp;
      return `Description: ${weatherDescription}, Temperature: ${temperature}°C`;
    } catch (error) {
      return `Error fetching weather data: ${error.message}`;
    }
  }