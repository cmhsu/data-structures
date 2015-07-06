var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._size = 0;
};

HashTable.prototype.insert = function(k, v){
  var idx = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(idx);
  if (!bucket) {
    bucket = [];
    this._storage.set(idx, bucket);
  }
  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      tuple[1] = v;
      return;
    }
  }
  bucket.push([k, v]);
  this._size += 1;
  if (this._size > (0.75 * this._limit)) {
    this.resize(this._limit * 2);
  }
};

HashTable.prototype.retrieve = function(k){
  var idx = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(idx);
  if (!bucket) {
    return null;
  }
  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      return tuple[1];
    }
  }
  return null;
};

HashTable.prototype.remove = function(k){
  var idx = getIndexBelowMaxForKey(k,this._limit);
  var bucket = this._storage.get(idx);
  if (!bucket) {
    return null;
  }
  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      bucket.splice(i, 1);
      this._size -= 1;
      if (this._size < (0.25 * this._limit)) {
        this.resize(this._limit / 2);
      }
      return tuple[1];
    }
  }
  return null;
};

HashTable.prototype.resize = function(newSize){
  var oldStorage = this._storage;
  this._storage = LimitedArray(newSize);
  this._limit = newSize;
  this._size = 0;

  oldStorage.each(function(bucket) {
    if (!bucket) {
      return;
    }
    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];
      this.insert(tuple[0], tuple[1]);
    }
  }.bind(this));
};


/*
 * Complexity: What is the time complexity of the above functions?
  O(1)
 */







