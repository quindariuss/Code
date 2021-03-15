public class clothingStack{
    public Clothing [] stack;
    public int size;
    private static final int size_ = 10; 

    public clothingStack(){
        stack = new Clothing[size_];
        size = 0;
    }
    public void push(Clothing A){
        stack[size]=A;
        size++;
    }
    public void pop(){
        if (size == 0)
            {throw new ArrayIndexOutOfBoundsException();}
            Clothing result = new clothing (stack[size - 1]);
            stack[size -1] = null;
    
            size--;
    
    
        
    }
    
    public void peek(){
        if (size == 0) {
            throw new ArrayIndexOutOfBoundsException();
        }
    
        Clothing result = new Clothing(stack[size-1]);
        System.out.print(5);
    }
    
}