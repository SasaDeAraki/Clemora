document.getElementById('faq-1').addEventListener('click', function() {
    let resposta = document.getElementById('resp-1');
    let botao = document.getElementById('b-1');
    if (resposta.style.display === 'none') {
        resposta.style.display = 'block';
        botao.innerHTML = '^'
    } else {
        resposta.style.display = 'none';
        botao.innerHTML = 'v'
    }
})

document.getElementById('faq-2').addEventListener('click', function() {
    let resposta = document.getElementById('resp-2');
    let botao = document.getElementById('b-2');
    if (resposta.style.display === 'none') {
        resposta.style.display = 'block';
        botao.innerHTML = '^'
    } else {
        resposta.style.display = 'none';
        botao.innerHTML = 'v'
    }
})

document.getElementById('faq-3').addEventListener('click', function() {
    let resposta = document.getElementById('resp-3');
    let botao = document.getElementById('b-3');
    if (resposta.style.display === 'none') {
        resposta.style.display = 'block';
        botao.innerHTML = '^'
    } else {
        resposta.style.display = 'none';
        botao.innerHTML = 'v'
    }
})