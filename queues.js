function Queue(capacity) {
  // implement me...
  this._storage = {};
  this._head = 0;
  this._tail = 0;
  this._count = 0;
  this._capacity = 10;
}

Queue.prototype.enqueue = function(value) {
  // implement me...
  if (this._count < this._capacity) {
    if (this._count == 0) {
      this._head = 0;
      this._tail = 0;
    } else {
      this._tail = this._count;
    }
    this._storage[this._count++] = value;
    return this._count;
  }
  return "Max capacity already reached. Remove element before adding a new one."
};
// Time complexity:

Queue.prototype.dequeue = function() {
  // implement me...
  let dequedVal = this._storage[this._head];
  delete this._storage[this._head];
  this._head++;
  this._count--;
};
// Time complexity:

Queue.prototype.peek = function() {
  // implement me...
  return this._storage[this._head];
};

Queue.prototype.count = function() {
  // implement me...
  return this._count;
};
// Time complexity:

Queue.prototype.find = function(value) {
  if (this._count > 0) {
    let current = -1;
    for (let i = 0 ; i < this._count ; i++) {
      current = this._storage[this._head + i];
      if (current == value) return true;
    }
  }
  return false;
}

Queue.prototype.util = function(value){
  let numOfDeq = -1;

  if (this.find(value)) {
    numOfDeq++;
    while (this._storage[this._head] != value) {
      this.dequeue();
      numOfDeq++;
    }
  }
  return numOfDeq;
}

const myQueue = new Queue();
