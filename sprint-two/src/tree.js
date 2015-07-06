var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  newTree.parent = null;

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  var newChild = Tree(value);
  newChild.parent = this;
	this.children.push(newChild);
};

treeMethods.contains = function(target){
	var result = false;
	var searchNode = function(node) {
		if (node.value === target) {
			result = true;
      return;
		} else {
      for (var i = 0; i < node.children.length; i++) {
        searchNode(node.children[i]);
      }
		}	
	};
	searchNode(this);
	return result;
};

treeMethods.removeFromParent = function() {
  for (var i = 0; i < this.parent.children.length; i++) {
    if (this.parent.children[i].value === this.value) {
      this.parent.children.splice(i, 1);
      break;
    }
  }
  this.parent = null;
  return this;
};

treeMethods.traverse = function(func) {
  var traverseNode = function(node) {
    func(node.value);
    for (var i = 0; i < node.children.length; i++) {
      traverseNode(node.children[i]);
    }
  };
  traverseNode(this);
};





/*
 * Complexity: What is the time complexity of the above functions?
	access complexity = n/a - we can't access a value aside from searching for it
 	search complexity = O(n)
 */
