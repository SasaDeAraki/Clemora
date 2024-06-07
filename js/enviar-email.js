function validarEmail(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}    


let sucesso = document.getElementById('alert-success');
let falha = document.getElementById('alert-danger');


document.getElementById('botao').addEventListener('click', function() {
    let email = document.getElementById('email').value;
    if (validarEmail(email)) {
        sucesso.style.display = 'block'
        falha.style.display = 'none'
    } else {
        falha.style.display = 'block'
        sucesso.style.display = 'none'
    }
});

