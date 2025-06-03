// Hämta ID från URL-parametern
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const container = document.getElementById("fruit-container");

if (!id) {
  container.innerText = "Inget frukt-ID angivet.";
} else {
  fetch("../data/fruits.json")
    .then((res) => res.json())
    .then((fruits) => {
      const fruit = fruits.find((f) => f.id === Number(id));
      if (fruit) {
        //tillsätter tittlen med fruits name
        document.title = fruit.name;
        container.innerHTML = `
          <div class="product-card">
            <img src="${fruit.image}" alt="${fruit.name}">
            <div class="product-info">
              <h1>${fruit.name}</h1>
              <p>${fruit.description}</p>
              <a href="./index.html" class="back-link">← Tillbaka</a>
            </div>
          </div>
        `;
      } else {
        container.innerText = "Frukt hittades inte.";
      }
    })
    .catch(() => {
      container.innerText = "Fel vid hämtning av fruktdata.";
    });
}
