var LinkedList = function(){
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
    }

    list.tail = newTail;
  };

  list.removeHead = function() {
    if (list.head === null) {
      return null;
    }

    var currentHead = list.head;
    list.head = currentHead.next;
    return currentHead.value;
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

  return node;
};




// time complexity = O(n)

/*
 * Complexity: What is the time complexity of the above functions?
 */
