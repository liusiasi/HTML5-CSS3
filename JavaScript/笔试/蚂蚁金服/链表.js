let Node = function(element){
    this.element = element;
    this.next = null;
}
function SingleLinkedList() {
    this.head = null;
    // TODO: 你的代码
  }
  
  const prototype = SingleLinkedList.prototype;
  
  prototype.add = function (value) {
      // TODO: 你的代码
      let node = new Node(value);
      if(this.head){
          let current = this.head;
          while(current.next) current = current.next;
          current.next = node;
      }else{
          this.head = node;
      }
  }
  
  prototype.remove =  function (value) {
    // TODO: 你的代码
    let virtureNode = new Node(0);
    virtureNode.next = this.head;
    let current = this.head;
    let pre = virtureNode;
    while(current){
        if(current.element == value){
            pre.next = current.next;
            this.head = virtureNode.next;
            return;
        }else{
            pre = current;
            current = current.next;
        }
    }
  }
  
  prototype.print = function () {
    // TODO: 你的代码
    let current = this.head;
    while(current){
        console.log(current.element);
        current = current.next;
    }
  } 
  var list = new SingleLinkedList();
  list.add(1);
  list.add(2);
  list.add(3);
  list.remove(1);
  list.print(); 