
var encriptar=document.querySelector("#encriptar");
var desencriptar=document.querySelector("#desencriptar");
var input=document.querySelector("#text-input");
var imgOutput=document.querySelector("#img-output");
var output=document.querySelector("#text-output");
var copiar=document.querySelector("#copiar");



function ocultarImagen(){
    if(output.classList.contains("no-visible")){
        output.classList.remove("no-visible");
        imgOutput.classList.add("no-visible");
    }
}

function desencriptacion(){
    const texto=input.value;
    if(contieneMayuscula(texto)){
        alert("El texto contiene mayusculas");
    }else if(contieneCaracterEspecial(texto)){
        alert("El texto contiene caracteres especiales");
    }else{
        ocultarImagen();
        let resultante="";

        for(let i=0;i<texto.length;i++){
            resultante+=texto[i];
            if(texto[i]=="a"){
                i++;
            }else if(texto[i]=="e"){
                i+=4;
            }else if(texto[i]=="i"){
                i+=3;
            }else if(texto[i]=="o"){
                i+=3;
            }else if(texto[i]=="u"){
                i+=3;
            }
        }
        output.value=resultante;
        
    }
}

function encriptacion(){
    ocultarImagen();
    let texto=input.value;
    let resultante="";
    if(contieneMayuscula(texto)){
        alert("El texto contiene mayusculas");
    }else if(contieneCaracterEspecial(texto)){
        alert("El texto contiene caracteres especiales");
    }else{
        for(let i=0;i<texto.length;i++){
            resultante+=encriptarCaracter(texto[i]);
        }
        output.value=resultante;
    }
}

function contieneMayuscula(texto){
    const regexMayus=new RegExp("[A-Z]");
    if(regexMayus.test(texto)){
        return true;
    }
    return false;
}

function contieneCaracterEspecial(texto){
    const regexCaracterEsp=/[^a-z ]/;
    if(regexCaracterEsp.test(texto)){
        return true;
    }
    return false;
}
function encriptarCaracter(caracter){
    if(caracter=="a"){
        caracter="ai";
    }else if(caracter=="e"){
        caracter="enter";
    }else if(caracter=="i"){
        caracter="imes";
    }else if(caracter=="o"){
        caracter="ober";
    }else if(caracter=="u"){
        caracter="ufat";
    }
    return caracter;
}

function copiarTexto() {
    output.select();
    navigator.clipboard.writeText(output.value);
  }

copiar.onclick = copiarTexto;
encriptar.onclick = encriptacion;
desencriptar.onclick = desencriptacion;