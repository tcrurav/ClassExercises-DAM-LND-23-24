let bicycles = [
  {
    brand: "BH",
    model: "Sky"
  },
  {
    brand: "Orbea",
    model: "Earhtquake"
  }
];

function initialize() {
  const BICYCLE_FORM = document.getElementById("bicycle-form");
  BICYCLE_FORM.addEventListener("submit", addBicycle);

  showBicycles();
}

function addBicycle(event) {
  event.preventDefault();

  const BRAND = event.target.brand.value;
  const MODEL = event.target.model.value;

  if (BRAND == "") {
    let BRAND_ERROR = document.getElementById("brand-error");
    BRAND_ERROR.style.visibility = "visible";
  }

  bicycles.push({
    brand: BRAND,
    model: MODEL
  })

  showBicycles();
}

function showBicycles() {
  const BICYCLE_LIST = document.getElementById("bicycle-list");

  let allBicycles = "";

  for (let i = 0; i < bicycles.length; i++) {
    allBicycles = allBicycles + `<li>${bicycles[i].brand}<button onclick="deleteBicycle(${i})">DELETE</button></li>`;
  }

  BICYCLE_LIST.innerHTML = allBicycles;
}

function deleteBicycle(bicycleId) {
  bicycles.splice(bicycleId, 1);

  showBicycles();
}

initialize();