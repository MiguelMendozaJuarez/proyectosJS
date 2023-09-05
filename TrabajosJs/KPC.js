// Ejercicio 1 : Pilas //

//////////////////////////////////////////////////////////////////////////

// function selection(stack,number){
//     let newArray = []
//     for(let index =0; index < number; index++){
//         newArray.push(stack[index])
//     }
//     return newArray;
// }

// let array = ['Manzana','Cebolla','Apio','Naranja','Papaya','Sandía','Melón']

// let selectedElements = selection(array, 4);
// console.log(selectedElements);

/////con class//////

// class Stack {
//     constructor() {
//         this.items = [];
//     }

//     push(...item) {
//         this.items.push(...item);
//     }

//     pop() {
//         return this.items.pop();
//     }

//     peek() {
//         return this.items[this.items.length - 1];
//     }

//     getAllElements() {
//         return this.items;
//     }
// }

// function selection(stack, number) {
//     let newArray = [];
//     for (let index = 0; index < number; index++) {
//         newArray.push(stack.items[index]); 
//     }
//     return newArray.reverse(); 
// }

// let stack = new Stack();
// stack.push('Manzana', 'Cebolla', 'Apio', 'Naranja', 'Papaya', 'Sandía', 'Melón');

// let selectedItems = selection(stack, 2); 
// console.log(selectedItems);

///////////////////////////////////////////////////////////////////////////////////////////////

// function replace(chain, newNumber, oldNumber) {
//     for (let index = 0; index < chain.length; index++) {
//         if (chain[index] === oldNumber) {
//             chain.splice(index,0,newNumber);
//             chain.splice(index + 1);
            
//         }
//     }
// }

// let array = [1, 2, 6, 4, 5, 3, 5, 3, 2, 6, 9, 8, 4, 6, 3, 3, 5, 3, 2, 4];

// replace(array, 9, 5);
// console.log(array);

/////con class//////

// class Stack {
//     constructor() {
//         this.items = [];
//     }

//     push(...item) {
//         this.items.push(...item);
//     }

//     pop() {
//         return this.items.pop();
//     }

//     peek() {
//         return this.items[this.items.length - 1];
//     }

//     getAllElements() {
//         return this.items;
//     }

//     replace(newNumber, oldNumber) {
//         for (let index = 0; index < this.items.length; index++) {
//             if (this.items[index] === oldNumber) {
//                 this.items[index] = newNumber;
//             }
//         }
//     }
// }

// let stack = new Stack();
// stack.push(3, 2, 3, 4, 6, 8, 1, 2, 5, 5);

// stack.replace(9, 3); 
// console.log(stack.getAllElements());

//////////////////////////////////////////////////////////////////////////////////////////////

// let destinations = ['Origen','pueblo1','pueblo2','pueblo3','destino']

// function route(){
//     for(let index = 0; index < destinations.length ; index++){
//         console.log(destinations[index]);
    
//     }
//     for(let index = destinations.length - 1; index >= 0; index--){
//         console.log(destinations[index]);
    
//     }
// }

// route();

//////////////////////////////////////////////////////////////////////////////////

// let storage = ['contenedor1', 'contenedor2', 'contenedor3', 'contenedor4', 'contenedor5', 'contenedor6', 'contenedor7', 'contenedor8', 'contenedor9', 'contenedor10'];
// let containerReseptor = []
// function remove(store, itemToRemove) {
//     for (let index = store.length - 1; index >= 0; index--) {
//         if(store[index] != itemToRemove){
//             containerReseptor.push(store[index])
//             console.log(` fue movido el  ${store[index]} `);
//         }
//         else if (store[index] === itemToRemove) {
//             store.splice(index, 1);
//             console.log('fue removido el ', itemToRemove)
//             break;
//         }

//     }
    
//     while (containerReseptor.length > 0) {
//         let containerMoved = containerReseptor.pop();
//         store.push(containerMoved);
//         console.log(`Fue regresado el contenedor${containerMoved}`);
//     }



// }

// remove(storage, 'contenedor5');

//////////////////////////////////////////////////////////////////////////////////

// Ejercicio 2 : Colas.//

// let line =  [ 'amarillo', 'rosa', 'rojo', 'verde', 'azul', 'negro', 'morado', 'blanco']

//  function pullApart (colors) {
//     let line1 = []
//     let line2 = []
//     for(i =0; i<colors.length;i++ ){
//         if(i%2===0)
//         line1.push(colors[i])
//         else {
//             line2.push(colors[i])
//         }
//     }
//     console.log('Linea 1:', line1);
//     console.log('Linea 2:', line2);
//  }

// pullApart(line);

///////////////////////////////////////////////////////////////////////////////////////////////

// let line = [
//     { user: 'User1', ticket: true },
//     { user: 'User2', ticket: true },
//     { user: 'User3', ticket: false },
//     { user: 'User4', ticket: true },
//     { user: 'User5', ticket: false },
//     { user: 'User6', ticket: false },
//     { user: 'User7', ticket: true },
//     { user: 'User8', ticket: true },
//     { user: 'User9', ticket: true },
//     { user: 'User10', ticket: false },
//     { user: 'User11', ticket: true },
// ];

// function guard(ticketCheck) {
//     let falseTicket = [];
//     let finalLine = [];
//     for (let i = 0; i < ticketCheck.length; i++) {
//         if (ticketCheck[i].ticket === false) {
//             falseTicket.push(ticketCheck[i]);
//         } else {
//             finalLine.push(ticketCheck[i]);
//         }
//     }
//     console.log('Final Line:', finalLine);
//     console.log('False tickets:', falseTicket);
// }

// guard(line);

//////////////////////////////////////////////////////////////////////////////////////////////

//Ejercicio 3 : Listas enlazadas.//

// class Node {
//     constructor(value, next = null){
//         this.value = value;
//         this.next = next;
//     }
    
// }

// class LinkedList {
//     constructor(){
//         this.head = null;
//         this.tail = null;

//     }
//     append(value){
//         const newNode = new Node(value);
//         if (this.exists(value)) {
//             console.log(`YOU TRIED TO REPEAT THE VALUE ${value} `);
//             return;
//         }
//         else if(!this.head){
//             this.head = newNode;
//         } 
//         else{
//             this.tail.next = newNode;
//         }
//         this.tail = newNode;
//     }

//     traverse(callback){
//         let currenNode = this.head;

//         while (currenNode !== null){
//             callback(currenNode);
//             currenNode = currenNode.next;
//         }
//     }
//     exists(value) {
//         let currentNode = this.head;

//         while (currentNode) {
//             if (currentNode.value === value) return true;
//             currentNode = currentNode.next;
//         }

//         return false;
//     }
// }

// const printNode = (node) => console.log(node.value);

// const list = new LinkedList();
// list.append(1);
// list.append(2);
// list.append(3);
// list.append(3)

// list.traverse(printNode);

//////////////////////////////////////////////////////////////////
// class Node {
//     constructor(value, next = null) {
//         this.value = value;
//         this.next = next;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//         this.tail = null;
//     }

//     append(value) {
//         let newNode = new Node(value);

//         if (!this.head) {
//             this.head = newNode;
//         } else {
//             this.tail.next = newNode;
//         }
//         this.tail = newNode;
//     }

//     traverse(callback) {
//         let currentNode = this.head;

//         while (currentNode !== null) {
//             callback(currentNode);
//             currentNode = currentNode.next;
//         }
//     }

//     ramdom(max) {
//         let value = [];
//         while (value.length < max) {
//             value.push(Math.floor(Math.random() * 100));
//         }
//         for (let index = 0; index < value.length; index++) {
//             this.append(value[index]);
//         }
//     }

//     exceededValue(top) {
//         let result = [];
//         let currentNode = this.head;

//         while (currentNode !== null) {
//             if (currentNode.value > top) {
//                 result.push(currentNode.value);
//             }
//             currentNode = currentNode.next;
//         }
//         return result;
//     }
// }

// let printNode = (node) => console.log(node.value);

// let list = new LinkedList();
// list.ramdom(90);

// list.traverse(printNode);

// let topValue = 70; 
// let valuesExceeded = list.exceededValue(topValue);
// console.log(`Valores mayores que ${topValue}:`, valuesExceeded);

//////////////////////////////////////////////////////////////////////////////

// class BinaryTree{
//     constructor(value){
//         this.value = value
//         this.left = null;
//         this.right= null;
//     }
// }

// const tree1 = new BinaryTree(1)
// tree1.left = new BinaryTree(2)
// tree1.right = new BinaryTree(3)

// const tree2 = new BinaryTree(1)
// tree2.left = new BinaryTree(4)
// tree2.right = new BinaryTree(3)

// function equal(param1,param2) {
//     if (param1 === param2) {
//         console.log(`${param1} es igual a ${param2}` );
//     }
// }

// equal(tree1,tree2);