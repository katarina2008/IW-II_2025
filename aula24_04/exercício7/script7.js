// Função chamada ao clicar no botão
function mudarCor() {
    document.getElementById('paragrafo').style.color = "red";
}

// Atribui a função ao botão ao carregar a página
    document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("mudar").addEventListener("click", mudarCor);
});