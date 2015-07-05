var Hashtable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._entryCount = 0;
};

Hashtable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  // set this collision bucket to a default if there isn't one there already
  this._storage.set(i, this._storage.get(i) || new LinkedList());
  var collisionsList = this._storage.get(i);
  var entryTuple;
  collisionsList.each(function(node) {
    if (node.value[0] === k) {
      entryTuple = node.value;
    }
  });
  if (!entryTuple) {
    collisionsList.addToTail([k, v]);
    this._entryCount++;
    this._checkResize();

  } else {

  }
  entryTuple[1] = v;
  this._storage.get(i).add([k, v]);
};

HashTable.prototype._checkResize = function() {
  if (this._entryCount > .75 * this._limit) {
    this._increaseSize();
  } else if (this._entryCount < .25 * this._limit) {
    this._decreaseSize();
  }
}

Hashtable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

};

Hashtable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k,this._limit);

};



/*
 * Complexity: What is the time complexity of the above functions?
 O(1)
 */
