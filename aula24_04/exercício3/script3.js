// Função chamada ao clicar no botão
function mudarCor() {
    document.body.style.backgroundColor="#4169E1";
}

// Atribui a função ao botão ao carregar a página
    document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("mudarFundo").addEventListener("click", mudarCor);
});