class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }
  insertlast(data) {
    let node = new Node(data);
    let current;
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
      this.size++;
    }
  }
  printlist() {
    var current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}
var li = new LinkedList();
li.insertFirst(100);
li.insertFirst(200);
li.insertFirst(300);
li.insertlast(400);
li.printlist();
