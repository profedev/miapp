//Agregar funcionalidad al boton
var btnEdit = document.querySelector(".btn");
btnEdit.addEventListener("click", editarTexto);
//Funcion que muestar el textarea
function editarTexto() {
    var parrafo = document.getElementById("parrafo-1");
    var txtArea = document.getElementById("textarea-1");
    txtArea.value = parrafo.innerText;
    txtArea.style.display = "block";
    txtArea.style.width = "100%";
}
// Copia el contenido del text area al parrafo
function copiarTexto(valor) {
    var parrafo = document.getElementById("parrafo-1");
    parrafo.innerText = valor;
}
// Oculta el textarea
function cerrarTextArea() {
    var txtArea = document.getElementById("textarea-1");
    txtArea.style.display = "none";
}
var usuario = /** @class */ (function () {
    function usuario() {
    }
    usuario.prototype.saludar = function () {
        console.log("Hola");
    };
    return usuario;
}());
