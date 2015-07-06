var DoublyLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newTail = Node(value);

    if (!list.head) {
      list.head = newTail;
    }

    if (list.tail) {
      list.tail.next = newTail;
      newTail.prev = list.tail;
    }

    list.tail = newTail;
  };

  list.addToHead = function(value) {
    var newHead = Node(value);

    if (!list.tail) {
      list.tail = newHead;
    }

    if (list.head) {
      list.head.prev = newHead;
      newHead.next = list.head;
    }

    list.head = newHead;
  };

  list.removeHead = function() {
    if (list.head === null) {
      return null;
    }

    var currentHead = list.head;
    list.head = currentHead.next;
    if (list.head) {
      list.head.prev = null;
    } else {
      list.tail = null;
    }
    return currentHead.value;
  };

  list.removeTail = function() {
    if (list.tail === null) {
      return null;
    }

    var currentTail = list.tail;
    list.tail = currentTail.prev;
    if (list.tail) {
      list.tail.next = null;
    } else {
      list.head = null;
    }
    return currentTail.value;
  };

  list.contains = function(target){
    var nodeContains = function(node) {
      if(node.value === target) {
        return true;
      } else {
        if (node.next !== null) {
          return nodeContains(node.next);
        }
      }
      return false;
    };
    return nodeContains(list.head);
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;
  node.prev = null;

  return node;
};

// time complexity = O(n)

/*
 * Complexity: What is the time complexity of the above functions?
 */
