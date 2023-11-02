let bicycles = [
  {
    brand: "BH",
    model: "Sky"
  },
  {
    brand: "Orbea",
    model: "Earhtquake"
  },
  {
    brand: "Decathlon",
    model: "Something"
  },
  {
    brand: "BH",
    model: "Sky"
  },
  {
    brand: "Orbea",
    model: "Earhtquake"
  },
  {
    brand: "Decathlon",
    model: "Something"
  },
];

function showBicycles() {
  const BICYCLE_LIST = document.getElementById("bicycle-list");

  let allBicycles = "";

  for (let i = 0; i < bicycles.length; i++) {
    allBicycles = allBicycles + `<li>${bicycles[i].brand}</li>`;
  }

  BICYCLE_LIST.innerHTML = allBicycles;
}

function countFrom1To10() {
  for(let i = 0; i < 10; i++){
    console.log("Ahora i vale" + i);
  }
}

showBicycles();
countFrom1To10();