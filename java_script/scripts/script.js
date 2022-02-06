
//Agrego un comportamiento al boton
let btnEdit = document.querySelector(".btn");
btnEdit.addEventListener("click",editarTexto);


//Método que muestra la caja de texto
function editarTexto(){
    let parrafo = document.getElementById("parrafo-1");
    let txtArea = document.getElementById("textarea-1");
    txtArea.value = parrafo.innerText;
    txtArea.style = "display:block; width:100%";  
} 

//Copia el contenido del text área al párrafo
function copiarTexto(valor){
    let parrafo = document.getElementById("parrafo-1");
    parrafo.innerText = valor;   
}

//Oculta el textarea
function cerrarTextArea() {
    let txtArea = document.getElementById("textarea-1");
    txtArea.style.display = "none";
}