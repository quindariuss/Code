public class stackClothes {
    private Clothes [] stack;
    private int size;
    private static final int SIZE = 5;

public stackClothes(){
    stack = new Clothes[SIZE];
    size = 0; 
}

public void push(String name, String color,boolean highTemp){

    stack[size] = Clothes(name,color,highTemp);
    size++;

}
public int pop(){
    if (size == 0)
        {throw new ArrayIndexOutOfBoundsException();}
        int result = stack[size - 1];
        stack[size -1] = 0;

        size--;

        return result;
    
}

public int peek(){
    if (size == 0) {
        throw new ArrayIndexOutOfBoundsException();
    }

    int result = stack[size-1];
    return result;
}
public int size()
{return size;}

public int clothingColor(String color_) {

    int count = 0;
    for (int num : stack) {

        if (stack[num].equals(color_)) {
            count++;
        }
        
    }
    
}
public static void main(String[] args) {
        stackClothes laundry = new stackClothes();
    laundry.push(shirt, blue, true);
    laundry.push(pants, blue, false);
    laundry.push(jacket, red, false);
}
    
}

