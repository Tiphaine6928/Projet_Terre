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


Pour intégrer une boîte de recherche qui renvoie les informations sur un pays dans la pop-up, vous pouvez utiliser le même code que précédemment pour récupérer les données de l'API. Voici les étapes pour y parvenir :

HTML
Assurez-vous que votre HTML contient les éléments pour la recherche et la pop-up :

html
Copier le code
<div class="search">
    <input type="text" placeholder="Search for a country...">
    <button>Search</button>
</div>
<div class="info-popup"></div>
CSS
Supposons que votre CSS pour la boîte de recherche et la pop-up soit déjà configuré. Voici un exemple :

css
Copier le code
.search {
    margin: 20px;
}

.search input {
    padding: 10px;
    font-size: 16px;
}

.search button {
    padding: 10px;
    font-size: 16px;
    cursor: pointer;
}

.info-popup {
    display: none;
    position: absolute;
    top: 10%;
    left: 10%;
    padding: 20px;
    background-color: white;
    border: 1px solid #ccc;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    max-width: 300px;
}

.info-popup h2 {
    margin-top: 0;
}

.info-popup img {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 10px 0;
}
JavaScript
Voici comment adapter votre JavaScript pour inclure la fonctionnalité de recherche :

javascript
Copier le code
const apiURL = "https://restcountries.com/v3.1/name/";
const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const infoPopupEl = document.querySelector(".info-popup");

async function fetchCountryData(countryName) {
    try {
        const response = await fetch(`${apiURL}${countryName}?fields=name,flags`);
        if (!response.ok) throw new Error('Country not found');
        let data = await response.json();
        infoPopupEl.innerHTML = `
            <h2>${data[0].name.common}</h2>
            <img src="${data[0].flags.svg}" alt="${data[0].name.common} Flag">
        `;
        infoPopupEl.style.display = 'block';
    } catch (error) {
        infoPopupEl.innerHTML = `<p>${error.message}</p>`;
        infoPopupEl.style.display = 'block';
    }
}

searchButton.addEventListener("click", () => {
    fetchCountryData(searchBox.value);
});

// Fonction pour cacher la fenêtre d'info si on clique en dehors
document.addEventListener('click', (event) => {
    if (!infoPopupEl.contains(event.target) && !searchButton.contains(event.target) && !searchBox.contains(event.target)) {
        infoPopupEl.style.display = 'none';
    }
});

// Ajout de la recherche avec la touche "Entrée"
searchBox.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        fetchCountryData(searchBox.value);
    }
});

// Code existant...

async function fetchCountryData(countryName) {
    const apiURL = "https://restcountries.com/v3.1/name/";
    try {
        const response = await fetch(`${apiURL}${countryName}?fields=name,flags`);
        if (!response.ok) throw new Error('Country not found');
        let data = await response.json();
        infoPopupEl.innerHTML = `
            <h2>${data[0].name.common}</h2>
            <img src="${data[0].flags.svg}" alt="${data[0].name.common} Flag">
        `;
        infoPopupEl.style.display = 'block';
    } catch (error) {
        infoPopupEl.innerHTML = `<p>${error.message}</p>`;
        infoPopupEl.style.display = 'block';
    }
}

const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const infoPopupEl = document.querySelector(".info-popup");

searchButton.addEventListener("click", () => {
    fetchCountryData(searchBox.value);
});

document.addEventListener('click', (event) => {
    if (!infoPopupEl.contains(event.target) && !searchButton.contains(event.target) && !searchBox.contains(event.target)) {
        infoPopupEl.style.display = 'none';
    }
});

searchBox.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        fetchCountryData(searchBox.value);
    }
});


//  FUNCTION TEST AVANT CHAT GOD //

                                        
                                            
                                            // TEST SEARCH //
@import url('https://fonts.googleapis.com/css?family=Inconsolata:700');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  width: 100%;
  height: 100%;
}

body {
  background: #252525;
}

.container {
  position: absolute;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 300px;
  height: 100px;
  .search {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 80px;
    height: 80px;
    background: crimson;
    border-radius: 50%;
    transition: all 1s;
    z-index: 4;
    box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.4);
    // box-shadow: 0 0 25px 0 crimson;
    &:hover {
      cursor: pointer;
    }
    &::before {
      content: "";
      position: absolute;
      margin: auto;
      top: 22px;
      right: 0;
      bottom: 0;
      left: 22px;
      width: 12px;
      height: 2px;
      background: white;
      transform: rotate(45deg);
      transition: all .5s;
    }
    &::after {
      content: "";
      position: absolute;
      margin: auto;
      top: -5px;
      right: 0;
      bottom: 0;
      left: -5px;
      width: 25px;
      height: 25px;
      border-radius: 50%;
      border: 2px solid white;
      transition: all .5s;
    }
  }
  input {
    font-family: 'Inconsolata', monospace;
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 50px;
    outline: none;
    border: none;
    // border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    background: crimson;
    color: white;
    text-shadow: 0 0 10px crimson;
    padding: 0 80px 0 20px;
    border-radius: 30px;
    box-shadow: 0 0 25px 0 crimson,
                0 20px 25px 0 rgba(0, 0, 0, 0.2);
    // box-shadow: inset 0 0 25px 0 rgba(0, 0, 0, 0.5);
    transition: all 1s;
    opacity: 0;
    z-index: 5;
    font-weight: bolder;
    letter-spacing: 0.1em;
    &:hover {
      cursor: pointer;
    }
    &:focus {
      width: 300px;
      opacity: 1;
      cursor: text;
    }
    &:focus ~ .search {
      right: -250px;
      background: #151515;
      z-index: 6;
      &::before {
        top: 0;
        left: 0;
        width: 25px;
      }
      &::after {
        top: 0;
        left: 0;
        width: 25px;
        height: 2px;
        border: none;
        background: white;
        border-radius: 0%;
        transform: rotate(-45deg);
      }
    }
    &::placeholder {
      color: white;
      opacity: 0.5;
      font-weight: bolder;
    }
  }
}

<div class="container">
  <input type="text" placeholder="Search...">
  <div class="search"></div>
</div>

    // VOILA KOI //

const infoPopupEl = document.querySelector(".info-popup");
const searchBox = document.querySelector(".container input");
const searchButton = document.querySelector(".container .search");

searchButton.addEventListener("click", () => {
    fetchCountryData(searchBox.value);
});

searchBox.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        fetchCountryData(searchBox.value);
    }
});

document.addEventListener('click', async (event) => {
    if (event.target.classList.contains('country')) {
        const countryName = event.target.textContent;
        await fetchCountryData(countryName);
    }
});

async function fetchCountryData(countryName) {
    const apiURL = "https://restcountries.com/v3.1/name/";
    try {
        const response = await fetch(`${apiURL}${countryName}?fields=name,flags`);
        if (!response.ok) throw new Error('Country not found');
        let data = await response.json();
        infoPopupEl.innerHTML = `
            <h2>${data[0].name.common}</h2>
            <img src="${data[0].flags.svg}" alt="${data[0].name.common} Flag">
        `;
        infoPopupEl.style.display = 'block';
    } catch (error) {
        infoPopupEl.innerHTML = `<p>${error.message}</p>`;
        infoPopupEl.style.display = 'block';
    } 
}

<div class="info2-popup"></div>

const info2PopupEl = document.querySelector(".info2-popup");

async function fetchCountryData2(countryName) {
    const apiURL2 = "https://countryinfoapi.com/api/countries";
    try {
        const response = await fetch(`${apiURL2}${countryName}?fields=name`);
        if (!response.ok) throw new Error('Infos not found');
        let data = await response.json();
        info2PopupEl.innerHTML = `
            <h1>${data[0].name.tld}</h1>
            <h2>${data[0].currencies}</h2>
         `;
        info2PopupEl.style.display = 'block';
    } catch (error) {
        info2PopupEl.innerHTML = `<p>${error.message}</p>`;
        info2PopupEl.style.display = 'block';
    } 
}

placeholderInput.addEventListener("keypress", async (event) => {
    if (event.key === "Enter") {
        const countryName = placeholderInput.value.trim();
        if (countryName !== "") {
            await fetchCountryData2(countryName);
        }
    }
}); 



.info2-popup {
    display: none;
    position: absolute;
    top: 30%;
    left: 1%
    padding: 20px;
    background-color: #ecccd2;
    border: 1px solid #ccc;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    max-width: 300px;
}

.info2-popup h2 {
    margin-top: 0;
}