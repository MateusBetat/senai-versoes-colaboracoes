const email = document.getElementById('email')
const senha = document.getElementById('senha')
 
function login() {
    if(email.value == 'teste@exemplo.com' && senha.value == '12345') {
        window.alert('Login feito com sucesso')
    } else {
        window.alert('Email ou senha incorretos')
    }
}