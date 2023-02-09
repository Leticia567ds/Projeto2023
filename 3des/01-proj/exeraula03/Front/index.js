const urlVwCaminho = "http://localhost:3000/produtos/create"
const main = document.querySelector(".form1")


function pedidosCaminho() {

    let options = { method: "POST" }


    fetch("http://localhost:3000/produtos/create", options)
        .then(response => { return response.json() })
        .then(resp => {
            resp.forEach(element => {

                let lista = querySelector(".form1").cloneNode(true)
                lista.classList.remove("modelo")
                
                
               
            })
        })
}
