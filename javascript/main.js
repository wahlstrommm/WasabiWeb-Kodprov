// Hämta data från fruits.json och visa dem
fetch("./data/fruits.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Kunde inte hämta frukter.");
    }
    return response.json();
  })
  .then((fruits) => {
    //tar resultatet och skickar den i min displayfruit funktion
    displayFruits(fruits);
  })
  .catch((error) => {
    console.error("Fel vid hämtning:", error);
  });

// Funktion för att visa frukterna i DOM
function displayFruits(fruitList) {
  //Hämtar elementet via id.
  const container = document.getElementById("fruit-container");
  //skriver över för att försäkra mig om att den är helt tom.
  container.innerHTML = "";

  fruitList.forEach((fruit) => {
    //Skapar en div element för varje "frukt"
    const fruitCard = document.createElement("div");
    fruitCard.style.border = "1px solid #ccc";
    fruitCard.style.margin = "10px";
    fruitCard.style.padding = "10px";
    // fruitCard.style.width = "300px";
    //Tillsätter bild + alt samt namn och knapp och länk till den detajerade infovyn, med hjälp av id.
    fruitCard.innerHTML = `
      <img src="${fruit.image}" alt="${fruit.name}" width="100%">
      <h2>${fruit.name}</h2>
      <button><a href="./fruit.html?id=${fruit.id}">Läs mer om ${fruit.name}</a></button>
    `;

    container.appendChild(fruitCard);
  });
}
