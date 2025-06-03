//Hämtar id från params
const params = new URLSearchParams(window.location.search);
const id = params.get("id");
//om det av någon anledning inte finns något id
if (!id) {
  document.getElementById("fruit-container").innerText =
    "Inget frukt-ID angivet.";
} else {
  //fetchar data från fruit.json
  fetch("./data/fruits.json")
    .then((res) => res.json())
    .then((fruits) => {
      //jämför och matchar id:et så man vet att vi får den vi är ute efter
      const fruit = fruits.find((f) => f.id === Number(id));
      if (fruit) {
        //Ändrar doc titlen till den frukt man inne på
        document.title = fruit.name;
        document.getElementById("fruit-container").innerHTML = `
          <h1>${fruit.name}</h1>
          <img src="${fruit.image}" alt="${fruit.name}" />
          <p>${fruit.description}</p>
        `;
      } else {
        //fallback
        document.getElementById("fruit-container").innerText =
          "Frukt hittades inte.";
      }
    });
}
