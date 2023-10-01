const pantalla = document.getElementsByClassName("pantalla")[0];
let operacionSeleccionada = "";
let primerNumero = "";
let segundoNumero = "";

pantalla.innerHTML = "";

function sumar() {

    operacionSeleccionada = "sumar";
    pantalla.innerHTML += "+";
    
}
function restar() {

    operacionSeleccionada = "restar";
    pantalla.innerHTML += "-";
    

}
function multiplicar() {

    operacionSeleccionada = "multiplicar";
    pantalla.innerHTML += "*";
    

}
function dividir() {

    operacionSeleccionada = "dividir";
    pantalla.innerHTML += "/";
    

}
function total() {
    let total = 0;


    /**
     * condicional ternario
     * 
     * si el string del primer numero
     * incluye "." significa que es decimal
     * entonces lo parseo al numero decimal
     * si no, entonces lo parseo a numero entero.
     * 
     */


    const numero1 = (primerNumero.includes('.')) ? parseFloat(primerNumero) : parseInt(primerNumero);



    /*if (primerNumero.includes('.')==true){
        const numero1 = parseFloat(primerNumero)
    }else{
        const numero1 = parseInt(primerNumero); 
    }*/





    /**
     * condicional ternario
     * 
     * si el string del segundo numero
     * incluye . significa que es decimal
     * entonces lo parseo al numero decimal
     * si no entonces lo parseo a numero entero
     * 
     */
    const numero2 = (segundoNumero.includes('.')) 
                ? parseFloat(segundoNumero)
                 : parseInt(segundoNumero);
                 
    console.log('numero1',numero1, 'numero2', numero2);
    console.log('operacion seleccionada:  ',operacionSeleccionada);
    

    switch (operacionSeleccionada) {

        case "sumar":
            total = numero1 + numero2;
            break;

        case "restar":
            total = numero1 - numero2;
            break;

        case "multiplicar":
            total = numero1 * numero2;
            break;

        case "dividir":
            total = numero1 / numero2;
            break;

        default:
            break;

    }


    console.log('total ',total);

    primerNumero = total.toString();
    
    pantalla.innerHTML = primerNumero;

}

function limpiarPantalla() {

    operacionSeleccionada = "";
    pantalla.innerHTML = "";
    primerNumero= "";
    segundoNumero="";
}

function seleccionarNumero(numero) {

    numero = numero.toString();
    if (operacionSeleccionada !== '') {
        segundoNumero += numero;
        console.log('segundo numero', segundoNumero);
        console.log('operacion seleccionada:  ',operacionSeleccionada);
    } else {
        primerNumero += numero;
        console.log('primer numero', primerNumero);
    }
    
    
    pantalla.innerHTML += numero;

}





