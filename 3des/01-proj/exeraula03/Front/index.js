const urlVwCaminho = "http://localhost:3000/produtos/create";
const main = document.querySelector(".form1");

function cadastrar() {
  let nome = document.querySelector("#produto")
  let valor = document.querySelector("#valor")
  let setor_id = document.querySelector("#setor_id")

  let corpo = {
    "nome": nome.value,
    "valor": Number(valor.value),
    "setor_id_vendedo": Number(setor_id.value)
  };
  console.log(corpo);

  const options = {
    method: "POST",

    headers: { "Content-Type": "application/json" },
  };

  options.body = JSON.stringify(corpo);

  if (corpo.nome.length != 0 && corpo.valor.length != 0 && corpo.setor_id_vendedo.length != 0) {

    fetch("http://localhost:3000/vendedores/create", options)

        .then(resp => resp.status)

        .then(resp => {

            if (resp == 200) {

                alert("Enviado com sucesso")

                window.location.reload();

            } else {

                alert("Erro no cadastramento:" + resp);

            }

        })

        .catch(err => alert(err));

} else {

    alert("Preencha os campos obrigatórios");

}

}

// function listar() {
//   let id_vendedor = document.querySelector("#id_vendedor");

//   let id_produto = document.querySelector("#id_produto");

//   let qtd = document.querySelector("#qtd");

//   let corpo = {
//     id_vendedor: Number(id_vendedor.value),
//     detalhes:[]
//   }

//   corpo.detalhes.push({
//     id_produto: Number(id_produto.value),
//     quantidade: Number(qtd.value)
//   })

//   console.log(corpo);

//   const options = {
//     method: "POST",

//     headers: { "Content-Type": "application/json" },
//   };

//   options.body = JSON.stringify(corpo);

  
//   fetch("http://localhost:3000/vendas/create", options)
//     .then((resp) => resp.status)

//     .then((resp) => {
//       if (resp == 200) {
//         alert("Enviado com sucesso");

//         window.location.reload();
//       } else {
//         alert("Erro no cadastramento:" + resp);
//       }
//     });
// }
