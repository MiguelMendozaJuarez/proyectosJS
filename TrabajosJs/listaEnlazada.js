// class Node {
//     constructor(data, next) {
//       this.data = data;
//       this.next = next;
//     }
//   }
  
//   class LinkedList {
//     constructor() {
//       this.head = null;
//       this.size = 0;
//     }
  
//     add(data) {
//       const newNode = new Node(data, null);
//       if (!this.head) {
//         this.head = newNode;
//       } else {
//         let current = this.head;
//         while (current.next) {
//           current = current.next;
//         }
//         current.next = newNode;
//       }
//       this.size++;
//     }
  
//     insertAt(data, index) {
//       if (index < 0 || index > this.size) {
//         return null;
//       }
//       const newNode = new Node(data, null);
//       let current = this.head;
//       let previous;
  
//       if (index === 0) {
//         newNode.next = current;
//         this.head = newNode;
//       } else {
//         for (let i = 0; i < index; i++) {
//           previous = current;
//           current = current.next;
//         }
//         newNode.next = current;
//         previous.next = newNode;
//       }
//       this.size++;
//     }
  
//     print() {
//       if (this.size === 0) {
//         return 'x';
//       }
//       let current = this.head;
//       let result = '';
  
//       while (current) {
//         result += current.data + ' -> ';
//         current = current.next;
//       }
//       result += 'x';
//       return result;
//     }
  
//     removeData(data) {
//       let current = this.head;
//       let previous = null;
  
//       while (current != null) {
//         if (current.data === data) {
//           if (!previous) {
//             this.head = current.next;
//           } else {
//             previous.next = current.next;
//           }
//           this.size--;
//           return current.data;
//         }
//         previous = current;
//         current = current.next;
//       }
//       return null;
//     }
  
//     removeFrom(index) {
//       if (index < 0 || index >= this.size) {
//         return null;
//       }
  
//       let current = this.head;
//       let previous = null;
  
//       if (index === 0) {
//         this.head = current.next;
//       } else {
//         for (let i = 0; i < index; i++) {
//           previous = current;
//           current = current.next;
//         }
//         previous.next = current.next;
//       }
//       this.size--;
//       return current.data;
//     }

//     isEmpty(){
//         return this.size ===0;

//     }

//     getSize(){
//         return this.size;}

//     //agregar dato sin que se repita
//     addUnique(data) {
            
//         let current = this.head;
//         while (current) {
//           if (current.data === data) {
//             return;
//         }
//         current = current.next;
//         }
        
            
//         const newNode = new Node(data, null);
//         if (!this.head) {
//           this.head = newNode;
//         } else {
//           let current = this.head;
//           while (current.next) {
//             current = current.next;
//           }
//           current.next = newNode;
//         }
//         this.size++;
//     }

//   }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// class Node {
//     constructor(data, next) {
//       this.data = data;
//       this.next = next;
//     }
//   }
  
//   class LinkedList {
//     constructor() {
//       this.head = null;
//       this.size = 0;
//     }
  
//     //agregar dato sin que se repita y que sea entero
//     addUnique(data) {
//         let current = this.head;
//         while (current) {
//           if (current.data === data || !Number.isInteger(data)) {
//             return;
//           }
//           current = current.next;
//         }
    
//         const newNode = new Node(data, null);
//         if (!this.head) {
//           this.head = newNode;
//         } else {
//           let current = this.head;
//           while (current.next) {
//             current = current.next;
//           }
//           current.next = newNode;
//         }
//         this.size++;
//       }
  
//     insertAt(data, index) {
//       if (index < 0 || index > this.size) {
//         return null;
//       }
//       const newNode = new Node(data, null);
//       let current = this.head;
//       let previous;
  
//       if (index === 0) {
//         newNode.next = current;
//         this.head = newNode;
//       } else {
//         for (let i = 0; i < index; i++) {
//           previous = current;
//           current = current.next;
//         }
//         newNode.next = current;
//         previous.next = newNode;
//       }
//       this.size++;
//     }
  
//     print() {
//       if (this.size === 0) {
//         return 'x';
//       }
//       let current = this.head;
//       let result = '';
  
//       while (current) {
//         result += current.data + ' -> ';
//         current = current.next;
//       }
//       result += 'x';
//       return result;
//     }
    
//     //imprimir numeros que sean mayores a un valor dado

//     printGreaterThan(value) {
//         if (this.size === 0) {
//           return 'x';
//         }
//         let current = this.head;
//         let result = '';
    
//         while (current) {
//           if (current.data > value) {
//             result += current.data + ' -> ';
//           }
//           current = current.next;
//         }
//         result += 'x';
//         return result;
//       }
  
//     removeData(data) {
//       let current = this.head;
//       let previous = null;
  
//       while (current != null) {
//         if (current.data === data) {
//           if (!previous) {
//             this.head = current.next;
//           } else {
//             previous.next = current.next;
//           }
//           this.size--;
//           return current.data;
//         }
//         previous = current;
//         current = current.next;
//       }
//       return null;
//     }
  
//     removeFrom(index) {
//       if (index < 0 || index >= this.size) {
//         return null;
//       }
  
//       let current = this.head;
//       let previous = null;
  
//       if (index === 0) {
//         this.head = current.next;
//       } else {
//         for (let i = 0; i < index; i++) {
//           previous = current;
//           current = current.next;
//         }
//         previous.next = current.next;
//       }
//       this.size--;
//       return current.data;
//     }

//     isEmpty(){
//         return this.size ===0;

//     }

//     getSize(){
//         return this.size;}

//   }
  
//   const myLinkedList = new LinkedList();
  
//   console.log(myLinkedList);
//   myLinkedList.addUnique(12);
//   myLinkedList.addUnique(99);
//   myLinkedList.addUnique(9);
//   myLinkedList.addUnique(6);
//   myLinkedList.addUnique(5);
//   myLinkedList.addUnique(5);
//   myLinkedList.addUnique(8);
//   myLinkedList.addUnique(2);
//   myLinkedList.addUnique(7);
//   myLinkedList.addUnique(5);
//   myLinkedList.addUnique(4);
//   myLinkedList.addUnique(8);
//   myLinkedList.addUnique(12);
//   myLinkedList.addUnique(56);
//   console.log(myLinkedList.print());
  