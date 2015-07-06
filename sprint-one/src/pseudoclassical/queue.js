var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.length = 0;
  this.shiftRightBy = 0;
};

Queue.prototype.enqueue = function(value) {
	this.storage[this.length] = value;
	this.length++;
};

Queue.prototype.dequeue = function() {
	if (this.length - this.shiftRightBy > 0) {
		this.shiftRightBy++;
	}
	var result = this.storage[this.shiftRightBy - 1];
  delete this.storage[this.shiftRightBy - 1];
  return result;
};

Queue.prototype.size = function() {
	return this.length - this.shiftRightBy;
};


