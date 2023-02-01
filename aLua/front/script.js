const urLanches = 'http://localhost:5000/bomblanches/criaDor';
const urListar = 'http://localhost:5000/bomblanches/dor';
const urlVwCaminho = 'http://localhost:5000/bomblanches/vw_Caminho'

const pedidos = 'http://localhost:5000/bomblanches/update';
const motorista = document.querySelector(".motoboy")
const corpo = document.querySelector(".conteudo");
var listar = [];
const shortDate = new Date("2015-03-25");
const shortFunciona = new Date ("02/24/2022");

const min = 5;

function pedidosCaminho() {

    let options = { method: 'GET' }


    fetch(urlVwCaminho, options)
        .then(response => { return response.json() })
        .then(resp => {
            resp.forEach(element => {

                var date = new Date(element.data)
                var dataFormatadata = date.toLocaleDateString('pt-BR', { timeZone: 'UTC' });

                let lista = document.querySelector(".motoboy").cloneNode(true)
                lista.classList.remove("modelo")


                lista.querySelector('#id').innerHTML = element.id_pedido
                lista.querySelector('#nome').innerHTML = element.nome
                lista.querySelector('#endereco').innerHTML =  element.endereco
                lista.querySelector('#cliente').innerHTML =  element.cliente
                lista.querySelector('#produto').innerHTML =  element.produto
                lista.querySelector('#h_entregar').innerHTML = element.hora_entrega
                lista.querySelector('#h_fim').innerHTML = element.h_fim
                lista.querySelector('#data').innerHTML =  dataFormatadata
     
                corpo.appendChild(lista)
            })
        })
}

function atualizarPedido(infoPedidos) {

    infoPedidos = infoPedidos.parentNode.children

    var horaAtual = new Date().toLocaleTimeString();

    var data = new Date()

    var dia = String(data.getDate()).padStart(2, '0');
    var mes = String(data.getMonth() + 1).padStart(2, '0');
    var ano = data.getFullYear();

    var dataAtual = ano + '-' + mes + '-' + dia

    let dados = {
        id_pedido: infoPedidos[0].innerHTML.split(':')[1],
        cliente: infoPedidos[1].innerHTML.split(':')[1],
        produto: infoPedidos[3].innerHTML.split(':')[1],
        data: dataAtual,
        hora_pedido: infoPedidos[5].innerHTML.split(': ')[1],
        id_entregador: infoPedidos[6].innerHTML
    }

    let options = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados)
    };

    fetch(pedidos, options)
        .then(response => console.log(response.json()))
        .then(res => {
            alert('Pedido enviado')
            window.location.reload(true);
        })

}



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

const lista = () => {
    
    listar.forEach(e => {
     
           let glob = document.querySelector(".global").cloneNode(true);
           glob.classList.remove("modelo");
           
            glob.querySelector("#id_pedido").innerHTML += e.id_pedido;

           glob.querySelector("#cliente").innerHTML += e.cliente;
           glob.querySelector("#produto").innerHTML += e.produto;
           glob.querySelector("#h_pedi").innerHTML += e.hora_pedido;
        
           glob.querySelector("#data").innerHTML += e.data.toLocaleString('pt-BR', { timeZone: 'UTC' }).split('T')[0];

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

