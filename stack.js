function Stack(capacity) {
  // implement me...
  this._capacity = 10;
  this._storage = {};
  this._count = 0;
}

Stack.prototype.push = function(value) {
  // implement me...
  if ( this._count < this._capacity) {
    //Is it the firist element
    this._storage[this._count++] = value;
    return this._count;
  }
  return 'Max capacity already reached. Remove element before adding a new one.';
};
// Time complexity:

Stack.prototype.pop = function() {
  // implement me...
  let deletedItem = undefined;
  if (this._count > 0) {
    deletedItem = this._storage[--this._count];
    delete this._storage[this._count];
    return deletedItem;
  }
  return 'There is nothing to delete';
};
// Time complexity:

Stack.prototype.peek = function() {
  // implement me...
  return this._storage[this._count - 1];
};
// Time complexity:

Stack.prototype.count = function() {
  // implement me...
  return this._count;
};
// Time complexity:

Stack.prototype.contains = function(value) {
  for (let i = 0 ; i < this._count ; i++) {
    if (this._storage[i] === value) {
      console.log(`Your search for:${value} has been found in index ${i}`);
      return true;
    }
  }
    console.log(`Your search: ${value} doesn't exist in the stack`);
    return false;
}

Stack.prototype.util = function(value){
    let numPops = 0;

    if (this.contains(value)) {
      let itemValue = this.peek();
      while (itemValue != value) {
        this.pop();
        itemValue = this.peek();
        console.log(this.peek());
        numPops++;
      }
    } else {
      console.log(`This value is not in the Stack...`);
    }
    return numPops;
}

module.exports = Stack;
