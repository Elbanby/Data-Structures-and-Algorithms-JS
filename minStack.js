const Stack = require('./stack');

function MinStack(capacity) {
  this.capacity = capacity;
  this._storage = {};
  this._count  = 0;
  this._minStack = new Stack();
}

MinStack.prototype.push = function(value) {
  if (this._count === this._capacity) return "can't proceed. Stack is full";
  this._storage[this._count++] = value;
  (this._minStack.peek() < value) ?
    this._minStack.push(this._minStack.peek()) :
    this._minStack.push(value);
}

MinStack.prototype.pop = function() {
  if (this._count === 0) return "Stack is empty can't pop anything";
  let deletedItem = this._storage[--this._count];
  delete this._storage[this._count];
  this._minStack.pop();
  return deletedItem
}

MinStack.prototype.peek = function() {
  if (this._count === 0) return "Stack is empty, nothing to see";
  return this._storage[this._count - 1];
}

MinStack.prototype.count = function() {
  return this._count;
}

MinStack.prototype.min = function() {
  return this._minStack.peek();
}



const ms = new MinStack(10);
ms.push(3);
ms.push(2);
ms.push(1);
ms.push(10);
console.log(`MinStack` ,ms._minStack);
console.log(`peeking ${ms.peek()}`);
console.log(`poping ${ms.pop()}`);
ms.push(0);
console.log(`MinStack` ,ms._minStack);
