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
    return storage[shiftRightBy - 1]; //returns 'a' a second time, instead of undefined. for queue.enqueue('a'); queue.dequeue(); queue.dequeue();

  };

  someInstance.size = function(){
    return length - shiftRightBy;
  };

  return someInstance;
};
