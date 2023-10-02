const loadLista = async () => {
  let combos = localStorage.getItem("combos");

  if (combos == null) {
    const response = await fetch("combos.json");
    combos = await response.json();

    localStorage.setItem("combos", JSON.stringify(combos));
  }

  console.log("Guarda en Local Storage en formato String");

  let principal = document.getElementById("principal");

  principal.innerHTML = `<h2>Combos para desayunar</h2>
  <p>
    Arrancá la mañana con todo con nuestros desayunos. Podés pedir lo que
    quieras y te lo llevamos a tu domicilio. No hay nada mejor que la
    comodidad de tu casa.
  </p>
  <p>Hacé click en algunos de nuestros menú y empezá tu pedido...</p>

  <ul id="lista"></ul>`;

  let lista = document.getElementById("lista");

  const combosObj = JSON.parse(localStorage.getItem("combos"));

  let li = "";

  for (let i = 0; i < combosObj.length; i++) {
    li = `<li>${combosObj[i].nombre} ${
      combosObj[i].titulo
    } <i class="bx bx-plus-circle menu-${[i]}"></i> </li>`;
    lista.innerHTML += li;
  }
};

loadLista();

let principal = document.getElementById("principal");

let lista = document.getElementById("lista");

lista.addEventListener("click", function (event) {
  const combosObj = JSON.parse(localStorage.getItem("combos"));

  for (let i = 0; i < combosObj.length; i++) {
    if (event.target.classList.contains(`menu-${[i]}`)) {
      principal.innerHTML = `
        <h2>${combosObj[i].nombre}</h2>
        <h3>${combosObj[i].titulo}</h3>
        <img src = "${combosObj[i].imagen}">
        <p>${combosObj[i].detalle}</p>
        <p>${combosObj[i].precio}</p>
        <button type = "button" id = "volver">Volver Atrás</h3>
      `;
    }
  }

  const boton = document.querySelector("#volver");

  boton.addEventListener("click", function (event) {
    loadLista();
  });
});

lista.addEventListener("click", () =>
  console.log("Hiciste click para más detalle.")
);
