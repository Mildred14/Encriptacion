const abecedario=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","u","v","w","x","y","z"];
let mensajeCifrado="";
let mensajeTraducido="";
function leerMensaje(){
    var mensaje=document.getElementById("mensaje").value.toLowerCase();
limpiar()
for(let i=0; i<mensaje.length;i++){
    for(let j=0; j<abecedario.length; j++){
       if (mensaje.charAt(i)==abecedario[j]){
        mensajeCifrado += abecedario[j+1];
       }
    }
    document.getElementById("mensajeConvertido").value=mensajeCifrado;

}

}
function traducirMensaje(){
    limpiar()
    var mensaje=document.getElementById("mensaje").value.toLowerCase();
for(let i=0; i<mensaje.length;i++){
    for(let j=0; j<abecedario.length; j++){
       if (mensaje.charAt(i)==abecedario[j]){
        mensajeTraducido += abecedario[j-1];
       }
    }
}
document.getElementById("mensajeConvertido").value=mensajeTraducido;

}
function limpiar(){
    document.getElementById("mensajeConvertido").value=" ";

}