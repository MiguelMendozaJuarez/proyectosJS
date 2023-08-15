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
