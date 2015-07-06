var Graph = function(){
	this.nodes = {};
};

Graph.prototype.addNode = function(node){
	if (node) {
    if (this.nodes[node] === undefined) {
      this.nodes[node] = {edges: []};
    }
  }
};

Graph.prototype.contains = function(node){
	return !!(this.nodes[node])
};

Graph.prototype.removeNode = function(node){
	if (this.contains(node)) {
    for (var i = 0; i < this.nodes[node].edges.length; i++) {
      var currentEdgeNode = this.nodes[node].edges[i];
      this.removeEdge(node, currentEdgeNode);
    }
  }
  delete this.nodes[node];
};

Graph.prototype.hasEdge = function(fromNode, toNode){
	return this.nodes[fromNode].edges.indexOf(toNode) !== -1;
};

Graph.prototype.addEdge = function(fromNode, toNode){
	if (this.contains(fromNode) && this.contains(toNode)) {
    if (this.nodes[fromNode].edges.indexOf(toNode) === -1) {
      this.nodes[fromNode].edges.push(toNode);
    }
    if (this.nodes[toNode].edges.indexOf(fromNode) === -1) {
      this.nodes[toNode].edges.push(fromNode);
    }
  }
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  var spliceIndex = this.nodes[fromNode].edges.indexOf(toNode);
	if (spliceIndex >= 0) {
    this.nodes[fromNode].edges.splice(spliceIndex, 1);
  }
  spliceIndex = this.nodes[toNode].edges.indexOf(fromNode);
  if (spliceIndex >= 0) {
    this.nodes[toNode].edges.splice(spliceIndex, 1);
  }
};

Graph.prototype.forEachNode = function(cb){
	for (var nodeKey in this.nodes) {
    cb(nodeKey);
  }
};

// 

/*
 * Complexity: What is the time complexity of the above functions?
 	O(n)
 */



