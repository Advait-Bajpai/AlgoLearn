export class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    return this.items.pop();
  }

  top() {
    return this.items.length ? this.items[this.items.length - 1] : undefined;
  }

  isEmpty() {
    return this.items.length === 0;
  }

  get size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }
}
s