 class LinkedListNode<String> {
  var value: String
  var next: LinkedListNode?
  weak var previous: LinkedListNode?

   init(value: String) {
    self.value = value
  }
}
 class LinkedList<String> {
   typealias Node = LinkedListNode<String>

   var head: Node?

   var isEmpty: Bool {
    return head == nil
  }

   var first: Node? {
    return head
  }
}

//Running Program 

let list = LinkedList<String>()
print("\(list.isEmpty) \(list.first)")
