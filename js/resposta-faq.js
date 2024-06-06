document.querySelectorAll('.container-faq div').forEach(div => {
    div.addEventListener('click', function() {
        let index = this.getAttribute('data-index');
        let resposta = document.getElementById('resp-' + index);
        let button = document.getElementById('b-' + index);
        if (resposta.style.display === 'none' || resposta.style.display === '') {
            resposta.style.display = 'block';
            button.innerHTML = '^';
        } else {
            resposta.style.display = 'none';
            button.innerHTML = 'v';
        }
    });
});