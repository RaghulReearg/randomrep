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
  addlist(data) {
    this.head = new Node(data, this.head);
  }
  addlast(data) {
    let node = new Node(data);
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
      size++;
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
li.addlist(100);
li.addlist(200);
li.printlist();
