const userInfo = JSON.parse(localStorage.getItem("info"));
var card = document.querySelector(".card");
var corpo = document.querySelector(".box");
const btCadedit = document.querySelector("#cadastro");
var cada = document.querySelector(".cadastrar");
var editar = document.querySelector(".editar");

var listar = [];

function carregar() {
  const options = {
    method: "GET",
  };
  fetch("http://localhost:3000/registrar", options)
    .then((res) => res.json())
    .then((res) => {
      listar = res;
      listarM();
    })
    .catch((err) => console.error(err));
}

const listarM = () => {
  listar.forEach((element) => {
    let lista = document.querySelector(".card").cloneNode(true);
    lista.classList.remove("Jeck");

    lista.querySelector("#id").innerHTML += element.id;

    lista.querySelector("#id_veic").innerHTML += element.id_veic;
    lista.querySelector("#dataI").innerHTML += formatarData(element.dataI);
    lista.querySelector("#dataF").innerHTML += formatarData(element.dataF);
    lista.querySelector("#valor").innerHTML += element.valor;
    lista.querySelector("#des").innerHTML += element.descricao;
    // lista.querySelector("#al").addEventListener("click", () => {
    //   abrirCadastro(
    //     element.id,
    //     element.id_veic,
    //     element.valor,
    //     element.descricao
    //   );
    // });
    if(userInfo.cargo == "Gerente"){
    lista.querySelector("#del").addEventListener("click", () => {
      remover(element.id);
    });

    lista.querySelector("#alter").addEventListener("click", () => {
      concluir(element.id);
    });
  }else{
    lista.querySelector(".box").disabled = true;
  }
    corpo.appendChild(lista);
  });
};

function remover(id, lista) {
  fetch("http://localhost:3000/registrar/" + id, {
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
  fetch("http://localhost:3000/registrar/" + id, {
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

function abrirModalCadastro() {
  btCadedit.onclick = () => {
    cadastrar();
  };
  console.log(cada);
  cada.classList.remove("Jeck");
}

function fecharModalCadastro() {
  cada.classList.add("Jeck");
}

function cadastrar() {
  let id_veic = document.querySelector("#id_veioc").value;
  let valor = document.querySelector("#valoroc").value;
  let des = document.querySelector("#desoc").value;

  let corpo = {
    id_veic: parseInt(id_veic),
    valor: parseFloat(valor),
    descricao: des,
  };
  // const token =

  let options = {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Bearer: JSON.parse(localStorage.getItem("info")).token,
    },
    body: JSON.stringify(corpo),
  };

  fetch("http://localhost:3000/registrar", options)
  .then((res) => {
    if (res.status == 200) window.location.reload();
    else console.log(res); // Exibe a resposta completa no console
    return res.json();
  });
}
function fecharCadastro() {
  editar.classList.add("Jeck");
}

function abrirCadastro(id, id_veic, valor, descricao) {
  btCadedit.onclick = () => {
    alterar();
  };
  console.log(document.querySelector("#valorp"));
  document.querySelector("#idp").value = id;
  document.querySelector("#idpp").value = id_veic;
  document.querySelector("#valorp").value = valor;
  document.querySelector("#desp").value = descricao;

  editar.classList.remove("Jeck");
}

function alterar() {
  var id = document.querySelector("#idp").value
  let id_veic = document.querySelector("#id_veiculo").value
  let valor = document.querySelector("#valorp").value
  let descricao = document.querySelector("#desp").value

  var corpo ={
   id: Number(id),
   id_veic:parseInt(id_veic),
   valor:parseFloat(valor),
   descricao: descricao
  }

  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Bearer: JSON.parse(localStorage.getItem("info")).token,
    },
    body: JSON.stringify(corpo),
  };

  console.log(corpo);

  fetch("http://localhost:3000/registrar/alterar/" + id, options)
    .then((res) => {
      if (res.status == 202) window.location.reload();
      else console.log(res); // Exibe a resposta completa no console
      return res.json();
    })
    .catch((error) => {
      console.error("Fetch error:", error);
    });
}