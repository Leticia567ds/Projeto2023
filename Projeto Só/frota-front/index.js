const userInfo = JSON.parse(localStorage.getItem("info"));
var card = document.querySelector(".card");
var corpo = document.querySelector(".box");
const btCadedit = document.querySelector("#cadastro");
var cada = document.querySelector(".cadastrar");

var listar = [];

function carregar() {
  console.log(carregar);
  const options = {
    method: "GET",
  };
  fetch("http://localhost:3000/frota", options)
    .then((res) => res.json())
    .then((res) => {
      listar = res;
      listFrota();
    })
    .catch((err) => console.error(err));
}

const listFrota = () => {
  console.log(listar);
  listar.forEach((element) => {
    let lista = document.querySelector(".card").cloneNode(true);
    lista.classList.remove("Jeck");

    lista.querySelector("#id").innerHTML += element.id;
    lista.querySelector("#placa").innerHTML += element.placa;

    lista.querySelector("#modelo").innerHTML += element.modelo;
    lista.querySelector("#marca").innerHTML += element.marca;

    corpo.appendChild(lista);
  });
};

function fecharModalCadastro() {
  cada.classList.add("Jec");
}


function abrirModalCadastro() {
  btCadedit.onclick = () => {
    
    cadastrar();
  };
  console.log(cada)
  cada.classList.remove("Jec");
}


function cadastrar() {


  let placa = document.querySelector("#placap").value;
  let modelo = document.querySelector("#modelop").value;
  let marca = document.querySelector("#marcap").value;

  let corpo = {
    "placa":placa,
    "modelo": modelo,
    "marca": marca
  };
  // const token = 

  let options = {
    "method": "POST",
    "headers": {
        "content-type": "application/json",
        "Bearer":JSON.parse(localStorage.getItem("info")).token
    },
    "body": JSON.stringify(corpo)
};

fetch("http://localhost:3000/frota", options)
.then((res) => {
  if (res.status == 200) window.location.reload();
  else console.log(res); // Exibe a resposta completa no console
  return res.json();
})
.catch((error) => {
  console.error("Fetch error:", error);
});
}
