//  নোড তৈরি করলাম
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

//  লিস্ট তৈরি করলাম
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);
    // if the list is empty
    if (this.head === null) {
      // this.head = {
      //   value: value,
      //   next: null,
      // };
      this.head = newNode;
      this.tail = newNode;
    } else {
      // if the list is not empty
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;

    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    // if the list is empty
    if (this.head === null) {
      // this.head = {
      //   value: value,
      //   next: null,
      // };
      this.head = newNode;
      this.tail = newNode;
    } else {
      // if the list is not empty
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;

    return this;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) {
      console.error("Index out of bound ");

      return undefined;
    }
    // if the insert is in the start of the linked list
    if (index === 0) {
      return this.prepend(value);
    }

    // if the insert is in the end of the list
    if (index === this.length) {
      return this.append(value);
    }

    // if the insert is in the middle

    // find leading node
    // let count = 0;
    // let leadingNode = this.head;

    // while (count !== index - 1) {
    //   leadingNode = leadingNode.next;
    //   count++;
    // }

    // console.log(leadingNode)
    const leadingNode = this._traverseToIndex(index - 1);
    const holdingNode = leadingNode.next;

    const newNode = new Node(value);
    leadingNode.next = newNode;
    newNode.next = holdingNode;
    this.length++;
  }

  remove(index) {
    if (index === 0) {
      const removedItem = this.head.value;
      this.head = this.head.next;

      if (this.length === 1) {
        this.tail = null;
      }

      this.length--;
      return removedItem;
    }

    const leadingNode = this._traverseToIndex(index - 1);
    const nodeToRemove = leadingNode.next;

    leadingNode.next = nodeToRemove.next;

    if (leadingNode.next === null) {
      this.tail = leadingNode;
    }

    this.length--;
    return nodeToRemove.value;
  }

  // remove() {
  //   const leadingNode = this._traverseToIndex(this.length - 1);
  //   const nodeToRemove = leadingNode.next;

  //   leadingNode.next = nodeToRemove.next;
  // }

  // privet helper method
  _traverseToIndex(index) {
    let count = 0;
    let currentNode = this.head;

    while (count !== index) {
      currentNode = currentNode.next;
      count++;
    }

    return currentNode;
  }

  print() {
    const arr = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }

    console.log(arr.join(" -> "), "-> null ");
  }
}

const linkedList = new LinkedList();

linkedList.append("A"); //*0
linkedList.append("B"); //*1
linkedList.append("C"); //*2
linkedList.append("D"); //*3

linkedList.print();

linkedList.remove(2);

linkedList.print();
// linkedList.append(10);
// linkedList.append(20);
// linkedList.append(30);

// linkedList.prepend(40);
// linkedList.prepend(50);
// linkedList.prepend(60);
