var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = {};
  newQueue.storage = {};
  newQueue.length = 0;
  newQueue.shiftRightBy = 0;
  _.extend(newQueue, queueMethods);

  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.length] = value;
  this.length += 1;
};

queueMethods.dequeue = function() {
	if (this.length > this.shiftRightBy) {
		this.shiftRightBy += 1;
	}
  var result = this.storage[this.shiftRightBy - 1];
	delete this.storage[this.shiftRightBy - 1];
  return result;
};

queueMethods.size = function() {
	return this.length - this.shiftRightBy;
};

