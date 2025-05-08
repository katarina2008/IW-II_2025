function contarCaracteres() {
    var texto = document.getElementById('campoTexto').value; 
    var quantidade = texto.length; 
    document.getElementById('resultado').innerText = "Quantidade de caracteres: " + quantidade;
}

    document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("contar").addEventListener("click", contarCaracteres);
});