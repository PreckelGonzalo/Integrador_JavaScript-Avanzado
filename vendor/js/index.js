function HomePage() {
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

  const divOrdenar = document.createElement("div");
  divOrdenar.setAttribute("id", "ordenar");

  var htmlOrdenar = `
  <h4>Ordenar por</h4>
            <select name="orderBy" id="orderBy" class="form-control">
                <option value="nada">-</option>
                <option value="mayorPrecio">Mayor precio</option>
                <option value="menorPrecio">Menor precio</option>
            </select>
            `;

  divOrdenar.innerHTML = htmlOrdenar;
  document.body.appendChild(divOrdenar);

  /////////////FORM////////////////////////

  // Teniendo el mock como una variable OBJETO se te hace mucho mas facil la implementación de los datos
  // no necesitaras el fetch para poder extraer los datos dentro del codigo
  // para que puedas ordenar y filtrar segun sea el caso
  fetch("mock.json")
    .then((response) => response.json())
    .then((data) => {
      for (var i = 0; i < 10; i++) {
        //Esta parte del ciclo for seria bueno que lo colocaras dentro del Handlebars para que el pueda hacer las repeticiones
        const divCard = document.createElement("div");
        divCard.setAttribute("id", "card");
        var htmlCard = `
          <div class="card mb-3">
                <div class="row g-0">
                  <div class="col-md-4">
                  <article>
                  <img
                  src="${data[i].urlImagen}"
                  class="img-fluid rounded-start"
                  alt="..."
                />
                <img src="${data[i].urlImagenHover}"
                 class="img-fluid rounded-start"
                 alt="..."
                  </article>
                    
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
    // debes crear las funciones o eventos para poder ordenar y filtrar por el nombre
      var orderBy = document.getElementById("orderBy");
      var precioData = data.precio;
      function Comparacion(a, b) {
        return a - b;
      }
      orderBy.addEventListener("change", (e) => {
        if (e.target.value == "mayorPrecio") {
          data.forEach((data) => {
            alert("entre");
            precioData.sort(Comparacion);
            console.log(data.precio);
          });
        }
      });
      // Aquí puedes trabajar con los datos del archivo JSON
      console.log(data);
      console.log(data.precio);
    })
    .catch((error) => {
      // Manejo de errores en caso de que la carga falle
      console.error("Error al cargar el archivo JSON:", error);
    });

  /////////////CARD////////////////////////
}

HomePage();
