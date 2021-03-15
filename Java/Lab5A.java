public class Lab5A{
    public Node first;
    class Node{
        public double data;
        public Node next;
    }
    public Lab5A(){
        first = null; 
    }
    public void addFront(double num)
    {
        Node newNode = new Node();
        newNode.data = num;
        newNode.next = first;
        first = newNode;
    }

    public double addValues(Lab5A linkedList) {
        Node current = first;
        double values = 0;
        while (current.next!=null){
            values += current.data;
            current = current.next;
        }
       return values;
    }
 
    public static void main(String[] args) {
        Lab5A linkedList = new Lab5A();
        linkedList.addFront(23);
        linkedList.addFront(34);
        
        System.out.println(values);
        
    
    }

    

}