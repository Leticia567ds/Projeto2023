var oi = document.querySelector(".oi");

function load(){

    fetch("http://localhost:3000/setores")
    .then(response => { return response.json() })
    .then(resp => {
        resp.forEach(element => {

          

            let lista =document.querySelector(".cadastrado").cloneNode(true)
            lista.classList.remove("modelo")

            
            lista.querySelector("#str").innerHTML = element.nome;
            lista.querySelector("#cmss").innerHTML = element.comissao;         
            oi.appendChild(lista)
        })
    })

}
function cadastrar() {
     let nome = document.querySelector("#setor")
     let comissao = document.querySelector("#comissao")

    let corpo = {

    "nome":setor.value,
    "comissao":Number(comissao.value) 

    }
  console.log(corpo)

    const options = {

        "method": "POST",

        "headers": { "Content-Type": "application/json" }

    };

    options.body = JSON.stringify(corpo);



    //Faz efetivamente a requisição ao back-end

    //composição alinhado


     if (corpo.nome.length != 0 && corpo.comissao.length != 0) {

        fetch("http://localhost:3000/setores/create", options)

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

