const userInfo = JSON.parse(localStorage.getItem("info"));
var card = document.querySelector(".card");
var corpo = document.querySelector(".box");
// const btCadedit = document.querySelector("#cadastro");
// var cada = document.querySelector(".cadastrar");

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

    corpo.appendChild(lista);
  });
};

function formatarData(valor){
    if(valor == null) return "-";
    let data = new Date(valor);
    return new Intl.DateTimeFormat("pt-BR",{
        dateStyle: "short",
        timeStyle: "short"

    }).format(data).replace(",","");
}

function concluir(id){
  fetch("http://localhost:3000/registrar/" + id, {
    method:"PUT",
    headers:{
        "Content-Type":"application/json",
        "Bearer": JSON.parse(localStorage.getItem("info")).token
    }
  })
  .then(resp => {
     if(resp.status == 202){
      console.log("Deu cero!");
      window.location.reload();
     }else{
      console.log("Parece que deu erro");
     }
  })

}