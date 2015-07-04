var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var item = { 
      value: value,
      next: null
    };

    if (list.head === null) {
      list.head = item;
      list.tail = item;
      return;
    } 

    list.tail.next = item;
    list.tail = item; 
  };

  list.removeHead = function() {
    if (list.head === null) {
      return null;
    }

    var result = list.head.value;

    if (list.head.next === null) {
      list.tail = null;
      list.head = null;
      return result;
    }

    list.head = list.head.next;
    return result;
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

// time complexity = O(n)

/*
 * Complexity: What is the time complexity of the above functions?
 */
