/* const loadLista = async () => {
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
); */

let combos;
let principal = document.getElementById("principal");
let codigo;

const loadLista = async () => {
  if (combos == null) {
    const response = await fetch("combos.json");
    combos = await response.json();

    localStorage.setItem("combos", JSON.stringify(combos));

    console.log("guarda en local storage en formato string");
  }

  combos = JSON.parse(localStorage.getItem("combos"));

  console.log("guarda en combos en formato objeto");

  createLista();
};

function createLista() {
  principal.innerHTML = "";
  principal.innerHTML = `<h2>Combos para desayunar</h2>
  <p>
    Arrancá la mañana con todo con nuestros desayunos. Podés pedir lo que
    quieras y te lo llevamos a tu domicilio. No hay nada mejor que la
    comodidad de tu casa.
  </p>
  <p>Hacé click en algunos de nuestros menú y empezá tu pedido...</p>

  <ul id="lista"></ul>`;

  let lista = document.getElementById("lista");

  let li = "";

  for (let i = 0; i < combos.length; i++) {
    li = `<li>${combos[i].nombre} ${combos[i].titulo} <i class="bx bx-plus-circle" id= "menu-${i}"></i> </li>`;

    lista.innerHTML += li;
  }
}

document.addEventListener("click", (event) => {
  if (event.target.tagName === "I") {
    console.log(event.target.id);
    codigo = event.target.id;
  }

  createCombo();

  if (event.target.tagName === "BUTTON") {
    loadLista();
  }
});

function createCombo() {
  principal.innerHTML = "";
  for (let i = 0; i < combos.length; i++) {
    if (codigo == `menu-${i}`) {
      principal.innerHTML = `
    <h2>${combos[i].nombre}</h2>
    <h3>${combos[i].titulo}</h3>
    <img src = "${combos[i].imagen}">
    <p>${combos[i].detalle}</p>
    <p>${combos[i].precio}</p>
    <button type = "button">Volver Atrás</h3>
  `;
    }
  }
}

loadLista();
