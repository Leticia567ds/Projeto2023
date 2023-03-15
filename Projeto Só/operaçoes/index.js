const userInfo = JSON.parse(localStorage.getItem("info"));
var card = document.querySelector(".card");
var corpo = document.querySelector(".box");
// const btCadedit = document.querySelector("#cadastro");
// var cada = document.querySelector(".cadastrar");
// var editar = document.querySelector(".editar");

var listar = [];

function carregar() {
  console.log(carregar);
  const options = {
    method: "GET",
  };
  fetch("http://localhost:3000/operacao", options)
    .then((res) => res.json())
    .then((res) => {
      listar = res;
      listarOP();
    })
    .catch((err) => console.error(err));
}

const listarOP = () => {
  console.log(listar);
  listar.forEach((element) => {
    let lista = document.querySelector(".card").cloneNode(true);
    lista.classList.remove("Jeck");

    lista.querySelector("#id").innerHTML += element.id;

    lista.querySelector("#id_motorista").innerHTML += element.id_motor;
    lista.querySelector("#id_veic").innerHTML += element.id_veic;
    lista.querySelector("#dataS").innerHTML += formatarData(element.dataS);
    lista.querySelector("#dataR").innerHTML += formatarData(element.dataR);
    lista.querySelector("#des").innerHTML += element.descricao;

    lista.querySelector("#cm").addEventListener("click", () => {
      concluir(element.id);
    });
    corpo.appendChild(lista);
  });
};


function formatarData(valor) {
  if (valor == null) return "-";
  let data = new Date(valor);
  return new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "short",
    timeStyle: "short",
  })
    .format(data)
    .replace(",", "");
}

function concluir(id) {
  fetch("http://localhost:3000/operacao/" + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Bearer: JSON.parse(localStorage.getItem("info")).token,
    },
  }).then((resp) => {
    if (resp.status == 202) {
      console.log("Deu cero!");
      window.location.reload();
    } else {
      console.log("Parece que deu erro");
    }
  });
}

function cadastrar() {
  let nome = document.querySelector("#nomec").value;
  let cnh = document.querySelector("#cnhc").value;
  let cpf = document.querySelector("#cpfc").value;

  let corpo = {
    "nome":nome,
    "CNH": cnh,
    "CPF": cpf
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

fetch("http://localhost:3000/motorista", options)
.then((res) => {
  if (res.status == 200) window.location.reload();
  else console.log(res); // Exibe a resposta completa no console
  return res.json();
})
.catch((error) => {
  console.error("Fetch error:", error);
});
}
