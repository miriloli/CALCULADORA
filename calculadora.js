const pantalla=document.getElementsByClassName("pantalla")[0];
let operacionSeleccionada=undefined;
let primerNumero=undefined;
let segundoNumero=undefined;
let primerNumeroSeleccionado=false;

pantalla.innerHTML=0;

function sumar(){
    operacionSeleccionada=sumar(); 
    return primerNumero+segundoNumero;
}
function restar(){
    operacionSeleccionada=restar();
    return primerNumero-segundoNumero;

}
function multiplicar(){
    operacionSeleccionada=multiplicar();
    return primerNumero*segundoNumero;
    
}
function dividir(){
    operacionSeleccionada=dividir();
    return primerNumero/segundoNumero;
}
function total(){
    pantalla.innerHTML=operacionSeleccionada;
}
function limpiarPantalla(){
    pantalla.innerHTML=0;
    operacionSeleccionada=undefined;
}
function uno(){
    if (primerNumeroSeleccionado){
        segundoNumero=1;
    }else{
        primerNumero=1;
        primerNumeroSeleccionado=true;
    }
}
function dos(){
    if (primerNumeroSeleccionado){
        segundoNumero=2;
    }else{
        primerNumero=2;
        primerNumeroSeleccionado=true;
    }
}
function tres(){
    if (primerNumeroSeleccionado){
        segundoNumero=3;
    }else{
        primerNumero=3;
        primerNumeroSeleccionado=true;
    }
}
function cuatro(){
    if (primerNumeroSeleccionado){
        segundoNumero=4;
    }else{
        primerNumero=4;
        primerNumeroSeleccionado=true;
    }
}
function cinco(){
    if (primerNumeroSeleccionado){
        segundoNumero=5;
    }else{
        primerNumero=5;
        primerNumeroSeleccionado=true;
    }
}
function seis(){
    if (primerNumeroSeleccionado){
        segundoNumero=6;
    }else{
        primerNumero=6;
        primerNumeroSeleccionado=true;
    }
}
function siete(){
    if (primerNumeroSeleccionado){
        segundoNumero=7;
    }else{
        primerNumero=7;
        primerNumeroSeleccionado=true;
    }
}
function ocho(){
    if (primerNumeroSeleccionado){
        segundoNumero=8;
    }else{
        primerNumero=8;
        primerNumeroSeleccionado=true;
    }
}
function nueve(){
    if (primerNumeroSeleccionado){
        segundoNumero=9;
    }else{
        primerNumero=9;
        primerNumeroSeleccionado=true;
    }
}
function cero(){
    
    if (primerNumeroSeleccionado){
        segundoNumero=0;
    }else{
        primerNumero=0;
        primerNumeroSeleccionado=true;
    }
}



//No funciona nada jaja