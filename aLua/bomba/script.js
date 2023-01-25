var urLanches = `http://localhost:5000/bomblanches/criaDor`;
var urListar = `http://localhost:5000/bomblanches/dor`;
var corpo = document.querySelector(".all");

var listar = [];

const carregar = () => { 
 const options = { method: 'GET' }; 
fetch(urListar, options)
 .then(res => res.json()) 
.then(res => { 
    listar = res; 
    lista();
 }) 
.catch(err => console.error(err)); 
}

const lista = () =>{

    listar.forEach(e => {
           let glob = document.querySelector(".global").cloneNode(true);

           glob.classList.remove("modelo");

           glob.querySelector("#id_pedido").innerHTML += e.id_pedido;

           glob.querySelector("#cliente").innerHTML += e.cliente;

          corpo.appendChild(glob)
        })
   
    
}


function cadastrar() {

    let corpo = {

        "cliente": document.querySelector("#cliente").value,

        "endereco": document.querySelector("#endereco").value,

        "produto": document.querySelector("#produto").value,

        "id_entregador": document.querySelector("#id_entre").value

    }

    const options = {

        "method": 'POST',

        "headers": { "Content-Type": 'application/json' }

    };

    options.body = JSON.stringify(corpo);



    //Faz efetivamente a requisição ao back-end

    //composição alinhado



     if (corpo.cliente.length != 0 && corpo.endereco.length != 0 && corpo.produto.length != 0 && corpo.id_entregador.length != 0) {

        fetch(urLanches, options)

            .then(resp => resp.status)

            .then(resp => {

                if (resp == 201) {

                    alert('Enviado com sucesso')

                    window.location.reload();

                } else {

                    alert('Erro no cadastramento:' + resp);

                }

            })

            .catch(err => alert(err));

    } else {

        alert('Preencha os campos obrigatórios');

    }

}