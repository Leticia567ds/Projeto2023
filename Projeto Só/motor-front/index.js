const urListar = "http://localhost:3000/motorista";

// // const Button = document.querySelector(".show-content")
var card = document.querySelector(".card");
const corpo = document.querySelector(".box");
var listar = [];

function showHiddenContent(e) {
  const input = document.querySelector("#" + e);

  console.log("senha " + input.value);

  console.log(e);

  const password = input.value;

  const hiddenContent = input.parentNode.querySelector(".hidden-content");

  if (password == "senha123") {
    hiddenContent.classList.remove("model");
  
  } else {
    alert("senha incorreta");
  }
}

const carregar = () => {
  var btn = document.querySelector("#btn");
  const options = { method: "GET" };
  fetch(urListar, options)
    .then((res) => res.json())
    .then((res) => {
      listar = res;
      lista();
    })
    .catch((err) => console.error(err));
};

const lista = () => {
  listar.forEach((element) => {
    let lista = card.cloneNode(true);
    lista.classList.remove("model");
    lista.querySelector("#id").innerHTML += element.id;
    lista.querySelector("#name").innerHTML += element.nome;
    lista.querySelector("#cnh").innerHTML += element.CNH;
    lista.querySelector("#cpf").innerHTML += element.CPF;
    lista.querySelector("#pass").setAttribute("id", "pass" + element.id);
    lista
      .querySelector("#btn")
      .setAttribute("onclick", `showHiddenContent('pass${element.id}')`);
    corpo.appendChild(lista);
  });
};
