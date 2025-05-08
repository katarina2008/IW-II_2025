function mostrarNome() {
    var nome = document.getElementById("nome").value;
    alert("Bem vindo(a), " + nome);
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("mostrar").addEventListener("click", mostrarNome);
});

