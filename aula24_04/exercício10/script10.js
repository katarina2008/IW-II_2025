function alternarParagrafo() {
    var p = document.getElementById('paragrafo');
    if (p.style.display === "none") {
        p.style.display = "block"; 
    } else {
        p.style.display = "none"; 
    }
}