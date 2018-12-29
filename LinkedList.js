function LinkedList() {
  this.head = null;
}

LinkedList.prototype.append = function(value) {
  if (this.contains(value)) return "Duplicate found, can't append to list";

  let node = this.createNode(value, null);

  if (this.isEmpty()) {
    this.head = node;
    return value;
  }

  let current = this.head;

  while (current.next !== null) {
    current = current.next;
  }
  current.next = node;
};

LinkedList.prototype.isEmpty = function() {
  return this.head === null;
};

LinkedList.prototype.size = function() {
  let size = 0;
  let current = this.head;

  while (current != null) {
    size++;
    current = current.next;
  }
  return size;
};

LinkedList.prototype.prepend = function(value) {
  if (this.contains(value))
    return "Duplicate values found, can't append to list";
  // First create a new node -- new node should point to the current head
  let node = this.createNode(value, this.head);
  // Update head to the new node
  this.head = node;
};

LinkedList.prototype.createNode = function(value, next) {
  return {
    data: value,
    next: next
  };
};

LinkedList.prototype.contains = function(value) {
  let current = this.head;

  while (current != null) {
    if (current.data === value) return true;
    current = current.next;
  }
  return false;
};

LinkedList.prototype.remove = function(value) {
  if (!this.contains(value)) return null;

  let current = this.head;
  // if it is the only item;
  if (this.head.data == value && this.head.next === null) {
    this.head = null;
    return value;
  }

  while (current.next) {
    // Item is in the first node
    if (current.data == value) {
      this.head = current.next;
      return value;
    }

    if (current.next.data == value) {
      // Item is in the last node
      if (current.next.next === null) {
        current.next = current.next.next;
        return value;
      }
      // Item is somewhere in the middle
      current.next = current.next.next;
      return value;
    }
    current = current.next;
  }
  return value;
};

LinkedList.prototype.insert = function(value, index) {
  if (this.contains(value)) return "No duplicates allowed";

  let indexValidation = this.size() >= index;

  if (!indexValidation) return "fail not a valid index: " + this.size();

  let current = this.head;
  let position = 0;
  //if index is zero then we are prepending
  if (index == 0) {
    this.prepend(value);
    return "added to position: " + index;
  }
  // if we are appending to the end
  if (index == this.size()) {
    this.append(value);
    return "added to position: " + index;
  }

  let node = this.createNode(value);
  // if the value is some where in between
  while (current !== null) {
    if (position === index) {
      let tempPtr = current.next;
      current.next = node;
      node.next = tempPtr;
      return "Successfully added at positon: " + index;
    }
    position++;
    current = current.next;
  }
  return "failed to insert value: " + value + " index: " + index;
};

LinkedList.prototype.print = function() {
  if (this.isEmpty()) {
    console.log("Empty list");
    return;
  }

  let toPrint = "HEAD ==>",
    current = this.head;

  while (current !== null) {
    toPrint += ` ${current.data} ==> `;
    current = current.next;
  }
  toPrint += " Null";
  console.log(toPrint);
};

LinkedList.prototype.deleteAll = function() {
  this.head = null;
};
