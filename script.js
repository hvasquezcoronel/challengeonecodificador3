const inputTexto = document.querySelector(".input-texto")
const lectura = document.querySelector(".lectura")
const fametext = document.querySelector(".fametext")

// La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function btnEncriptar(){
    const textoEncriptado = encriptar(inputTexto.value)
    lectura.value = textoEncriptado;
    lectura.style.backgroundImage = "none"
    inputTexto.value = ""
    fametext.textContent = ""
}


function encriptar(stringEncriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for( let i=0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return stringEncriptado;
}
function btnDesencriptar(){
    const textoDesencriptado = Desencriptar(inputTexto.value)
    lectura.value = textoDesencriptado;
    lectura.style.backgroundImage = "none"
    inputTexto.value = ""
    fametext.textContent = ""
}


function Desencriptar(stringEncriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for( let i=0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][1])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }
    }
    return stringEncriptado;
}
function copiar(){
    lectura.select()
    navigator.clipboard.writeText(lectura.value)
    lectura.value = ""
    alert("Texto copiado con exito")
}