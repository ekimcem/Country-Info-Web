let countries; // fetched data will be storage here

var cardContainer = document.querySelector("#card-container");
fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((data) => initialize(data))
  .catch((err) => console.log("Error: ", err.message));

function initialize(data) {
  countries = data;
  console.log(countries);
  let cards = "";
  countries.forEach((country) => {
    cards += `<div class="card m-3" style="width: 300px;">
    <img src="${country.flags.png}" class="card-img-top">
    <div class="card-body">
      <h5 class="card-title">${country.name.common}</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <ul class="list-group list-group-flush">
      <li class="list-group-item">Capital City: ${country.capital}</li>
      <li class="list-group-item">Population: ${country.population.toLocaleString()}</li>
      <li class="list-group-item">Currencies:</li>
    </ul>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>`;

    cardContainer.innerHTML = cards;
  });
}
