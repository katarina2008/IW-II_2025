// Função chamada ao clicar no botão
function mostrarMensagem() {
    alert("JavaScript é divertido");
}

// Atribui a função ao botão ao carregar a página
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("mensagem").addEventListener("click", mostrarMensagem);
});
