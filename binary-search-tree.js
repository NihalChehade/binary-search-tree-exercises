class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    const newNode = new Node(val);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    // To track if insertion is done
    let inserted = false;

    while (!inserted) {
      if (val < current.val) {
        if (current.left === null) {
          current.left = newNode;
          // Node inserted, exit the loop
          inserted = true;
        } else {
          current = current.left;
        }
      } else {
        if (current.right === null) {
          current.right = newNode;
          // Node inserted, exit the loop
          inserted = true;
        } else {
          current = current.right;
        }
      }
    }

    return this;
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    // If the tree is empty, set the new node as the root
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }

    // Function to handle recursion
    const insertNode = (node, val) => {
      // Base case: if the current node is null, create and return a new node
      if (node === null) {
        return new Node(val);
      }

      // Recursive case: traverse left or right depending on the value
      if (val < node.val) {
        node.left = insertNode(node.left, val);
      } else {
        node.right = insertNode(node.right, val);
      }

      return node; // Return the current node to link back to the parent
    };

    // Use the recursive function starting from the root
    this.root = insertNode(this.root, val);
    return this;
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let current = this.root;

    while (current !== null) {
      if (val === current.val) {
        return current;
      }

      current = val < current.val ? current.left : current.right;
    }

    return undefined;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    // Helper function to handle recursion
    const findNode = (node, val) => {
      // Base case: if node is null or we find the value, return the node
      if (node === null) {
        return undefined;
      }else if(node.val === val){
        return node;
      }

      // Recursive case: Traverse left or right depending on the value
      if (val < node.val) {
        return findNode(node.left, val); // Search the left subtree
      } else {
        return findNode(node.right, val); // Search the right subtree
      }
    };

    // Start the search from the root
    return findNode(this.root, val);
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    const visited = [];

    function traverse(node) {
      if (node === null) return;

      visited.push(node.val); 
      traverse(node.left); 
      traverse(node.right); 
    }

    traverse(this.root);
    return visited;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    const visited = [];

    function traverse(node) {
      if (node === null) return;

      traverse(node.left); 
      visited.push(node.val); 
      traverse(node.right);
    }

    traverse(this.root);
    return visited;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    const visited = [];

    function traverse(node) {
      if (node === null) return;

      traverse(node.left); 
      traverse(node.right); 
      visited.push(node.val); 
    }

    traverse(this.root);
    return visited;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    const visited = [];
    const queue = [];

    if (this.root !== null) queue.push(this.root);

    while (queue.length > 0) {
      const node = queue.shift(); 
      visited.push(node.val); 

      if (node.left !== null) queue.push(node.left); 
      if (node.right !== null) queue.push(node.right);
    }

    return visited;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {}

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {}

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {}
}

module.exports = BinarySearchTree;
