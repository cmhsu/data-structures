var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = {};
  newStack.length = 0;
  newStack.storage = {};

  _.extend(newStack, stackMethods);

  return newStack;
};

var stackMethods = {};

stackMethods.push = function(value) {
	this.storage[this.length] = value;
	this.length++;
};

stackMethods.pop = function() {
	if (this.length >= 1) {
		this.length--;
	}
	var result = this.storage[this.length];
  delete this.storage[this.length];
  return result;
};

stackMethods.size =function() {
	return this.length;
};

