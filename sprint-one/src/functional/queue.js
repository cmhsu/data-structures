var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var length = 0;
  var shiftRightBy = 0;
  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[length] = value;
    length++;
  };

  someInstance.dequeue = function(){
    if (length > shiftRightBy) {
      shiftRightBy++;
    }
    var result = storage[shiftRightBy - 1];
    delete storage[shiftRightBy - 1];
    return result;
  };

  someInstance.size = function(){
    return length - shiftRightBy;
  };

  return someInstance;
};
