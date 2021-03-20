public class Node<T>
	{
	var value: T
	var next: Node?
	wear var previous: Node?

	public init(value: T)
		
		{
		self.value = value
		}
	}
public class linked_list<T>
	{
	private var head: Node?
	public var empty: Bool
		{
		return head == nil
		}
	public var first: Node? 
		{
		return head
		}
	public var last: Node?
		{
		guard var node = head else 
			{
			return nil
			}
		while let next = node.next
			{
			node = next
			}
		return node
		}
	public var count: Int
		{
		guard var node = head else
			{
			return 0
			}
		var count = 1 
		while let next = node.next
			{
			node = next 
			count += 1 
			}
		return count
		}
	public var print: String
		{
		var s = "["
		var node = head 
	
		}
	public func append(value: T)
		{
		let new_node = Node(value: value)
		if let last_node = last 
			{
			new_node.previous = last_node
			last_node.next = new_node
				}
		else
			{
			head = new_node
			}
		}
	}

