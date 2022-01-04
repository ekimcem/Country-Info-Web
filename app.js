let countries; // fetched data will be storage here

const cardContainer = document.querySelector("#card-container");

fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((data) => initialize(data))
  .catch((err) => console.log("Error: ", err.message));

function initialize(data) {
  countries = data;

  let cards = "";

  countries.forEach((country) => {
    console.log(country);

    cards += `<div class="card m-3" style="width: 250px;">
    <img src="${country.flags.png}" class="card-img-top">
    <div class="card-body">
      <h5 class="card-title">${country.name.common}</h5>
      <ul class="list-group list-group-flush">
      <li class="list-group-item">Capital City: ${country.capital}</li>
      <li class="list-group-item">Population: ${country.population.toLocaleString()}</li>
      <li class="list-group-item">Currencies: ${
        country.currencies ? Object.keys(country.currencies) : "-"
      }</li>
    </ul>
    </div>
  </div>`;

    cardContainer.innerHTML = cards;
  });
}
