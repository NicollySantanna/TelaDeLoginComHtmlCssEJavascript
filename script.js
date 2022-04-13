function validacao () {

let email = document.getElementById("email").value;
let senha = document.getElementById("senha").value;
let btn = document.getElementById('btn')


    if (email == "" || senha == "") {
        alert("Preencha os campos corretamente")
    } else {
        alert("Tudo certo!")
    }
}