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
  console.log(grupoMusical.banda);

  /////////////FORM////////////////////////
  function Ordenamiento(array, key1) {
    return array.sort((a, b) => {
      if (Number(a[key1]) < Number(b[key1])) {
        return -1;
      }
      if (Number(a[key1]) > Number(b[key1])) {
        return 1;
      }
      return 0;
    });
  }
  grupoMusical.banda.forEach((banda) => {
    console.log(banda.nombre);
    const divCard = document.createElement("div");
    divCard.setAttribute("id", "card");
    var htmlCard = `
          <div class="card mb-3">
                <div class="row g-0">
                  <div class="col-md-4">
                  <article>
                  <img
                  src="${banda.urlImagen}"
                  class="img-fluid rounded-start"
                  alt="..."
                />
                <img src="${banda.urlImagenHover}"
                 class="img-fluid rounded-start"
                 alt="..."
                  </article>
                    
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">${banda.nombre}</h5>
                      <p class="card-text">${banda.precio}</p>
                    </div> 
                  </div>
                </div>
              </div>
          `;

    divCard.innerHTML = htmlCard;
    document.body.appendChild(divCard);
  });

  var orderBy = document.getElementById("orderBy");
  orderBy.addEventListener("change", (e) => {
    if (e.target.value == "mayorPrecio") {
      Ordenamiento(grupoMusical.banda, "precio").reverse();

      console.log(grupoMusical.banda);
    }
    if (e.target.value == "menorPrecio") {
      Ordenamiento(grupoMusical.banda, "precio");

      console.log(grupoMusical.banda);
    }
  });

  // Aquí puedes trabajar con los datos del archivo JSON

  /////////////CARD////////////////////////
}

HomePage();
