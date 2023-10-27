const btnCadastrar = document.querySelector('#btn-cadastrar');

btnCadastrar.addEventListener('click', message);

function message() {
    const img = document.querySelector('#banner > img');
    img.classList.toggle('display-none');
}