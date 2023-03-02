const email = document.querySelector("#email");
const senha = document.querySelector("#senha");
const form = document.querySelector('form');
// const loginBtn = document.querySelector('#btn');



const token = 'my_secret_token';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const eml = email.value;
	const pass = senha.value;

	const info = {
		email: eml,
		senha: pass
	}; 

    fetch("http://localhost:3000/login",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(info)
    })

    .then(response =>{
        if (!response.ok) {
            alert('Cai Fora!');
			throw new Error('Erro ao realizar login!');
		}
		return response.json();
    })
    .then(data => {

                localStorage.setItem("info", JSON.stringify(data));
                alert('Login realizado com sucesso!');
                window.location.href = 'love.html';
              
    })
})
	


	



    
    

