// Função chamada ao clicar no botão
function mudarConteudo() {
    document.getElementById('div').innerHTML = `
    <h1>Título</h1>
    <p>Conteúdo alterado!</p>
  `;
}

// Atribui a função ao botão ao carregar a página
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("mudar").addEventListener("click", mudarConteudo);
});
