const urListar = "http://localhost:3000/motorista";
const UrPost = "http://localhost:3000/motorista/";
const btCadedit = document.querySelector("#cadastro");
var editar = document.querySelector(".editar");
var cada = document.querySelector(".cadastrar");

const userInfo = JSON.parse(localStorage.getItem("info"));
// // const Button = document.querySelector(".show-content")
var card = document.querySelector(".card");
const corpo = document.querySelector(".box");
var listar = [];


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
    if (userInfo.cargo == "Gerente") {
      lista.querySelector("#cnh").innerHTML += element.CNH;
      lista.querySelector("#cpf").innerHTML += element.CPF;
      lista.querySelector("button").addEventListener("click", () => {
        abrirModal(element.id, element.nome, element.CPF, element.CNH);
      });
      lista.querySelector("#del").addEventListener("click", () => {
        remover(element.id);
      });
    } else {
      lista.querySelector("#cnh").innerHTML += "**********";
      lista.querySelector("#cpf").innerHTML += "**********";
      lista.querySelector(".btn").disabled = true;
    }

    corpo.appendChild(lista);
  });
};

function remover(id, lista) {
  fetch("http://localhost:3000/motorista/" + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Bearer: JSON.parse(localStorage.getItem("info")).token,
    },
  })
    .then((resp) => {
      return resp.status(200);
    })
    .then((data) => {
      lista.remove();
    });
  window.location.reload();
}

function abrirModalCadastro() {
  btCadedit.onclick = () => {
    cadastrar();
  };
  document.querySelector("#nomec").value = "";
  document.querySelector("#cpfc").value = "";
  document.querySelector("#cnhc").value = "";
  cada.classList.remove("model");
}

function abrirModal(id, nome, cpf, cnh) {
  btCadedit.onclick = () => {
    alterar();
  };
  console.log(document.querySelector("#nomep"));
  document.querySelector("#idp").value = id;
  document.querySelector("#nomep").value = nome;
  document.querySelector("#cpfp").value = cpf;
  document.querySelector("#cnhp").value = cnh;
  editar.classList.remove("model");
}

function fecharModalCadastro() {
  editar.classList.add("model");
}

function alterar() {
  var id = document.querySelector("#idp").value;

  let corpo = {
    id: Number(id),
    nome: document.querySelector("#nomep").value,
    CNH: document.querySelector("#cnhp").value,
    CPF: document.querySelector("#cpfp").value,
  };
  const token = JSON.parse(localStorage.getItem("info")).token;

  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Bearer: token,
    },
    body: JSON.stringify(corpo),
  };

  console.log(corpo);

  fetch("http://localhost:3000/motorista/" + id, options)
    .then((res) => {
      if (res.status == 200) window.location.reload();
      else console.log(res); // Exibe a resposta completa no console
      return res.json();
    })
    .catch((error) => {
      console.error("Fetch error:", error);
    });
}

function cadastrar() {
  let corpo = {
    nome: document.querySelector("#nomec").value,
    CNH: document.querySelector("#cnhc").value,
    CPF: document.querySelector("#cpfc").value,
  };
  const token = JSON.parse(localStorage.getItem("info")).token;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Bearer: token,
    },
    body: JSON.stringify(corpo),
  };

  fetch("http://localhost:3000/motorista", options)
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      if (data.id != undefined) {
        window.location.reload();
      } else {
        alert("Erro ao cadastrar");
      }
    })
    .catch((err) => alert(err));
}
