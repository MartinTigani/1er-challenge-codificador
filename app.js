
var encriptar=document.querySelector("#encriptar");
var desencriptar=document.querySelector("#desencriptar");
var input=document.querySelector("#container-input");
//var output=document.querySelector("#output");
var output=document.querySelector("#container-output");
/*
texto.addEventListener("change", (event)=>{
    console.log(event.target.value);
})*/

function desencriptacion(){
    let texto=input.value;
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
    console.log(resultante);
}

function encriptacion(){
    let texto=input.value;
    let resultante="";
    for(let i=0;i<texto.length;i++){
        resultante+=encriptarCaracter(texto[i]);
    }
    console.log(resultante);
    output.value=resultante;
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
encriptar.onclick = encriptacion;
desencriptar.onclick = desencriptacion;
////////////////////// como  hago para que aparezca el resultado si no es en un textarea???????????