class Queue {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  enqueue(element) {
    this.items[this.count] = element;
    this.count++;
  }

  dequeue() {
    if (this.isEmpty()) return undefined;
    const removed = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return removed;
  }

  peek() {
    if (this.isEmpty()) return undefined;
    return this.items[this.lowestCount];
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.count - this.lowestCount
  }

  printSelf() {
    return this;
  }
  clear() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }
  toString() {
    if (this.isEmpty()) return '';
    let dequeued = this.dequeue();
    let objString = `${dequeued}`
    while (!this.isEmpty()) {
      dequeued = this.dequeue();
      objString = `${objString}, ${dequeued}`;
    }

    return objString;
  }
}
function hotPotato(elementsList, num) {
  const queue = new Queue();// TODO implement this Queue
  const eliminatedList = [];
  for (let i = 0; i < elementsList.length; i++) {
    queue.enqueue(elementsList[i]);
  }
  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue());
    }
    eliminatedList.push(queue.dequeue());
  }
  return {
    eliminated: eliminatedList,
    winner: queue.dequeue()
  }
}

const names = ['John', 'Jack', 'Camila', ' Ingrid', 'Carl'];

const result = hotPotato(names, 7)

console.log({ result })
