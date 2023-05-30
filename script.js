const textarea = document.querySelector(".text-1");
const mensaje = document.querySelector(".mensaje");

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function btnEncriptar(){
    const textoEncriptado = encriptar(textarea.value);
    mensaje.value = textoEncriptado;
    textarea.value = "";
    mensaje.style.backgroundImage = "none";
}

function encriptar(stringEncriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }
    return stringEncriptado;
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textarea.value);
    mensaje.value = textoDesencriptado;
    textarea.value = "";
    mensaje.style.backgroundImage = "none";
}

function desencriptar(string){
    let matriz = [["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]];
    string = string.toLowerCase();

    for(let i=0; i < matriz.length; i++){
        if(string.includes(matriz[i][0])){
            string = string.replaceAll(matriz[i][0],matriz[i][1]);
        }
    }
    return string;
}

function copiarContenido() {
    mensaje.select(); // Seleccionar el contenido del <textarea>
    navigator.clipboard.writeText(mensaje.value); // Copiar el contenido al portapapeles
    
    //alert('Contenido copiado al portapapeles!');
    setTimeout(() => {
        mostrarPopup.remove();
    }, 1000);
  }

  function mostrarPopup() {
    // Crear un elemento <div> para el pop-up
    const popup = document.createElement('div');
    popup.className = 'popup';
    
    // Agregar contenido al pop-up
    popup.textContent = 'Mensaje Copiado';
    
    // Estilizar el pop-up
    popup.style.position = 'fixed';
    popup.style.top = '50%';
    popup.style.left = '50%';
    popup.style.transform = 'translate(-50%, -50%)';
    popup.style.padding = '20px';
    popup.style.backgroundColor = 'white';
    popup.style.border = '1px solid black';
    popup.style.zIndex = '9999';
    
    // Agregar el pop-up al documento
    document.body.appendChild(popup);
  }
  

