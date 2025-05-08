// Função chamada ao clicar no botão
function mudarTexto() {
    texto.textContent = "Texto atualizado com JavaScript!";
}

// Atribui a função ao botão ao carregar a página
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("mudar").addEventListener("click", mudarTexto);
});