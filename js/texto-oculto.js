document.getElementById('mostrar-texto').addEventListener('click', function() {
    let botao = document.getElementById('mostrar-texto');
    let text = document.getElementById('texto-oculto');
    if (text.style.display === 'none') {
        text.style.display = 'block';
        botao.innerHTML = '^';
    } else {
        text.style.display = 'none';
        botao.innerHTML = 'v';
    }
});