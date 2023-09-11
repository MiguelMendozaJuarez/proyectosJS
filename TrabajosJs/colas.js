// class Queue {
//     constructor() {
//       this.items = [];
//     }
  
//     enqueue(item) {
//       this.items.push(item);
//     }
  
//     dequeue() {
//       if (this.isEmpty()) {
//         return null;
//       }
//       return this.items.shift();
//     }
  
//     isEmpty() {
//       return this.items.length === 0;
//     }
  
//     size() {
//       return this.items.length;
//     }
  
//     peek() {
//       if (this.isEmpty()) {
//         return null;
//       }
//       return this.items[0];
//     }

//     divideOddPairs(colors) {
//         const odd = new Queue(); 
//         const pairs = new Queue(); 

//         for (let i = 0; i < colors.length; i++) {
//             if (i % 2 === 0) {
//                 pairs.enqueue(colors[i]);
//             } else {
//                 odd.enqueue(colors[i]);
//             }
//         }
//         return { odd, pairs };
//     }
// }

// const cola = new Queue(); 
// cola.enqueue("amarillo");
// cola.enqueue("rosa");
// cola.enqueue("rojo");
// cola.enqueue("verde");
// cola.enqueue("azul");
// cola.enqueue("negro");
// cola.enqueue("morado");
// cola.enqueue("blanco");

// const { odd, pairs } = cola.divideOddPairs(cola.items);

// console.log("impares:", odd.items);
// console.log("pares:", pairs.items);

///////////////////////////////////////////////////////////////////////////////////////////////////

// class Cola {
//   constructor() {
//     this.items = [];
//   }

//   encolar(item) {
//     this.items.push(item);
//   }

//   desencolar() {
//     if (this.isEmpty()) {
//       return null;
//     }
//     return this.items.shift();
//   }

//   isEmpty() {
//     return this.items.length === 0;
//   }

//   size() {
//     return this.items.length;
//   }
  
//   guard(ticketCheck) {
//     let falseTicket = [];
//     let finalLine = [];
//     for (let i = 0; i < ticketCheck.length; i++) {
//       if (ticketCheck[i].ticket === false) {
//         falseTicket.push(ticketCheck[i]);
//       } else {
//         finalLine.push(ticketCheck[i]);
//       }
//     }
//     console.log('Final Line:', finalLine);
//     console.log('False tickets:', falseTicket);
//   }
// }


// const colaInicial = new Cola();


// colaInicial.encolar({ user: 'User1', ticket: true });
// colaInicial.encolar({ user: 'User2', ticket: true });
// colaInicial.encolar({ user: 'User3', ticket: false });
// colaInicial.encolar({ user: 'User4', ticket: true });
// colaInicial.encolar({ user: 'User5', ticket: false });
// colaInicial.encolar({ user: 'User6', ticket: false });
// colaInicial.encolar({ user: 'User7', ticket: true });
// colaInicial.encolar({ user: 'User8', ticket: true });
// colaInicial.encolar({ user: 'User9', ticket: true });
// colaInicial.encolar({ user: 'User10', ticket: false });
// colaInicial.encolar({ user: 'User11', ticket: true });


// colaInicial.guard(colaInicial.items);