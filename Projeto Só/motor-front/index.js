const urListar = "http://localhost:3000/motorista";

const card = document.querySelector(".card")
const corpo = document.querySelector(".box");
var listar = [];

const carregar = () => { 
    const options = { method: "GET" }; 
   fetch(urListar, options)
    .then(res => res.json()) 
   .then(res => { 
       listar = res; 
       lista();     
       
    }) 
   .catch(err => console.error(err)); 
   }

   const lista = () => {

            listar.forEach(element => {

                let  lista = card.cloneNode(true)
                lista.classList.remove("model")

                
                lista.querySelector("#id").innerHTML += element.id;
                lista.querySelector("#name").innerHTML += element.nome;
                lista.querySelector("#cnh").innerHTML +=  element.CNH;
                lista.querySelector("#cpf").innerHTML +=  element.CPF;
        
     
                corpo.appendChild(lista)
            })
        
}
