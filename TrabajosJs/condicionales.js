// Ejercicio 1 : Condicionales


//ejercicio 1//
// let respuesta = prompt('eres bellisimo? responde si o no ');
//     if (respuesta == 'si'){
//         console.log('claro que si mi rey o reina o lo que seas.');
//     }
//     else if (respuesta =si= 'no'){
//         console.log('no digas eso mia amor, por favor.');
//     }
//     else
//         console.log('a ver, te especifique que respondieras si o no.');
    

// ejercicio 2 y 3//

// let num = prompt('Por favor, escribe un numero')

//     if(num % 2 == 0){
//         console.log('el numero ' + num + ' se puede dividir entre 2')
//         alert('tu numero se divide entre 2')
//         document.write('el numero ' + num + ' se puede dividir entre 2')
//     }
//     else{
//         console.log('el numero ' + num + ' no se puede dividir entre 2')
//         alert('tu numero NO se divide entre 2')
//         document.write('el numero ' + num + ' NO se puede dividir entre 2')
//     }

// ejercicio 4 //

// let num = prompt('Elige tu numero de boleto')

//     if(num == 1000 ){
//         console.log('GANASTE')
//         alert('GANASTE')
//         document.write('GANASTE')
//     }
//     else{
//         console.log('Lo sentimos, sigue participando')
//         alert('Lo sentimos, sigue participando')
//         document.write('Lo sentimos, sigue participando')
//     }

// ejercicio 5 //

// let num1 = Number(prompt('Elige un primer numero'));
// let num2 = Number(prompt('Elige un segundo numero'));

//     if(num1<num2){
//         console.log(num1)
//     }

//     else if(num2<num1){
//         console.log(num2)
//     }
//     else{

//     }
   
// ejercicio 6 //

// let num1 = Number(prompt('Elige un primer numero'));
// let num2 = Number(prompt('Elige un segundo numero'));
// let num3 = Number(prompt('Elige un tercer numero'));

//     if(num1>num2 && num1>num3 || num1 == num2 || num1 == num3 ){
//         console.log(num1);
//     }
//     else if(num2>num1 && num2>num3 || num2 == num1 || num2 == num3){
//         console.log(num2);
//     }
//     else if(num3>num1 && num3>num2 || num3 == num1 || num3 == num2){
//         console.log(num3);
//     }

// ejercicio 7 //

//    let dia = prompt('Elige un dia de la semana');


//     if(dia == 'lunes' ){
//         console.log(dia, ' es el inicio de semana. ');
//     }
//     else if(dia == 'viernes' ){
//         console.log(dia, ' hoy es viernes WUUUUUUUUU! ');
//     }
//     else if(dia == 'sabado' || dia == 'domingo'){
//         console.log(dia, 'es fin de semana, evita excesos.');
//     }
//     else if(dia == 'martes' || dia == 'miercoles' || dia == 'jueves'){
//         console.log(dia, 'es un dia aburrido :(');
//     }
//     else{
//         console.log(' DIAS DE LA SEMANA, TE DIJE DIAS DE LA SEMANA. ');
//     }

// ejercicio 8 //

//    let calificacion = Number(prompt('Por favor danos una calificacion del 1 al 10'));


//     if(calificacion <= 5 ){
//         console.log(' Nos a reprobado ');
//     }
//     else if(calificacion == 6 || calificacion == 7 || calificacion == 8 ){
//         console.log('Tuvimos una calificacion regular');
//     }
//     else if(calificacion == 9 ){
//         console.log('Nos diste una buena calificacion');
//     }
//     else if(calificacion == 10 ){
//         console.log('Nos diste una calificacion exelente');
//     }
//     else{
//         alert('Por favor ingresa una calificaion del 1 al 10')
//     }

// ejercicio 9 //

//     document.write(' MENU:El helado siple cuesta 50 MXN.El topping de oreo cuesta 10 MXN. El topping de KitKat cuesta 15 MXN. El topping de brownie cuesta 20 MXN ' )

//    let orden1 = (prompt('Buenas tardes que helado desea: simple, con topping '));

//    if(orden1 == 'simple'){
//         console.log('Su orden es de un Helado simple, serian 50$, gracias por su compra');
//    }

//    else if(orden1 == 'con topping'){
//     let orden2 = (prompt('Que tipo de topping desea: oreo, kitkat, brownie '));

//     if(orden2 == 'oreo'){
//         console.log('Su orden es de un Helado con topping de oreo, serian 60$, gracias por su compra');
//     }
//     else if(orden2 == 'kitkat'){
//         console.log('Su orden es de un Helado con topping de kitkat, serian 65$, gracias por su compra');
//     }

//     else if(orden2 == 'brownie'){
//         console.log('Su orden es de un Helado con topping de brownie, serian 70$, gracias por su compra');
//     }
//     else{
//         alert('Por favor elija un topping valido');
//         console.log('Por favor elija un topping valido');
//     }

//    }

//    else{
//     alert('Por favor elija una orden valida');
//     console.log('Por favor elija una orden valida');
// }


// ejercicio 10 //

    // let costo = 0;
    // let descuento = 0;


    // let oferta = (prompt('Buenas tardes que opcion educativa desea tomar : curso: ($4999 MXN), carrera ($3999 MXN) master: ($2999 MXN)'));
    
    // if(oferta == 'curso'){
    //     costo = 4999;
    // }
    // else if(oferta == 'carera'){
    //     costo = 3999;
    // }
    // else if(oferta == 'master'){
    //     costo = 2999;
    // }
    // else{
    //     alert('por favor eliga una oferta: curso, carrera, master')
    // }

    // let beca = (prompt('Cuentas con alguna de las siguienetes becas: facebook, google, jesua(si no cuenta con alguna beca intrudusca "no cuento con beca")'));

    // if (beca == 'facebook'){
    //      descuento = 20;
    // }
    // else if(beca == 'google'){
    //      descuento = 15;
    // }
    // else if(beca == 'jesua'){
    //      descuento = 50;
    // }
    // else if(beca == 'no cuento con beca'){
    //     console.log('la oferta educativa que eligio fue ', oferta, ':por lo que ustede pagaria ', costo, '$ MXN, por un mes, ', subTotal*3,'$ MXN por 3 meses,', subTotal*6, '$ MXN por 6 meses.' )
    // }
    // else{
    //     alert('por favor indique si cuenta con una beca: facebook, google, jesua o no cuento con beca')
    // }
    
    // let subTotal = costo*(descuento/100);

    // console.log('la oferta educativa que eligio fue ', oferta, ':', ' y dispone de la beca ', beca, ', por lo que ustede pagaria ', subTotal, '$ MXN, por un mes, ', subTotal*3,'$ MXN por 3 meses, ', subTotal*6,'$ MXN por 6 meses')

   // ejercicio 11 //

    // let klmPrecio = 0;
    // let extra = 0;

    // let vehiculo = (prompt('que tipo de vehiculo utiliza: moto, coche, autobus.'));
    // let klm = Number(prompt('cuantos Kilometros recorrio(escriba solo el numero de klm)'));
    
    // if (vehiculo == 'moto'){
    //     klmPrecio = 0.2;
    // }
    // else if (vehiculo == 'coche'){
    //     klmPrecio = 0.1;
    // }
    // else if (vehiculo == 'autobus'){
    //     klmPrecio = 0.5;
    // }
    
    // if( klm >0 && klm <= 100 ){
    //     extra = 5;
    // }
    // else if( klm > 100 ){
    //     extra = 10;
    // }

    // console.log('total a pagar ', (klmPrecio*klm)+extra,'$ MXN.')
