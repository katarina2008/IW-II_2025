// Função chamada ao clicar no botão
function esconderTexto() {
    paragrafo.style.display = "none";
}

// Atribui a função ao botão ao carregar a página
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("esconder").addEventListener("click", esconderTexto);
});
