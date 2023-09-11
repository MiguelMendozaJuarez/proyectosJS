class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinaryTree {
    constructor() {
      this.root = null;
    }
  
    insert(value) {
      if (!this.root) {
        this.root = new Node(value);
      } else {
        this.insertNode(this.root, value);
      }
    }
  
    insertNode(currentNode, value) {
      if (value < currentNode.value) {
        if (currentNode.left === null) {
          currentNode.left = new Node(value);
        } else {
          this.insertNode(currentNode.left, value);
        }
      } else {
        if (currentNode.right === null) {
          currentNode.right = new Node(value);
        } else {
          this.insertNode(currentNode.right, value);
        }
      }
    }
  }

  //verificar si dos arboles son identico usnado recursion

  
  function areIdenticalTrees(treeA, treeB) {
    function areIdenticalNodes(nodeA, nodeB) {
      if (nodeA === null && nodeB === null) {
        return true;
      }
  
      if (nodeA === null || nodeB === null) {
        return false;
      }
  
      if (nodeA.value !== nodeB.value) {
        return false;
      }
  
      const leftIdentical = areIdenticalNodes(nodeA.left, nodeB.left);
      const rightIdentical = areIdenticalNodes(nodeA.right, nodeB.right);
  
      return leftIdentical && rightIdentical;
    }
  
    return areIdenticalNodes(treeA.root, treeB.root);
  }

  //copiar nodo
  function copyTree(originalTree) {
    function copyNode(originalNode) {
      if (originalNode === null) {
        return null;
      }
  
      const newNode = new Node(originalNode.value);
      newNode.left = copyNode(originalNode.left);
      newNode.right = copyNode(originalNode.right);
  
      return newNode;
    }
  
    const copiedTree = new BinaryTree();
    copiedTree.root = copyNode(originalTree.root);
  
    return copiedTree;
  }

  // ver el nodo en n nivel

  function printNodesAtLevel(root, level) {
    if (root === null) {
      return;
    }
  
    if (level === 0) {
      console.log(root.value);
    } else {
      printNodesAtLevel(root.left, level - 1);
      printNodesAtLevel(root.right, level - 1);
    }
  }
  
  //numero de nodos

  function countLeaves(root) {
    if (root === null) {
      return 0;
    }
  
    if (root.left === null && root.right === null) {
      return 1;
    }

    const leftLeaves = countLeaves(root.left);
    const rightLeaves = countLeaves(root.right);

    return leftLeaves + rightLeaves;
  }
  










  
  
  