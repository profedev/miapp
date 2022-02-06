//Agregar funcionalidad al boton
let btnEdit:HTMLButtonElement = document.querySelector(".btn");
btnEdit.addEventListener("click",editarTexto);


//Funcion que muestar el textarea
function editarTexto():void {
    let parrafo:HTMLParagraphElement = document.getElementById("parrafo-1") as HTMLParagraphElement;
    let txtArea:HTMLTextAreaElement = document.getElementById("textarea-1") as HTMLTextAreaElement;
    txtArea.value = parrafo.innerText;
    txtArea.style.display = "block";
    txtArea.style.width ="100%";

}

// Copia el contenido del text area al parrafo
function copiarTexto(valor:string):void {
    let parrafo:HTMLParagraphElement = document.getElementById("parrafo-1") as HTMLParagraphElement;
    parrafo.innerText = valor;

}

// Oculta el textarea
function cerrarTextArea():void{
    let txtArea:HTMLTextAreaElement = document.getElementById("textarea-1") as HTMLTextAreaElement;
    txtArea.style.display = "none";
}

class usuario {
    nombre:string;
    edad:number;

    saludar(){
        console.log("Hola");
    }
}