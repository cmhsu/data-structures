var BinarySearchTree = function(value){
	var tree = {};

	tree.value = value;
	tree.left;
	tree.right;
	
	tree.insert = function(value) {
		if (value < this.value) {
			if (this.left === undefined) {
				this.left = BinarySearchTree(value);
			} else {
				this.left.insert(value);
			}
		} else if (value > this.value) {
			if (this.right === undefined) {
				this.right = BinarySearchTree(value);
			} else {
				this.right.insert(value);
			}
		} else {
      return 'Value was already entered.'
    }
	};

	tree.contains = function(value) {
		if (this.value === value) {
			return true;
		} else if (value > this.value) {
      if (this.right) {
        return this.right.contains(value);
      } else {
        return false;
      }
    } else if (value < this.value) {
      if (this.left) {
        return this.left.contains(value);
      } else {
        return false;
      }
    }
	};

	tree.depthFirstLog = function(func) {
		func(this.value);
		if (this.left) {
			this.left.depthFirstLog(func);
		}
		if (this.right) {
			this.right.depthFirstLog(func);
		}
	};

  tree.breadthFirstLog = function(func) {
    var nodes = [this];
    var traverseNodes = function(node) {
      if (node.left) {
        nodes.push(node.left);
      }
      if (node.right) {
        nodes.push(node.right);
      }
      if (node.left) {
        traverseNodes(node.left);
      }
      if (node.right) {
        traverseNodes(node.right);
      }
    };
    traverseNodes(this);
    console.log(nodes);
    for (var i = 0; i < nodes.length; i++) {
      func(nodes[i].value);
    }
  };

	return tree; 
};


/*
 * Complexity: What is the time complexity of the above functions?
 * O(log(n))
 */
