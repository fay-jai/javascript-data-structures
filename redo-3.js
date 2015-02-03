/*
 * Linked List (Singly)
 * Linked List (Doubly)
 * Stack
 * Queue
 * Tree
 * Binary Search Tree
 * Hash Table
*/

// Nodes
var SinglyLinkedListNode = function (value) {
  return {
    value : value,
    next  : null
  };
};

var DoublyLinkedListNode = function (value) {
  return {
    value : value,
    next  : null,
    prev  : null
  };
};

var TreeNode = function (value) {
  return {
    value    : value,
    children : []
  };
};

var BinaryTreeNode = function (value) {
  return {
    value : value,
    left  : null,
    right : null
  };
};

// Singly Linked List
var SinglyLinkedList = function () {
  var obj  = Object.create( SinglyLinkedListMethods );
  obj.head = null;
  obj.tail = null;
  return obj;
};

var SinglyLinkedListMethods = {
  appendToHead: function (node) {
    // if linked list is empty
    if (this.isEmpty()) {
      // set both head and tail to point to node
      this.head = node;
      this.tail = node;
    } else {
      // update head to point to node and node.next to point to previous head
      node.next = this.head;
      this.head = node;
    }
  },
  appendToTail: function (node) {
    // if linked list is empty
    if (this.isEmpty()) {
      // set both head and tail to point to node
      this.head = node;
      this.tail = node;
    } else {
      // update tail to point to node and tail.prev to point to new tail
      this.tail.next = node;
      this.tail      = node;
    }
  },
  removeFromHead: function () {
    // if linked list is empty
      // don't do anything
    var remove;
    if (!this.isEmpty()) {
      // save head node
      remove = this.head;

      // if linked list only has one item
      if (this.head === this.tail) {
        // reset both head and tail to null
        this.head = null;
        this.tail = null;
      } else { // linked list has more than one item
        // assign head to head.next
        this.head = this.head.next;
      }
      // for saved head node, bind next value to null
      remove.next = null;

      // return saved head node
      return remove;
    }
  },
  removeFromTail: function () {
    // if linked list is empty
      // don't do anything
    var remove, current;
    if (!this.isEmpty()) {
      // save tail node
      remove = this.tail;

      // if linked list only has one item
      if (this.head === this.tail) {
        // reset both head and tail to null
        this.head = null;
        this.tail = null;
      } else { // linked list has more than one item
        // assign tail.prev to tail
        current = this.head;
        while (current.next !== this.tail) {
          current = current.next;
        }
        this.tail      = current;
        this.tail.next = null;
      }
      // return saved tail node
      return remove;
    }
  },
  contains: function (node) {
    // if linked list is empty
    var start;
    if (!this.isEmpty()) return false;

    // start at head value and iterate across all nodes in linked list
    start = this.head;
    while (start) {
      // check whether each node is equal to the target node
      // if at any point it is equal, return true
      if (start === node) return true;
      start = start.next;
    }
    // after checking all nodes, return false
    return false;
  },
  isEmpty: function () {
    return this.head === null && this.tail === null;
  }
};

// Doubly Linked List
var DoublyLinkedList = function () {
  var obj  = Object.create( DoublyLinkedListMethods );
  obj.head = null;
  obj.tail = null;
  return obj;
};

var DoublyLinkedListMethods = {
  appendToHead: function (node) {
    // if linked list is empty
      // set both head and tail to node
    // else (linked list is not empty)
      // make the new node the new head
      // make the new node's next value point to the previous head
      // make the previous head's prev value point to new node
  },
  appendToTail: function (node) {
    // if linked list is empty
      // set both head and tail to node
    // else (linked list is not empty)
      // make the new node the new tail
      // make the previous tail point to the new node
      // make the new node's previous value point to the previous tail
  },
  removeFromHead: function () {
    // if linked list is empty
      // don't do anything
    // else (linked list is not empty)
      // save head node
      // if linked list has only one item
        // reset both head and tail to null
      // else (linked list has more than one item)
        // update head.next as the new head value
        // update the new head's previous value to point to null
        // update the saved head node's next value to point to null
      // return saved head node
  },
  removeFromTail: function () {
    // if linked list is empty
      // don't do anything
    // else (linked list is not empty)
      // save tail node
      // if linked list has only one item
        // reset both head and tail to null
      // else (linked list has more than one item)
        // update tail.prev as the new tail value
        // update the new tail's next value to point to null
        // update the saved tail node's prev value to point to null
      // return saved tail node
  },
  contains: function (node) {
    // if linked list is empty
      // return false
    // else (linked list is not empty)
      // start at the head node and iterate across all nodes
      // checking if the current node is identically equal to the target node
        // if at any point it does, return true
      // after iterating across all nodes, return false
  },
  isEmpty: function () {
    return this.head === null && this.tail === null;
  }
};

// Stack
var Stack = function () {
  var obj     = Object.create( StackMethods );
  obj.storage = {};
  obj.size    = 0;
  return obj;
};

var StackMethods = {
  push: function (value) {

  },
  pop: function () {

  },
  peek: function () {

  },
  isEmpty: function () {
    return this.size <= 0;
  }
};

// Queue
var Queue = function () {
  var obj     = Object.create( QueueMethods );
  obj.storage = {};
  obj.start   = 0;
  obj.end     = 0;
  return obj;
};

var QueueMethods = {
  enqueue: function (value) {

  },
  dequeue: function () {

  },
  top: function () {

  },
  isEmpty: function () {

  }
};

// Tree


// Binary Search Tree
var BinarySearchTree = function () {
  var obj  = Object.create( BinarySearchTreeMethods );
  obj.root = null;
  return obj;
};

var BinarySearchTreeMethods = (function () {
  var insert = function (node) {

  };

  var remove = function (node) {

  };

  var contains = function (node) {

  };

  var findMinNode = function () {

  };

  var findMaxNode = function () {

  };

  var getHeight = function () {

  };

  var isEmpty = function () {

  };

  var dfs = function (callback) {

  };

  var bfs = function (callback) {

  };

  return {
    insert      : insert,
    remove      : remove,
    contains    : contains,
    findMinNode : findMinNode,
    findMaxNode : findMaxNode,
    getHeight   : getHeight,
    isEmpty     : isEmpty,
    dfs         : dfs,
    bfs         : bfs
  };
})();

// Hash Table
var HashTable = function (arrayLimit) {
  var obj          = Object.create( HashTableMethods );
  obj.storage      = [];
  obj.storageLimit = arrayLimit;
  return obj;
};

var HashTableMethods = {
  insert: function (key, value) {

  },
  retrieve: function (key) {

  },
  remove: function (key) {

  },
  getIndexBelowMaxForKey: function (str, max) {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
      hash = (hash<<5) + hash + str.charCodeAt(i);
      hash = hash & hash; // Convert to 32bit integer
      hash = Math.abs(hash);
    }
    return hash % max;
  }
};