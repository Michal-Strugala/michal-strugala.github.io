let sample = document.getElementById("paragraf");
let size = document.getElementById("rozmiar");
let font = document.getElementById("czcionka");

function podglad() {
    sample.style.fontSize = `${size.value}%`
    if (font.value != "prosty") {
        sample.style.fontStyle = "italic"
    } else {
        sample.style.fontStyle = "normal"
    }
}

document.getElementById("kolor1").addEventListener("click", () => {
    podglad()
    sample.style.color = "red"
});

document.getElementById("kolor2").addEventListener("click", () => {
    podglad()
    sample.style.color = "green"
});

document.getElementById("kolor3").addEventListener("click", () => {
    podglad()
    sample.style.color = "blue"
});