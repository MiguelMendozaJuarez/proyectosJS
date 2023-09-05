
// JERCICIO 1:CONDICIONALES

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


    //EJERCICO 2: ARREGLOS
    //ejercico 1
    
    // let aleatorio = [];

    // for (let i = 0; i < 10; i++) {
    // let numero = Math.random();
    // aleatorio.push(numero);
    // }
    // console.log(aleatorio);

    
    //ejercicio 2

    // let palabras = prompt('Por favor ingrese las palabras que guste separadas por un coma(pato,taco,perro,etc.)');
    // let arreglo = palabras.split(',')

    // console.log(arreglo)
    
    // ejercicio 3
    // let numeros = [10,40,30,20,15,5].sort(function(a,b){return b-a});
    // console.log(numeros)
    // let mayor = Math.max(...numeros);
    // let menor = Math.min(...numeros);
    // console.log(mayor, 'es el numero mayor')
    // console.log(menor, 'es el numero menor')

    // Ejercicio 3 : Estructuras de control: WHILE
    
    //ejercici9 1

    // let numero = prompt('por favor igrese un numero')
    // let contador = 1;

    // while (contador <= numero) {
    //     if (contador % 5 === 0) {
    //       console.log(contador);
    //     }
    //     contador++;
    //   }

    //ejercico 2

    // let num = Number(prompt("Ingresa un número entre 1 y 50"))
    // let num2 = Number(prompt("Ingresa un número entre 1 y 50"))
    // function loteria(num,num2){
    //     let i = 1;
    //     while (i < 50) {
    //         if(i== num || i== num2){
    //             console.log(i + " Loteria")
    //         } else{
    //         console.log(i)
    //         }
    //         i++  
    //     }
    // }
    // console.log(loteria(num,num2))

    // ejercicio 3

//     let arreglo = [];
//     let i = 1;

//     while (i != 0) {
//     let entrada = Number(prompt('Ingresa un número (para terminar introduce 0)'));
//     let numero = entrada;

//     if (isNaN(numero)) {
//     alert('ERROR, INTRODUCE UN NUMERO');
//     continue;
//     } 

//     else if (numero == 0) {
//     console.log(arreglo);
//     break;
//     } 

//     else {
//     arreglo.push(numero);
//   }
// }

//ejercico 4
// let arreglo = [];
// let entrada;

// while (true) {
//   entrada = prompt('Ingresa una letra o palabra (para terminar deja el campo vacío)');
  
//   if (entrada === '') {
//     console.log(arreglo)
//     break;
//   } 

//   else if (!isNaN(entrada)) {
//     alert('ERROR, POR FAVOR INTRUDUSCA SOLO LETRAS O PALABRAS');
//     continue;
//   }
  
//   else {
//     arreglo.push(entrada);
//   }
// }

//ejercicio 5

// let diaSemana = prompt('Ingresa un día de la semana');

// while (true) {
//   if (diaSemana === 'domingo') {
//     alert('Ve a descansar');
//     break;
//   } else if (diaSemana === 'lunes') {
//     alert('Hoy es lunes');
//   } else if (diaSemana === 'martes') {
//     alert('Hoy es martes');
//   } else if (diaSemana === 'miercoles' || diaSemana === 'miércoles') {
//     alert('Hoy es miércoles');
//   } else if (diaSemana === 'jueves') {
//     alert('Hoy es jueves');
//   } else if (diaSemana === 'viernes') {
//     alert('Hoy es viernes');
//   } else if (diaSemana === 'sabado' || diaSemana === 'sábado') {
//     alert('Hoy es sábado');
//   } else {
//     alert('Introduce un día válido');
//   }

//   diaSemana = prompt('Ingresa otro día de la semana');
// }

// Ejercicio 4 : Estructuras de control: FOR

// ejercicio 1

// let contador = 0;

// for(let index = 1; index <= 50; index++){
//     if (index % 2 == 1){
//         contador = contador + 1 ;
//         console.log( index + ' es un numero impar')
//     }
// }

// ejercisio 2

// let pokemon = [
//     'Bulbasaur', 'Ivysaur', 'Venusaur', 'Charmander', 'Charmeleon', 'Charizard', 'Squirtle', 'Wartortle',
//     'Blastoise', 'Caterpie', 'Metapod', 'Butterfree', 'Weedle', 'Kakuna', 'Beedrill', 'Pidgey', 'Pidgeotto',
//     'Pidgeot', 'Rattata', 'Raticate', 'Spearow', 'Fearow', 'Ekans', 'Arbok', 'Pikachu', 'Raichu', 'Sandshrew',
//     'Sandslash', 'Nidoran♀', 'Nidorina', 'Nidoqueen', 'Nidoran♂', 'Nidorino', 'Nidoking', 'Clefairy', 'Clefable',
//     'Vulpix', 'Ninetales', 'Jigglypuff', 'Wigglytuff', 'Zubat', 'Golbat', 'Oddish', 'Gloom', 'Vileplume', 'Paras',
//     'Parasect', 'Venonat', 'Venomoth', 'Diglett', 'Dugtrio', 'Meowth', 'Persian', 'Psyduck', 'Golduck', 'Mankey',
//     'Primeape', 'Growlithe', 'Arcanine', 'Poliwag', 'Poliwhirl', 'Poliwrath', 'Abra', 'Kadabra', 'Alakazam',
//     'Machop', 'Machoke', 'Machamp', 'Bellsprout', 'Weepinbell', 'Victreebel', 'Tentacool', 'Tentacruel',
//     'Geodude', 'Graveler', 'Golem', 'Ponyta', 'Rapidash', 'Slowpoke', 'Slowbro', 'Magnemite', 'Magneton',
//     'Farfetch\'d', 'Doduo', 'Dodrio', 'Seel', 'Dewgong', 'Grimer', 'Muk', 'Shellder', 'Cloyster', 'Gastly',
//     'Haunter', 'Gengar', 'Onix', 'Drowzee', 'Hypno', 'Krabby', 'Kingler', 'Voltorb', 'Electrode', 'Exeggcute',
//     'Exeggutor', 'Cubone', 'Marowak', 'Hitmonlee', 'Hitmonchan', 'Lickitung', 'Koffing', 'Weezing', 'Rhyhorn',
//     'Rhydon', 'Chansey', 'Tangela', 'Kangaskhan', 'Horsea', 'Seadra', 'Goldeen', 'Seaking', 'Staryu', 'Starmie',
//     'Mr. Mime', 'Scyther', 'Jynx', 'Electabuzz', 'Magmar', 'Pinsir', 'Tauros', 'Magikarp', 'Gyarados', 'Lapras',
//     'Ditto', 'Eevee', 'Vaporeon', 'Jolteon', 'Flareon', 'Porygon', 'Omanyte', 'Omastar', 'Kabuto', 'Kabutops',
//     'Aerodactyl', 'Snorlax', 'Articuno', 'Zapdos', 'Moltres', 'Dratini', 'Dragonair', 'Dragonite', 'Mewtwo', 'Mew'
//   ]
  
//   let numeroUsuario = Number(prompt('Ingresa un número'));

//   for (let i = 1; i <= numeroUsuario; i++) {
//     if (i % 5 === 0) {
//       console.log(pokemon[i - 1]);
//     }
//   }

//ejersicio 3
  
// let arrgl = [4, 'dos', 8, 'tres', 5, 9, 1, 'cero'];

// for (let i = 0; i < arrgl.length; i++) {
//   if (typeof arrgl[i] === 'number') {
//     console.log(arrgl[i]);
//   }
// }


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const pregunta = prompt('cual es tu edad')

// if (pregunta >= 18){
//     alert('puedes manejar ')
// }
// else{
//     alert('no puedes manejar')
// }


// do{ 
//     let pregunta = prompt('da una calificacion del 1 al 10')

//     if ( pregunta === '0' || pregunta ==='1' || pregunta ==='2'){
//         alert('Muy deficiente')
//     }
//     else if (pregunta === '3' || pregunta === '4'){
//         alert('Deficiente')
//     }
//     else if (pregunta === '5' || pregunta === '6'){
//         alert('Suficiente')
//     }
//     else if (pregunta === '7' || pregunta === '8'){
//         alert('Bien')
//     }
//     else if (pregunta === '9' ){
//         alert('Notable')
//     }
//     else if (pregunta === '10' ){
//         alert('Sobresaliente')
//     }
//     else{
//         alert('Ingrese un numero')
//     }}
//     while(pregunta !== null && pregunta !== undefined)

// let array = []; 
// let pregunta;

// do {
//     pregunta = prompt('Ingresa palabras');
    
//     if (pregunta !== null && pregunta !== undefined) {
//         array.push(pregunta, '-');
//     }
// } while (pregunta !== null && pregunta !== undefined);

// console.log(array.join(' '));

// let pregunta;
// let string='';

// do {
//     pregunta = prompt('Ingresa palabras');
    
//     if (pregunta !== null && pregunta !== undefined) {
//         string += pregunta + '-';
//     }
// } while (pregunta !== null && pregunta !== undefined);

// console.log(string);

// let numero1 = prompt('escribe un numero')
// let numero2 = prompt('escribe otro numero')

// if (numero1 <0 || numero2 <0){
//     alert('por favor escrive un numero mayor a 0')
// }
// else if(isNaN(numero1) || isNaN(numero2)){
//     alert('por favor escrive un numero')
// }

// else if(numero1 > numero2){
//     document.write(numero1, ' es mayor y ', numero2, ' es  menor')
// }
// else if(numero2 > numero1){
//     document.write(numero1, ' es menor y ', numero2, ' es mayor ')
// }
// else if (numero1 === numero2){
//     document.write(numero1,' y ',numero2, ' son iguales ')
// }
// else{
//     document.write('introduce un valor valido')
// }




// ((a,b)=>{
//     return console.log(a +b);
// })(2,10)

// const suma = (a,b) => a + b;
// console.log(suma(9,9))

// const  suma = (a,b) => a+b;

// console.log(suma(90,10))

// ((a,b)=> console.log(a+b))(3,16);

// function Animal(nombre,color){
//     this.nombre = nombre;
//     this.color = color;
// }

// const conejo = new Animal('conejo','blanco');
// const leon = new Animal('leon','cafe');

// console.log(conejo);
// console.log(leon);
////////////////////////////////////////////////////////////////////////////////////////////////////
