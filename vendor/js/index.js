const divTitle = document.createElement("div");
divTitle.setAttribute("id", "title");

var htmltTitle = `
<h1>LA TIENDITA DE TITI</h1>
`;

divTitle.innerHTML = htmltTitle;
document.body.appendChild(divTitle);
/////////////TITULO////////////////////////

const divForm = document.createElement("div");
divForm.setAttribute("id", "form");

var htmlForm = `
<form action="/buscar" method="get">
      <input type="text" name="q" placeholder="Buscar..." />
      <button type="submit">Buscar</button>
    </form>
`;

divForm.innerHTML = htmlForm;
document.body.appendChild(divForm);

/////////////FORM////////////////////////

/////////////CARD////////////////////////

fetch("mock.json")
  .then((response) => response.json())
  .then((data) => {
    for (var i = 0; i < 10; i++) {
      const divCard = document.createElement("div");
      divCard.setAttribute("id", "card");
      var htmlCard = `
          <div class="card mb-3">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img
                      src="${data[i].urlImagen}"
                      class="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">${data[i].nombre}</h5>
                      <p class="card-text">${data[i].precio}</p>
                    </div>
                  </div>
                </div>
              </div>
          `;

      divCard.innerHTML = htmlCard;
      document.body.appendChild(divCard);
    }
    // Aquí puedes trabajar con los datos del archivo JSON
    console.log(data);
  })
  .catch((error) => {
    // Manejo de errores en caso de que la carga falle
    console.error("Error al cargar el archivo JSON:", error);
  });
